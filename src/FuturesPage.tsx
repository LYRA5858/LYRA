import React, { useState } from 'react';
import { useMarketData } from './MarketDataContext';

export const FuturesPage: React.FC = () => {
  const contextData = useMarketData() as any;
  const futuresData = contextData?.futuresData || contextData?.futuresPrices || {};
  const isConnected = contextData?.isConnected ?? true;

  const [searchQuery, setSearchQuery] = useState('');

  const futuresList = [
    { symbol: 'BTCUSDT', name: 'Bitcoin Perpetual', maxLeverage: '125x' },
    { symbol: 'ETHUSDT', name: 'Ethereum Perpetual', maxLeverage: '100x' },
    { symbol: 'SOLUSDT', name: 'Solana Perpetual', maxLeverage: '50x' },
    { symbol: 'BNBUSDT', name: 'BNB Perpetual', maxLeverage: '50x' },
    { symbol: 'XRPUSDT', name: 'XRP Perpetual', maxLeverage: '75x' },
  ];

  const filteredData = futuresList.map(item => {
    const live = futuresData[item.symbol] || { price: '0.00', change: '0.00', fundingRate: '0.0000' };
    const rawFunding = parseFloat(live.fundingRate || live.r || '0');
    return {
      ...item,
      price: live.price || live.p || '0.00',
      change: live.change || live.P || '0.00',
      isPositive: parseFloat(live.change || live.P || '0') >= 0,
      fundingRate: `${(rawFunding * 100).toFixed(4)}%`,
      rawFunding
    };
  }).filter(item => 
    item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Vadeli İşlemler (Futures)
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${isConnected ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
              {isConnected ? '● Canlı Akış' : '○ Bağlantı Kuruluyor'}
            </span>
          </h1>
          <p className="text-gray-400 mt-1">Binance Perpetuals canlı fiyat ve fonlama oranları</p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Futures sembol ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1e2329] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-[#F0B90B] focus:outline-none w-full md:w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData.slice(0, 3).map((coin) => (
          <div key={coin.symbol} className="bg-[#1e2329] p-4 rounded-xl border border-gray-800 space-y-2">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span className="font-semibold text-white">{coin.symbol}</span>
              <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded font-mono">{coin.maxLeverage}</span>
            </div>
            <div className="text-xl font-bold font-mono text-white">
              ${parseFloat(coin.price || '0').toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
            </div>
            <div className="flex justify-between text-xs">
              <span className={coin.isPositive ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                {coin.isPositive ? '+' : ''}{parseFloat(coin.change || '0').toFixed(2)}%
              </span>
              <span className="text-gray-400">
                Funding: <strong className="text-white font-mono">{coin.fundingRate}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1e2329] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-sm">
                <th className="p-4 font-medium">Sembol / Kontrat</th>
                <th className="p-4 font-medium">Maks Kaldıraç</th>
                <th className="p-4 font-medium text-right">Mark Fiyatı (USDT)</th>
                <th className="p-4 font-medium text-right">24s Değişim</th>
                <th className="p-4 font-medium text-right">Funding Rate (8s)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {filteredData.map((coin) => (
                <tr key={coin.symbol} className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-white">{coin.symbol}</div>
                    <div className="text-xs text-gray-400">{coin.name}</div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs px-2 py-1 rounded bg-amber-500/10 text-amber-400 font-mono">
                      {coin.maxLeverage}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono font-medium text-white">
                    ${parseFloat(coin.price || '0').toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                  </td>
                  <td className="p-4 text-right font-mono">
                    <span className={`inline-flex items-center gap-1 font-medium ${coin.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {coin.isPositive ? '▲ ' : '▼ '}
                      {parseFloat(coin.change || '0') > 0 ? '+' : ''}{parseFloat(coin.change || '0').toFixed(2)}%
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      coin.rawFunding >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      ⚡ {coin.fundingRate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FuturesPage;
