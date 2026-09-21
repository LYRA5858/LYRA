import React, { useState } from 'react';
import { useMarketData } from './MarketDataContext';

export const CryptoPage: React.FC = () => {
  const contextData = useMarketData() as any;
  const prices = contextData?.prices || contextData?.spotPrices || {};
  const isConnected = contextData?.isConnected ?? true;

  const [selectedSymbol, setSelectedSymbol] = useState('BTCUSDT');

  const coins = [
    { symbol: 'BTCUSDT', name: 'Bitcoin' },
    { symbol: 'ETHUSDT', name: 'Ethereum' },
    { symbol: 'SOLUSDT', name: 'Solana' },
    { symbol: 'BNBUSDT', name: 'BNB' },
    { symbol: 'XRPUSDT', name: 'XRP' },
  ];

  const activeLive = prices[selectedSymbol] || { price: '0.00', change: '0.00' };
  const priceVal = activeLive.price || activeLive.p || '0.00';
  const changeVal = activeLive.change || activeLive.P || '0.00';
  const isPositive = parseFloat(changeVal) >= 0;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Kripto Varlık Detayı
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${isConnected ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
              {isConnected ? '● Canlı Binance Verisi' : '○ Bağlantı Kuruluyor'}
            </span>
          </h1>
          <p className="text-gray-400 mt-1">Seçili sembolün anlık Binance Spot fiyatları</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {coins.map((c) => (
            <button
              key={c.symbol}
              onClick={() => setSelectedSymbol(c.symbol)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                selectedSymbol === c.symbol
                  ? 'bg-[#F0B90B] text-black shadow-lg shadow-[#F0B90B]/10'
                  : 'bg-[#1e2329] text-gray-300 hover:bg-gray-800'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#1e2329] p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm text-gray-400 font-medium">{selectedSymbol} Spot</span>
          <div className="text-3xl font-extrabold font-mono text-white mt-1">
            ${parseFloat(priceVal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
            {isPositive ? '▲' : '▼'}
          </div>
          <div>
            <div className="text-xs text-gray-400">24 Saatlik Değişim</div>
            <div className={`text-xl font-bold font-mono ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isPositive ? '+' : ''}{parseFloat(changeVal).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e2329] p-4 rounded-xl border border-gray-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white flex items-center gap-2">
            📈 {selectedSymbol} Canlı Grafik
          </h3>
        </div>
        <div className="w-full h-[450px] rounded-lg overflow-hidden bg-[#0b0e11]">
          <iframe
            title={`${selectedSymbol} Chart`}
            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=BINANCE%3A${selectedSymbol}&interval=15&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC`}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoPage;
