import express from "express";
import cors from "cors";
import "dotenv/config";
import WebSocket, { WebSocketServer } from "ws";
import OpenAI from "openai";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

/* -----------------------------
   SERVER / RENDER CONFIG
----------------------------- */

const PORT = Number(process.env.PORT || 8787);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "dist");

/* -----------------------------
   MARKET STATE
----------------------------- */

const state = {
  updatedAt: null,

  spot: {
    BTCUSDT: null,
    ETHUSDT: null,
    SOLUSDT: null,
    BNBUSDT: null,
    XRPUSDT: null,
  },

  futures: {
    BTCUSDT: null,
    ETHUSDT: null,
    SOLUSDT: null,
    BNBUSDT: null,
    XRPUSDT: null,
  },
};

const browserClients = new Set();

function snapshot() {
  return {
    updatedAt: state.updatedAt,
    spot: state.spot,
    futures: state.futures,
  };
}

function broadcast() {
  const payload = JSON.stringify({
    type: "market.update",
    data: snapshot(),
  });

  for (const client of browserClients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  }
}

/* -----------------------------
   BINANCE SPOT
----------------------------- */

const spotSymbols = [
  "BTCUSDT",
  "ETHUSDT",
  "SOLUSDT",
  "BNBUSDT",
  "XRPUSDT",
];

async function updateSpot() {
  try {
    const results = await Promise.all(
      spotSymbols.map(async (symbol) => {
        const response = await fetch(
          `https://data-api.binance.vision/api/v3/ticker/24hr?symbol=${symbol}`
        );

        if (!response.ok) {
          throw new Error(
            `${symbol}: HTTP ${response.status}`
          );
        }

        return response.json();
      })
    );

    for (const data of results) {
      const symbol = data.symbol;

      state.spot[symbol] = {
        symbol,
        price: Number(data.lastPrice),
        change24h: Number(data.priceChangePercent),
        high24h: Number(data.highPrice),
        low24h: Number(data.lowPrice),
        volume24h: Number(data.volume),
        timestamp: Number(data.closeTime),
      };
    }

    state.updatedAt = Date.now();
    broadcast();

    console.log("✅ Binance Spot REST güncellendi");
  } catch (error) {
    console.error(
      "Spot REST veri hatası:",
      error.message
    );
  }
}

updateSpot();
setInterval(updateSpot, 3000);
/* -----------------------------
   BINANCE USD-M FUTURES
----------------------------- */

function connectFuturesSymbol(symbol) {
  const stream =
    `${symbol.toLowerCase()}@markPrice`;

  const url =
    `wss://fstream.binance.com/market/ws/${stream}`;

  console.log(`FUTURES baÄŸlantÄ±sÄ± kuruluyor: ${symbol}`);

  const ws = new WebSocket(url);

  ws.on("open", () => {
    console.log(`âœ… Futures aktif: ${symbol}`);
  });

  ws.on("message", (raw) => {
    try {
      const data = JSON.parse(raw.toString());

      if (!data?.s || data.s !== symbol) {
        return;
      }

      state.futures[symbol] = {
        symbol,
        price: Number(data.p),
        fundingRate: Number(data.r),
        timestamp: data.E,
      };

      state.updatedAt = Date.now();

      broadcast();
    } catch (error) {
      console.error(
        `Futures veri hatasÄ± ${symbol}:`,
        error.message
      );
    }
  });

  ws.on("close", () => {
    console.log(
      `âš ï¸ Futures baÄŸlantÄ±sÄ± kapandÄ±: ${symbol}. Yeniden baÄŸlanÄ±lÄ±yor...`
    );

    setTimeout(() => {
      connectFuturesSymbol(symbol);
    }, 3000);
  });

  ws.on("error", (error) => {
    console.error(
      `Futures WebSocket hatasÄ± ${symbol}:`,
      error.message
    );
  });
}

/* -----------------------------
   HTTP API
----------------------------- */

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "LYRA backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/prices", (req, res) => {
  res.json(snapshot());
});

/* -----------------------------
   LYRA AI
----------------------------- */

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;
  app.get("/api/klines", async (req, res) => {
    try {
      const symbol = String(req.query.symbol || "BTCUSDT").toUpperCase();
      const interval = String(req.query.interval || "1h");
      const limit = Math.min(Math.max(Number(req.query.limit || 100), 20), 1000);

      const allowedIntervals = ["1m", "5m", "15m", "1h", "4h", "1d", "1w", "1M"];

      if (!allowedIntervals.includes(interval)) {
        return res.status(400).json({
          ok: false,
          error: "Geçersiz interval.",
        });
      }

      const response = await fetch(
        `https://data-api.binance.vision/api/v3/klines?symbol=${encodeURIComponent(symbol)}&interval=${encodeURIComponent(interval)}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error(`Binance HTTP ${response.status}`);
      }

      const rows = await response.json();

      const candles = rows.map((row) => ({
        time: Number(row[0]),
        open: Number(row[1]),
        high: Number(row[2]),
        low: Number(row[3]),
        close: Number(row[4]),
        volume: Number(row[5]),
      }));

      res.json({
        ok: true,
        symbol,
        interval,
        candles,
      });
    } catch (error) {
      console.error("Klines API hatası:", error.message);

      res.status(500).json({
        ok: false,
        error: "Geçmiş piyasa verisi alınamadı.",
      });
    }
  });

app.post("/api/ai", async (req, res) => {
  try {
    if (!openai) {
      return res.status(503).json({
        ok: false,
        error: "OPENAI_API_KEY tanÄ±mlÄ± deÄŸil.",
      });
    }

    const prompt = String(req.body?.prompt || "").trim();

    if (!prompt) {
      return res.status(400).json({
        ok: false,
        error: "prompt gerekli.",
      });
    }

    const marketData = JSON.stringify(snapshot(), null, 2);

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",

      instructions: `
Sen LYRA adlÄ± finansal analiz uygulamasÄ±nÄ±n yapay zeka asistanÄ±sÄ±n.

GÃ¶revin:
- KullanÄ±cÄ±ya piyasa verilerini anlaÅŸÄ±lÄ±r ÅŸekilde analiz etmek.
- Verileri ve yorumlarÄ± birbirinden ayÄ±rmak.
- Belirsizlikleri aÃ§Ä±kÃ§a belirtmek.
- Kesin kazanÃ§, kesin kayÄ±p veya garanti dili kullanmamak.
- KullanÄ±cÄ± adÄ±na yatÄ±rÄ±m kararÄ± vermemek.
- GerektiÄŸinde teknik ve temel verileri birlikte deÄŸerlendirmek.
- YanÄ±tlarÄ±nÄ± TÃ¼rkÃ§e vermek.

Elindeki piyasa verisi gerÃ§ek zamanlÄ± piyasa akÄ±ÅŸÄ±ndan gelir.
Veri eksikse bunu aÃ§Ä±kÃ§a belirt.
`,

      input: `
KULLANICI SORUSU:
${prompt}

GÃœNCEL PÄ°YASA VERÄ°LERÄ°:
${marketData}
      `,
    });

    res.json({
      ok: true,
      text: response.output_text,
      marketUpdatedAt: state.updatedAt,
    });
  } catch (error) {
    console.error("LYRA AI hatasÄ±:", error);

    res.status(500).json({
      ok: false,
      error: error.message || "AI isteÄŸi baÅŸarÄ±sÄ±z.",
    });
  }
});

/* -----------------------------
   STATIC FRONTEND
----------------------------- */

app.use(express.static(distPath));

/* -----------------------------
   SPA FALLBACK
----------------------------- */

app.use((req, res, next) => {
  if (
    req.path.startsWith("/api/") ||
    req.path === "/ws"
  ) {
    return next();
  }

  if (req.method === "GET") {
    return res.sendFile(
      path.join(distPath, "index.html")
    );
  }

  next();
});

/* -----------------------------
   HTTP + WEBSOCKET SERVER
----------------------------- */

const server = http.createServer(app);

const wss = new WebSocketServer({
  server,
  path: "/ws",
});

wss.on("connection", (socket) => {
  browserClients.add(socket);

  socket.send(
    JSON.stringify({
      type: "market.snapshot",
      data: snapshot(),
    })
  );

  socket.on("close", () => {
    browserClients.delete(socket);
  });

  socket.on("error", () => {
    browserClients.delete(socket);
  });
});

/* -----------------------------
   START
----------------------------- */

server.listen(PORT, "0.0.0.0", () => {
  console.log("");
  console.log("======================================");
  console.log("        LYRA BACKEND AKTÄ°F");
  console.log("======================================");
  console.log(`HTTP + WS : http://localhost:${PORT}`);
  console.log(`WebSocket : ws://localhost:${PORT}/ws`);
  console.log("======================================");
  console.log("");
});

for (const symbol of Object.keys(state.futures)) {
  connectFuturesSymbol(symbol);
}


