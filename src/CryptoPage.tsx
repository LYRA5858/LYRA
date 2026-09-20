import { useState } from "react";
import "./crypto-page.css";

type CryptoAsset = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  positive: boolean;
};

const cryptoAssets: CryptoAsset[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$68,432.12",
    change: "+2.34%",
    positive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,180.45",
    change: "+1.87%",
    positive: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$142.67",
    change: "+3.21%",
    positive: true,
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "$583.21",
    change: "+0.98%",
    positive: true,
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: "$0.5214",
    change: "+1.56%",
    positive: true,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "$0.3921",
    change: "+2.11%",
    positive: true,
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    price: "$32.78",
    change: "+2.87%",
    positive: true,
  },
  {
    symbol: "TRX",
    name: "TRON",
    price: "$0.1256",
    change: "+0.73%",
    positive: true,
  },
];

const chartPoints = [
  [0, 255],
  [28, 267],
  [56, 248],
  [84, 253],
  [112, 228],
  [140, 236],
  [168, 210],
  [196, 218],
  [224, 190],
  [252, 201],
  [280, 180],
  [308, 188],
  [336, 165],
  [364, 173],
  [392, 145],
  [420, 153],
  [448, 131],
  [476, 140],
  [504, 116],
  [532, 127],
  [560, 104],
  [588, 112],
  [616, 92],
  [644, 101],
  [672, 76],
  [700, 86],
  [728, 65],
  [756, 78],
  [784, 59],
  [812, 71],
  [840, 49],
  [868, 62],
  [896, 40],
];

const news = [
  {
    icon: "₿",
    title: "Bitcoin 68.000 dolar seviyesinin üzerinde tutunuyor.",
    time: "12 dk önce",
  },
  {
    icon: "◆",
    title: "ETH'de büyük cüzdan hareketliliği takip ediliyor.",
    time: "34 dk önce",
  },
  {
    icon: "≋",
    title: "Solana ekosisteminde yeni gelişmeler.",
    time: "1 saat önce",
  },
  {
    icon: "B",
    title: "BNB işlem hacminde artış gösterdi.",
    time: "2 saat önce",
  },
];

export default function CryptoPage() {
  const [selected, setSelected] = useState("BTC");

  const selectedAsset =
    cryptoAssets.find((asset) => asset.symbol === selected) ??
    cryptoAssets[0];

  const symbolIcon =
    selectedAsset.symbol === "BTC"
      ? "₿"
      : selectedAsset.symbol === "ETH"
      ? "◆"
      : selectedAsset.symbol === "SOL"
      ? "≋"
      : "●";

  const path = chartPoints
    .map(([x, y], index) =>
      index === 0 ? `M${x} ${y}` : `L${x} ${y}`
    )
    .join(" ");

  const areaPath = `${path} L896 300 L0 300 Z`;

  return (
    <div className="crypto-page">
      <div className="crypto-layout">

        {/* LEFT ASSET LIST */}
        <aside className="crypto-assets-panel">

          <div className="crypto-search">
            <span>⌕</span>
            <input placeholder="Coin, sembol veya isim ara..." />
          </div>

          <div className="crypto-list-title">
            PİYASALAR
          </div>

          <div className="crypto-asset-list">
            {cryptoAssets.map((asset) => (
              <button
                key={asset.symbol}
                className={`crypto-asset ${
                  selected === asset.symbol ? "active" : ""
                }`}
                onClick={() => setSelected(asset.symbol)}
              >
                <div className="crypto-asset-icon">
                  {asset.symbol === "BTC"
                    ? "₿"
                    : asset.symbol === "ETH"
                    ? "◆"
                    : asset.symbol === "SOL"
                    ? "≋"
                    : asset.symbol === "BNB"
                    ? "B"
                    : asset.symbol === "XRP"
                    ? "X"
                    : asset.symbol === "ADA"
                    ? "A"
                    : asset.symbol === "AVAX"
                    ? "A"
                    : "T"}
                </div>

                <div className="crypto-asset-info">
                  <strong>{asset.symbol}</strong>
                  <span>{asset.name}</span>
                </div>

                <div className="crypto-asset-price">
                  <strong>{asset.price}</strong>
                  <span className="positive">
                    {asset.change}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="crypto-favorites-title">
            Favorilerim
          </div>

          <div className="crypto-favorites">
            {cryptoAssets.slice(0, 5).map((asset) => (
              <div
                className="crypto-favorite-row"
                key={asset.symbol}
              >
                <span>{asset.symbol}</span>
                <span>☆</span>
              </div>
            ))}
          </div>

        </aside>

        {/* CENTER */}
        <main className="crypto-center">

          {/* HEADER */}
          <div className="crypto-market-head">

            <div className="crypto-market-title">

              <div className="crypto-main-icon">
                {symbolIcon}
              </div>

              <div>
                <div className="crypto-symbol">
                  {selectedAsset.symbol} / USDT
                </div>

                <div className="crypto-name">
                  {selectedAsset.name}
                </div>
              </div>

            </div>

            <div className="crypto-price-block">
              <strong>{selectedAsset.price}</strong>
              <span className="positive">
                {selectedAsset.change}
              </span>
            </div>

            <CryptoMetric
              label="24s Hacim"
              value="$28.4B"
            />

            <CryptoMetric
              label="24s En Yüksek"
              value="$69,210.45"
            />

            <CryptoMetric
              label="24s En Düşük"
              value="$65,780.12"
            />

          </div>

          {/* CHART */}
          <div className="crypto-chart-card">

            <div className="crypto-chart-toolbar">

              <div className="crypto-time-buttons">
                <button>1m</button>
                <button>5m</button>
                <button>15m</button>
                <button className="active">1H</button>
                <button>4H</button>
                <button>1D</button>
                <button>1W</button>
                <button>1M</button>
              </div>

              <div className="crypto-chart-actions">
                <button>◫</button>
                <button>⚙</button>
                <button>⛶</button>
              </div>

            </div>

            <div className="crypto-chart-info">
              <span>A 68,210.45</span>
              <span>Y 68,765.32</span>
              <span>D 68,012.34</span>
              <span>K 68,432.12</span>
              <span className="positive">
                +221.67 (+0.32%)
              </span>
            </div>

            <div className="crypto-chart">

              <div className="crypto-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="crypto-y-axis">
                <span>72,000</span>
                <span>70,000</span>
                <span>68,000</span>
                <span>66,000</span>
                <span>64,000</span>
                <span>62,000</span>
              </div>

              <div className="crypto-tools">
                <button>+</button>
                <button>⌁</button>
                <button>☷</button>
                <button>◒</button>
                <button>T</button>
                <button>⌗</button>
                <button>⊕</button>
              </div>

              <svg
                viewBox="0 0 896 300"
                preserveAspectRatio="none"
                aria-label="Kripto grafik"
              >
                <defs>
                  <linearGradient
                    id="cryptoArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6947ff"
                      stopOpacity="0.30"
                    />
                    <stop
                      offset="100%"
                      stopColor="#6947ff"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d={areaPath}
                  fill="url(#cryptoArea)"
                />

                <path
                  d={path}
                  fill="none"
                  stroke="#7352ff"
                  strokeWidth="3"
                />
              </svg>

              <div className="crypto-current-price">
                {selectedAsset.price}
              </div>

              <div className="crypto-volume">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="crypto-chart-dates">
                <span>08 Nis</span>
                <span>09 Nis</span>
                <span>10 Nis</span>
                <span>11 Nis</span>
                <span>12 Nis</span>
              </div>

            </div>
          </div>

          {/* LYRA ANALYSIS */}
          <div className="crypto-panel crypto-analysis-panel">

            <div className="crypto-analysis-icon">
              ✦
            </div>

            <div className="crypto-analysis-content">

              <div className="crypto-analysis-head">
                <div>
                  <span>LYRA ANALİZİ</span>
                  <strong>AI FIRSATI</strong>
                </div>

                <button>Detaylı Analiz →</button>
              </div>

              <h2>
                {selectedAsset.symbol} için güçlü yükseliş momentumu
              </h2>

              <p>
                Fiyat kısa vadede pozitif trend gösteriyor.
                RSI pozitif bölgede ve işlem hacminde artış
                gözleniyor.
              </p>

              <div className="crypto-analysis-stats">

                <div>
                  <span>Trend</span>
                  <strong className="positive">
                    ↗ Yükseliş
                  </strong>
                </div>

                <div>
                  <span>RSI (1H)</span>
                  <strong>62.4</strong>
                </div>

                <div>
                  <span>Destek</span>
                  <strong>66,800 - 67,500</strong>
                </div>

                <div>
                  <span>Direnç</span>
                  <strong>69,800 - 70,500</strong>
                </div>

                <div>
                  <span>Risk Oranı</span>
                  <strong className="medium-risk">
                    Orta
                  </strong>
                </div>

              </div>

            </div>

          </div>

          {/* OPPORTUNITY */}
          <div className="crypto-panel crypto-opportunity-panel">

            <div className="crypto-panel-title">
              <div>
                <h2>FIRSAT BİLGİLERİ</h2>
                <span>LYRA'nın mevcut strateji görünümü</span>
              </div>

              <button>Tümü →</button>
            </div>

            <div className="crypto-opportunity-row">

              <div>
                <span>Strateji</span>
                <strong>Trend Takibi</strong>
              </div>

              <div>
                <span>Giriş Bölgesi</span>
                <strong>67,800 - 68,200</strong>
              </div>

              <div>
                <span>Hedef</span>
                <strong className="positive">
                  70,500
                </strong>
              </div>

              <div>
                <span>Stop</span>
                <strong className="negative">
                  66,200
                </strong>
              </div>

              <div>
                <span>Risk/Ödül</span>
                <strong className="positive">
                  1 : 2.8
                </strong>
              </div>

            </div>

          </div>

          {/* OPEN POSITIONS */}
          <div className="crypto-panel crypto-positions-panel">

            <div className="crypto-panel-title">
              <div>
                <h2>Açık Pozisyonlar (2)</h2>
                <span>Aktif işlemler</span>
              </div>

              <button>Tümü →</button>
            </div>

            <div className="crypto-position-head">
              <span>Coin</span>
              <span>Yön</span>
              <span>Kaldıraç</span>
              <span>Pozisyon</span>
              <span>Giriş</span>
              <span>Mevcut</span>
              <span>K/Z</span>
            </div>

            <div className="crypto-position-row">
              <strong>BTC/USDT</strong>
              <span className="long">Long</span>
              <span>10x</span>
              <span>0.10 BTC</span>
              <span>66,820</span>
              <span>68,432</span>
              <strong className="positive">+342.18</strong>
            </div>

            <div className="crypto-position-row">
              <strong>ETH/USDT</strong>
              <span className="short">Short</span>
              <span>5x</span>
              <span>2.50 ETH</span>
              <span>3,280</span>
              <span>3,245</span>
              <strong className="positive">+48.32</strong>
            </div>

          </div>

        </main>

        {/* RIGHT SIDE */}
        <aside className="crypto-right">

          {/* ORDER */}
          <div className="crypto-order-panel">

            <div className="crypto-order-tabs">
              <button className="active">Al / Sat</button>
              <button>Limit</button>
              <button>Piyasa</button>
              <button>Stop</button>
            </div>

            <div className="crypto-buy-sell">
              <button className="active">Al</button>
              <button>Sat</button>
            </div>

            <label>Tutar</label>

            <input placeholder="0.00" />

            <div className="crypto-percentages">
              <button>%25</button>
              <button>%50</button>
              <button>%75</button>
              <button>%100</button>
            </div>

            <label>Toplam Tutar</label>

            <input placeholder="0.00" />

            <button className="crypto-buy-button">
              Al BTC
            </button>

          </div>

          {/* CASH */}
          <div className="crypto-panel crypto-cash-panel">

            <div className="crypto-panel-title">
              <div>
                <h2>Kasa Özeti</h2>
                <span>Güncel finansal durum</span>
              </div>

              <button>Detay</button>
            </div>

            <div className="crypto-cash-grid">

              <div>
                <span>Serbest Kasa</span>
                <strong>$12,480.32</strong>
              </div>

              <div>
                <span>Kullanılabilir</span>
                <strong>$9,984.27</strong>
              </div>

              <div>
                <span>Açık Risk</span>
                <strong className="negative">$620.15</strong>
              </div>

            </div>

          </div>

          {/* OPEN POSITION */}
          <div className="crypto-panel crypto-right-position">

            <div className="crypto-panel-title">
              <div>
                <h2>Açık Pozisyon</h2>
                <span>BTC/USDT</span>
              </div>

              <span className="long">Long 10x</span>
            </div>

            <div className="crypto-position-profit">
              <strong className="positive">
                +342.18 USDT
              </strong>
              <span>+8.24%</span>
            </div>

            <CryptoSideRow
              label="Pozisyon Büyüklüğü"
              value="0.10 BTC"
            />

            <CryptoSideRow
              label="Giriş Fiyatı"
              value="66,820.12"
            />

            <CryptoSideRow
              label="Mevcut Fiyat"
              value="68,432.12"
            />

            <CryptoSideRow
              label="Kullanılan Teminat"
              value="684.32 USDT"
            />

            <div className="crypto-liquidation">
              <span>Likidasyon Fiyatı</span>
              <strong>7,201.67 USDT</strong>
            </div>

          </div>

          {/* NEWS */}
          <div className="crypto-panel crypto-news-panel">

            <div className="crypto-panel-title">
              <div>
                <h2>Son Gelişmeler</h2>
                <span>Piyasa haberleri</span>
              </div>

              <button>Tümü →</button>
            </div>

            <div className="crypto-news-list">
              {news.map((item, index) => (
                <div className="crypto-news-item" key={index}>

                  <div className="crypto-news-icon">
                    {item.icon}
                  </div>

                  <div>
                    <p>{item.title}</p>
                    <span>{item.time}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </aside>

      </div>
    </div>
  );
}

function CryptoMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="crypto-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CryptoSideRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="crypto-side-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}