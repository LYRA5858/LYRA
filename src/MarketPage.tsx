import "./market-page.css";

type MarketPageProps = {
  section: string;
};

const pageData: Record<
  string,
  {
    title: string;
    subtitle: string;
    symbol: string;
    name: string;
    price: string;
    change: string;
    market: string;
  }
> = {
  Kripto: {
    title: "Kripto Piyasaları",
    subtitle: "Kripto varlıkları ve LYRA analizlerini takip et.",
    symbol: "BTC/USDT",
    name: "Bitcoin",
    price: "$67,432.12",
    change: "+2.34%",
    market: "Kripto",
  },

  Futures: {
    title: "Futures",
    subtitle: "Vadeli işlemler, açık pozisyonlar ve risk yönetimi.",
    symbol: "BTC/USDT",
    name: "Bitcoin Perpetual",
    price: "$67,432.12",
    change: "+2.34%",
    market: "Futures",
  },

  BIST: {
    title: "BIST Piyasaları",
    subtitle: "Borsa İstanbul varlıklarını ve fırsatlarını takip et.",
    symbol: "BIST100",
    name: "BIST 100",
    price: "10,237",
    change: "+1.34%",
    market: "BIST",
  },

  "ABD Hisseleri": {
    title: "ABD Hisseleri",
    subtitle: "ABD piyasalarındaki hisseleri ve fırsatları takip et.",
    symbol: "NVDA",
    name: "NVIDIA",
    price: "$145.62",
    change: "+2.73%",
    market: "ABD",
  },
};

export default function MarketPage({ section }: MarketPageProps) {
  const data = pageData[section] ?? pageData.Kripto;

  return (
    <div className="market-page">
      <div className="market-page-header">
        <div>
          <div className="market-page-eyebrow">
            LYRA / {data.market.toUpperCase()}
          </div>

          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>

        <div className="market-live">
          <span />
          Piyasa Açık
        </div>
      </div>

      <div className="market-summary">
        <div className="summary-main">
          <div className="big-coin">
            {data.market === "Kripto" || data.market === "Futures"
              ? "₿"
              : data.market === "ABD"
              ? "N"
              : "₺"}
          </div>

          <div>
            <div className="summary-symbol">{data.symbol}</div>
            <div className="summary-name">{data.name}</div>
          </div>
        </div>

        <div>
          <span>Fiyat</span>
          <strong>{data.price}</strong>
        </div>

        <div>
          <span>24s Değişim</span>
          <strong className="positive">{data.change}</strong>
        </div>

        <div>
          <span>24s Yüksek</span>
          <strong>
            {data.market === "BIST"
              ? "10,320"
              : data.market === "ABD"
              ? "$148.20"
              : "$69,210"}
          </strong>
        </div>

        <div>
          <span>24s Düşük</span>
          <strong>
            {data.market === "BIST"
              ? "10,020"
              : data.market === "ABD"
              ? "$142.80"
              : "$65,780"}
          </strong>
        </div>
      </div>

      <div className="market-layout">
        <div className="market-main-column">
          <div className="market-card-large">
            <div className="market-card-header">
              <div className="time-buttons">
                <button>1m</button>
                <button>5m</button>
                <button>15m</button>
                <button className="active">1H</button>
                <button>4H</button>
                <button>1D</button>
                <button>1W</button>
              </div>

              <span className="chart-source">LYRA Market Data</span>
            </div>

            <div className="trading-chart">
              <div className="chart-grid" />

              <svg
                viewBox="0 0 1000 430"
                preserveAspectRatio="none"
                aria-label="Piyasa grafiği"
              >
                <defs>
                  <linearGradient
                    id="marketArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6947ff"
                      stopOpacity="0.28"
                    />
                    <stop
                      offset="100%"
                      stopColor="#6947ff"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 330
                  C30 315 50 340 85 320
                  C120 300 135 325 170 300
                  C205 275 235 305 270 275
                  C300 248 330 278 365 245
                  C400 220 425 248 460 220
                  C500 188 535 225 565 195
                  C600 165 625 205 660 175
                  C700 145 730 183 765 142
                  C800 110 840 150 875 108
                  C915 75 950 105 1000 62
                  L1000 430
                  L0 430 Z"
                  fill="url(#marketArea)"
                />

                <path
                  d="M0 330
                  C30 315 50 340 85 320
                  C120 300 135 325 170 300
                  C205 275 235 305 270 275
                  C300 248 330 278 365 245
                  C400 220 425 248 460 220
                  C500 188 535 225 565 195
                  C600 165 625 205 660 175
                  C700 145 730 183 765 142
                  C800 110 840 150 875 108
                  C915 75 950 105 1000 62"
                  fill="none"
                  stroke="#7353ff"
                  strokeWidth="4"
                />
              </svg>

              <div className="chart-price">{data.price}</div>
            </div>
          </div>

          <div className="analysis-card">
            <div className="analysis-title">
              <span>✦</span>
              LYRA ANALİZİ
            </div>

            <h2>
              {data.market === "BIST"
                ? "Pozitif trend devam ediyor"
                : data.market === "ABD"
                ? "ABD piyasalarında güçlü momentum"
                : "Piyasa hareketi pozitif"}
            </h2>

            <p>
              LYRA piyasa verilerini analiz ediyor, trend ve risk
              seviyelerini değerlendiriyor.
            </p>

            <div className="analysis-stats">
              <div>
                <span>Trend</span>
                <strong className="positive">↗ Yükseliş</strong>
              </div>

              <div>
                <span>Momentum</span>
                <strong>Güçlü</strong>
              </div>

              <div>
                <span>Risk</span>
                <strong>Orta</strong>
              </div>

              <div>
                <span>LYRA Skoru</span>
                <strong className="positive">8.7</strong>
              </div>
            </div>
          </div>

          <div className="positions-mini">
            <div className="section-heading">
              <h2>Açık Pozisyonlar</h2>
              <span>Tümü →</span>
            </div>

            <div className="mini-row">
              <span>BTC/USDT</span>
              <span>Long 10x</span>
              <span>0.50 BTC</span>
              <strong className="positive">+342.18 USDT</strong>
            </div>

            <div className="mini-row">
              <span>ETH/USDT</span>
              <span className="short">Short 5x</span>
              <span>1.25 ETH</span>
              <strong className="negative">-125.47 USDT</strong>
            </div>
          </div>
        </div>

        <aside className="market-side-column">
          <div className="order-card">
            <div className="order-tabs">
              <button className="active">Al</button>
              <button>Sat</button>
            </div>

            <label>Tutar</label>

            <input placeholder="0.00" type="text" />

            <div className="percentage-buttons">
              <button>%25</button>
              <button>%50</button>
              <button>%75</button>
              <button>%100</button>
            </div>

            <button className="main-order-button">
              {data.market === "Futures" ? "Long Aç" : "Al"}
            </button>
          </div>

          <div className="side-card">
            <div className="section-heading">
              <h2>LYRA Fırsatı</h2>
            </div>

            <div className="opportunity-score">
              <strong>8.7</strong>
              <span>/ 10</span>
            </div>

            <div className="side-progress">
              <span style={{ width: "82%" }} />
            </div>

            <p>
              Trend ve momentum göstergeleri pozitif bölgede.
            </p>
          </div>

          <div className="side-card">
            <div className="section-heading">
              <h2>Risk Yönetimi</h2>
            </div>

            <div className="risk-value">%68</div>
            <span className="risk-text">Kontrollü Risk</span>

            <div className="side-progress risk">
              <span style={{ width: "68%" }} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}