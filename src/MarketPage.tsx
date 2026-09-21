import React, { useState } from 'react';
import { useMarketData } from './MarketDataContext';

interface MarketPageProps {
  section?: string;
}

export const MarketPage: React.FC<MarketPageProps> = ({ section: _section }) => {
  const contextData = useMarketData() as any;
  const prices = contextData?.prices || contextData?.spotPrices || {};
  const futuresData = contextData?.futuresData || contextData?.futuresPrices || {};
  const isConnected = contextData?.isConnected ?? true;

  const [activeTab, setActiveTab] = useState<'all' | 'spot' | 'futures'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const spotList = [
    { symbol: 'BTCUSDT', name: 'Bitcoin', type: 'Spot' },
    { symbol: 'ETHUSDT', name: 'Ethereum', type: 'Spot' },
    { symbol: 'SOLUSDT', name: 'Solana', type: 'Spot' },
    { symbol: 'BNBUSDT', name: 'BNB', type: 'Spot' },
    { symbol: 'XRPUSDT', name: 'XRP', type: 'Spot' },
  ];

  const futuresList = [
    { symbol: 'BTCUSDT', name: 'Bitcoin Perpetual', type: 'Futures' },
    { symbol: 'ETHUSDT', name: 'Ethereum Perpetual', type: 'Futures' },
    { symbol: 'SOLUSDT', name: 'Solana Perpetual', type: 'Futures' },
    { symbol: 'BNBUSDT', name: 'BNB Perpetual', type: 'Futures' },
    { symbol: 'XRPUSDT', name: 'XRP Perpetual', type: 'Futures' },
  ];

  const marketData = [
    ...(activeTab === 'futures' ? [] : spotList.map(item => {
      const live = prices[item.symbol] || { price: '0.00', change: '0.00' };
      return {
        ...item,
        price: live.price || live.p || '0.00',
        change: live.change || live.P || '0.00',
        isPositive: parseFloat(live.change || live.P || '0') >= 0,
        fundingRate: '-'
      };
    })),
    ...(activeTab === 'spot' ? [] : futuresList.map(item => {
      const liveFut = futuresData[item.symbol] || { price: '0.00', change: '0.00', fundingRate: '0.0000' };
      return {
        ...item,
        price: liveFut.price || liveFut.p || '0.00',
        change: liveFut.change || liveFut.P || '0.00',
        isPositive: parseFloat(liveFut.change || liveFut.P || '0') >= 0,
        fundingRate: `${(parseFloat(liveFut.fundingRate || liveFut.r || '0') * 100).toFixed(4)}%`
      };
    }))
  ].filter(item => 
    item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Piyasa Kayıtları
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${isConnected ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
              {isConnected ? '● Canlı Veri Akışı' : '○ Bağlantı Kuruluyor'}
            </span>
          </h1>
          <p className="text-gray-400 mt-1">Binance canlı spot ve futures piyasa verileri</p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Kripto ara (BTC, ETH...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1e2329] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-[#F0B90B] focus:outline-none w-full md:w-64"
          />
        </div>
      </div>

      <div className="flex gap-2 border-b border-gray-800 pb-2">
        {(['all', 'spot', 'futures'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
              activeTab === tab 
                ? 'bg-[#F0B90B] text-black font-semibold' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {tab === 'all' ? 'Tümü' : tab === 'spot' ? 'Spot Piyasası' : 'Futures (Vadeli)'}
          </button>
        ))}
      </div>

      <div className="bg-[#1e2329] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-sm">
                <th className="p-4 font-medium">Piyasa / Sembol</th>
                <th className="p-4 font-medium">Tür</th>
                <th className="p-4 font-medium text-right">Son Fiyat (USDT)</th>
                <th className="p-4 font-medium text-right">24s Değişim</th>
                <th className="p-4 font-medium text-right">Funding Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {marketData.map((coin, idx) => (
                <tr key={`${coin.symbol}-${coin.type}-${idx}`} className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-white">{coin.symbol}</div>
                    <div className="text-xs text-gray-400">{coin.name}</div>
                  </td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      coin.type === 'Spot' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'
                    }`}>
                      {coin.type}
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
                  <td className="p-4 text-right font-mono text-gray-300">
                    {coin.fundingRate}
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

export default MarketPage;
