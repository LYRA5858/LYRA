import express from "express";
import cors from "cors";
import "dotenv/config";
import WebSocket, { WebSocketServer } from "ws";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const HTTP_PORT = 8787;
const WS_PORT = 8788;

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

function connectSpot() {
  const streams = [
    "btcusdt@ticker",
    "ethusdt@ticker",
    "solusdt@ticker",
    "bnbusdt@ticker",
    "xrpusdt@ticker",
  ].join("/");

  const url =
    `wss://stream.binance.com:9443/stream?streams=${streams}`;

  console.log("SPOT bağlantısı kuruluyor...");

  const ws = new WebSocket(url);

  ws.on("open", () => {
    console.log("✅ Binance Spot bağlantısı aktif");
  });

  ws.on("message", (raw) => {
    try {
      const message = JSON.parse(raw.toString());
      const data = message?.data;

      if (!data?.s) {
        return;
      }

      const symbol = data.s.toUpperCase();

      if (state.spot[symbol] === undefined) {
        return;
      }

      state.spot[symbol] = {
        symbol,
        price: Number(data.c),
        change24h: Number(data.P),
        high24h: Number(data.h),
        low24h: Number(data.l),
        volume24h: Number(data.v),
        timestamp: data.E,
      };

      state.updatedAt = Date.now();

      broadcast();
    } catch (error) {
      console.error("Spot veri hatası:", error.message);
    }
  });

  ws.on("close", () => {
    console.log("⚠️ Binance Spot bağlantısı kapandı. Yeniden bağlanılıyor...");
    setTimeout(connectSpot, 3000);
  });

  ws.on("error", (error) => {
    console.error("Spot WebSocket hatası:", error.message);
  });
}

/* -----------------------------
   BINANCE USD-M FUTURES
----------------------------- */

function connectFuturesSymbol(symbol) {
  const stream =
    `${symbol.toLowerCase()}@markPrice`;

  const url =
    `wss://fstream.binance.com/market/ws/${stream}`;

  console.log(`FUTURES bağlantısı kuruluyor: ${symbol}`);

  const ws = new WebSocket(url);

  ws.on("open", () => {
    console.log(`✅ Futures aktif: ${symbol}`);
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
      console.error(`Futures veri hatası ${symbol}:`, error.message);
    }
  });

  ws.on("close", () => {
    console.log(
      `⚠️ Futures bağlantısı kapandı: ${symbol}. Yeniden bağlanılıyor...`
    );

    setTimeout(() => {
      connectFuturesSymbol(symbol);
    }, 3000);
  });

  ws.on("error", (error) => {
    console.error(
      `Futures WebSocket hatası ${symbol}:`,
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

app.post("/api/ai", async (req, res) => {
  try {
    if (!openai) {
      return res.status(503).json({
        ok: false,
        error: "OPENAI_API_KEY tanımlı değil.",
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
Sen LYRA adlı finansal analiz uygulamasının yapay zeka asistanısın.

Görevin:
- Kullanıcıya piyasa verilerini anlaşılır şekilde analiz etmek.
- Verileri ve yorumları birbirinden ayırmak.
- Belirsizlikleri açıkça belirtmek.
- Kesin kazanç, kesin kayıp veya garanti dili kullanmamak.
- Kullanıcı adına yatırım kararı vermemek.
- Gerektiğinde teknik ve temel verileri birlikte değerlendirmek.
- Yanıtlarını Türkçe vermek.

Elindeki piyasa verisi gerçek zamanlı piyasa akışından gelir.
Veri eksikse bunu açıkça belirt.
`,

      input: `
KULLANICI SORUSU:
${prompt}

GÜNCEL PİYASA VERİLERİ:
${marketData}
      `,
    });

    res.json({
      ok: true,
      text: response.output_text,
      marketUpdatedAt: state.updatedAt,
    });
  } catch (error) {
    console.error("LYRA AI hatası:", error);

    res.status(500).json({
      ok: false,
      error: error.message || "AI isteği başarısız.",
    });
  }
});

/* -----------------------------
   WEBSOCKET FOR LYRA FRONTEND
----------------------------- */

const wss = new WebSocketServer({
  port: WS_PORT,
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

app.listen(HTTP_PORT, () => {
  console.log("");
  console.log("======================================");
  console.log("        LYRA BACKEND AKTİF");
  console.log("======================================");
  console.log(`HTTP API : http://localhost:${HTTP_PORT}`);
  console.log(`WS API   : ws://localhost:${WS_PORT}`);
  console.log("======================================");
  console.log("");
});

connectSpot();

for (const symbol of Object.keys(state.futures)) {
  connectFuturesSymbol(symbol);
}