import "./us-stocks-page.css";

const indexStats = [
  { label: "S&P 500", value: "5.118", change: "+0,76%" },
  { label: "NASDAQ", value: "16.820", change: "+1,14%" },
  { label: "Dow Jones", value: "39.182", change: "+0,42%" },
  { label: "Russell 2000", value: "2.146", change: "+0,88%" },
];

const stocks = [
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: "$145.62",
    change: "+2.73%",
    volume: "$18.4B",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$214.32",
    change: "+1.16%",
    volume: "$9.8B",
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: "$511.24",
    change: "+0.84%",
    volume: "$7.4B",
  },
  {
    symbol: "AMZN",
    name: "Amazon",
    price: "$231.88",
    change: "+1.92%",
    volume: "$6.8B",
  },
  {
    symbol: "META",
    name: "Meta Platforms",
    price: "$742.15",
    change: "+1.47%",
    volume: "$4.9B",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: "$347.20",
    change: "-0.58%",
    volume: "$12.1B",
  },
];

const sectors = [
  { name: "Yapay Zekâ", value: "+3,18%", width: "92%" },
  { name: "Teknoloji", value: "+1,84%", width: "78%" },
  { name: "Finans", value: "+0,92%", width: "51%" },
  { name: "Sağlık", value: "+0,74%", width: "44%" },
  { name: "Tüketici", value: "+1,21%", width: "60%" },
];

const opportunities = [
  {
    symbol: "NVDA",
    strategy: "Momentum",
    score: "9.2",
    level: "Güçlü",
  },
  {
    symbol: "AAPL",
    strategy: "Trend Takibi",
    score: "8.6",
    level: "Pozitif",
  },
  {
    symbol: "MSFT",
    strategy: "Destek Bölgesi",
    score: "8.4",
    level: "Pozitif",
  },
];

export default function USStocksPage() {
  return (
    <div className="us-page">
      <div className="us-header">
        <div>
          <div className="us-eyebrow">LYRA / ABD PİYASALARI</div>

          <h1>ABD Hisseleri</h1>

          <p>
            ABD piyasalarını, büyük teknoloji şirketlerini ve LYRA
            fırsatlarını tek ekrandan takip et.
          </p>
        </div>

        <div className="us-status">
          <span />
          Piyasa Açık
        </div>
      </div>

      <div className="us-index-grid">
        {indexStats.map((item) => (
          <div className="us-index-card" key={item.label}>
            <span>{item.label}</span>

            <strong>{item.value}</strong>

            <div className="us-index-bottom">
              <em className="positive">{item.change}</em>

              <div className="us-mini-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="us-main-grid">
        <div className="us-left">
          <div className="us-card us-chart-card">
            <div className="us-card-header">
              <div>
                <h2>S&P 500</h2>
                <span>ABD Piyasaları</span>
              </div>

              <div className="us-periods">
                <button>1G</button>
                <button>1H</button>
                <button className="active">1A</button>
                <button>3A</button>
                <button>1Y</button>
              </div>
            </div>

            <div className="us-chart-meta">
              <span>Açılış <strong>5.082</strong></span>
              <span>Yüksek <strong>5.146</strong></span>
              <span>Düşük <strong>5.041</strong></span>
              <span>Kapanış <strong>5.118</strong></span>
              <span className="positive">+0,76%</span>
            </div>

            <div className="us-chart">
              <div className="us-grid-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="us-axis">
                <span>5.200</span>
                <span>5.150</span>
                <span>5.100</span>
                <span>5.050</span>
                <span>5.000</span>
                <span>4.950</span>
              </div>

              <svg
                viewBox="0 0 1000 390"
                preserveAspectRatio="none"
                aria-label="S&P 500 grafik"
              >
                <defs>
                  <linearGradient
                    id="usArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7151ff"
                      stopOpacity="0.28"
                    />
                    <stop
                      offset="100%"
                      stopColor="#7151ff"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 305
                  C45 298 75 310 112 284
                  C152 256 180 280 220 250
                  C255 222 282 250 322 216
                  C360 188 388 208 430 180
                  C468 151 505 180 540 145
                  C575 118 610 147 648 119
                  C686 92 720 120 758 92
                  C800 62 831 98 864 73
                  C904 42 944 66 1000 35
                  L1000 390
                  L0 390 Z"
                  fill="url(#usArea)"
                />

                <path
                  d="M0 305
                  C45 298 75 310 112 284
                  C152 256 180 280 220 250
                  C255 222 282 250 322 216
                  C360 188 388 208 430 180
                  C468 151 505 180 540 145
                  C575 118 610 147 648 119
                  C686 92 720 120 758 92
                  C800 62 831 98 864 73
                  C904 42 944 66 1000 35"
                  fill="none"
                  stroke="#7555ff"
                  strokeWidth="4"
                />
              </svg>

              <div className="us-price-tag">
                5.118
              </div>

              <div className="us-date-axis">
                <span>19 Ağu</span>
                <span>26 Ağu</span>
                <span>2 Eyl</span>
                <span>9 Eyl</span>
                <span>16 Eyl</span>
              </div>
            </div>
          </div>

          <div className="us-card us-analysis">
            <div className="us-analysis-icon">✦</div>

            <div className="us-analysis-body">
              <div className="us-eyebrow small">
                LYRA ABD ANALİZİ
              </div>

              <h2>ABD piyasalarında pozitif momentum</h2>

              <p>
                LYRA; endeks hareketleri, teknoloji hisseleri,
                momentum ve risk göstergelerini birlikte değerlendiriyor.
              </p>

              <div className="us-analysis-stats">
                <div>
                  <span>Trend</span>
                  <strong className="positive">↗ Yükseliş</strong>
                </div>

                <div>
                  <span>Momentum</span>
                  <strong>Güçlü</strong>
                </div>

                <div>
                  <span>Destek</span>
                  <strong>5.020</strong>
                </div>

                <div>
                  <span>Direnç</span>
                  <strong>5.150</strong>
                </div>

                <div>
                  <span>LYRA Skoru</span>
                  <strong className="positive">8.9</strong>
                </div>
              </div>
            </div>

            <button className="us-analysis-button">
              Detaylı Analiz →
            </button>
          </div>

          <div className="us-card us-stock-card">
            <div className="us-card-header">
              <div>
                <h2>Öne Çıkan ABD Hisseleri</h2>
                <span>LYRA tarafından takip edilen şirketler</span>
              </div>

              <button className="us-text-button">
                Tümünü Gör
              </button>
            </div>

            <div className="us-stock-table">
              <div className="us-stock-head">
                <span>Hisse</span>
                <span>Fiyat</span>
                <span>24s</span>
                <span>Hacim</span>
              </div>

              {stocks.map((stock) => (
                <div className="us-stock-row" key={stock.symbol}>
                  <div className="us-stock-name">
                    <div className="us-stock-logo">
                      {stock.symbol.charAt(0)}
                    </div>

                    <div>
                      <strong>{stock.symbol}</strong>
                      <small>{stock.name}</small>
                    </div>
                  </div>

                  <strong>{stock.price}</strong>

                  <span
                    className={
                      stock.change.startsWith("+")
                        ? "positive"
                        : "negative"
                    }
                  >
                    {stock.change}
                  </span>

                  <span>{stock.volume}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="us-right">
          <div className="us-card us-overview">
            <div className="us-card-header">
              <div>
                <h2>Piyasa Özeti</h2>
                <span>ABD Borsaları</span>
              </div>

              <span className="us-live">● CANLI</span>
            </div>

            <div className="us-overview-main">
              <span>S&P 500</span>

              <strong>5.118</strong>

              <em className="positive">+0,76%</em>
            </div>

            <div className="us-divider" />

            <div className="us-overview-row">
              <span>Nasdaq</span>
              <strong>16.820</strong>
            </div>

            <div className="us-overview-row">
              <span>Dow Jones</span>
              <strong>39.182</strong>
            </div>

            <div className="us-overview-row">
              <span>Yükselen</span>
              <strong className="positive">286</strong>
            </div>

            <div className="us-overview-row">
              <span>Düşen</span>
              <strong className="negative">174</strong>
            </div>
          </div>

          <div className="us-card us-sectors">
            <div className="us-card-header">
              <div>
                <h2>Sektör Performansı</h2>
                <span>Günlük değişim</span>
              </div>
            </div>

            <div className="us-sector-list">
              {sectors.map((sector) => (
                <div className="us-sector-row" key={sector.name}>
                  <div className="us-sector-label">
                    <span>{sector.name}</span>
                    <strong className="positive">
                      {sector.value}
                    </strong>
                  </div>

                  <div className="us-sector-bar">
                    <i style={{ width: sector.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="us-card us-opportunities">
            <div className="us-card-header">
              <div>
                <h2>LYRA Fırsatları</h2>
                <span>Bugünün dikkat çekenleri</span>
              </div>

              <span className="us-text-button">Tümü</span>
            </div>

            <div className="us-opportunity-list">
              {opportunities.map((item) => (
                <div className="us-opportunity" key={item.symbol}>
                  <div className="us-opportunity-symbol">
                    {item.symbol.charAt(0)}
                  </div>

                  <div>
                    <strong>{item.symbol}</strong>
                    <span>{item.strategy}</span>
                  </div>

                  <div className="us-opportunity-score">
                    <strong>{item.score}</strong>
                    <span>{item.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="us-card us-cash">
            <div className="us-card-header">
              <div>
                <h2>ABD İşlem Bütçesi</h2>
                <span>ABD piyasaları için ayrılan bütçe</span>
              </div>

              <span className="us-cash-icon">$</span>
            </div>

            <strong className="us-cash-value">
              $18,420
            </strong>

            <div className="us-cash-progress">
              <span />
            </div>

            <div className="us-cash-bottom">
              <span>Kullanılabilir</span>
              <strong>$11,870</strong>
            </div>

            <button className="us-cash-button">
              Bütçe Yönetimi
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}