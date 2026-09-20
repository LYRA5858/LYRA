import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type MarketItem = {
  symbol: string;
  price: number;
  change24h?: number;
  high24h?: number;
  low24h?: number;
  volume24h?: number;
  fundingRate?: number;
  timestamp?: number;
};

type MarketData = {
  updatedAt: number | null;
  spot: Record<string, MarketItem | null>;
  futures: Record<string, MarketItem | null>;
};

type MarketContextType = {
  data: MarketData;
  connected: boolean;
};

const emptyData: MarketData = {
  updatedAt: null,
  spot: {},
  futures: {},
};

const MarketDataContext = createContext<MarketContextType>({
  data: emptyData,
  connected: false,
});

export function MarketDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<MarketData>(emptyData);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8788");

    socket.onopen = () => {
      console.log("✅ LYRA canlı market bağlantısı aktif");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        if (
          message.type === "market.snapshot" ||
          message.type === "market.update"
        ) {
          setData(message.data);
        }
      } catch (error) {
        console.error("Market verisi okunamadı:", error);
      }
    };

    socket.onerror = () => {
      console.error("❌ LYRA market WebSocket hatası");
      setConnected(false);
    };

    socket.onclose = () => {
      console.log("⚠️ LYRA market bağlantısı kapandı");
      setConnected(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <MarketDataContext.Provider value={{ data, connected }}>
      {children}
    </MarketDataContext.Provider>
  );
}

export function useMarketData() {
  return useContext(MarketDataContext);
}