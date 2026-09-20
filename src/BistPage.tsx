import "./bist-page.css";

const indexStats = [
  { label: "BIST 100", value: "10.237", change: "+1,34%", positive: true },
  { label: "BIST 30", value: "11.274", change: "+1,48%", positive: true },
  { label: "BIST Banka", value: "15.842", change: "+2,12%", positive: true },
  { label: "BIST Sınai", value: "13.918", change: "+0,91%", positive: true },
];

const watchlist = [
  {
    symbol: "THYAO",
    name: "Türk Hava Yolları",
    price: "312,50 ₺",
    change: "+2,08%",
    volume: "4,82 M",
  },
  {
    symbol: "GARAN",
    name: "Garanti BBVA",
    price: "146,80 ₺",
    change: "+1,42%",
    volume: "8,16 M",
  },
  {
    symbol: "ASELS",
    name: "Aselsan",
    price: "176,40 ₺",
    change: "+3,14%",
    volume: "12,41 M",
  },
  {
    symbol: "AKBNK",
    name: "Akbank",
    price: "58,25 ₺",
    change: "+1,76%",
    volume: "15,20 M",
  },
  {
    symbol: "TUPRS",
    name: "Tüpraş",
    price: "154,70 ₺",
    change: "+0,68%",
    volume: "3,94 M",
  },
  {
    symbol: "KCHOL",
    name: "Koç Holding",
    price: "208,10 ₺",
    change: "-0,42%",
    volume: "2,72 M",
  },
];

const sectors = [
  { name: "Bankacılık", value: "+2,12%", width: "82%" },
  { name: "Holding", value: "+1,18%", width: "64%" },
  { name: "Savunma", value: "+3,44%", width: "91%" },
  { name: "Havacılık", value: "+2,08%", width: "73%" },
  { name: "Sanayi", value: "+0,91%", width: "49%" },
];

const opportunities = [
  {
    symbol: "THYAO",
    title: "Trend Takibi",
    level: "Güçlü",
    score: "8.8",
  },
  {
    symbol: "ASELS",
    title: "Momentum",
    level: "Yüksek",
    score: "9.1",
  },
  {
    symbol: "GARAN",
    title: "Destek Bölgesi",
    level: "Pozitif",
    score: "8.4",
  },
];

export default function BistPage() {
  return (
    <div className="bist-page">
      {/* HEADER */}
      <div className="bist-header">
        <div>
          <div className="bist-eyebrow">LYRA / BIST</div>
          <h1>Borsa İstanbul</h1>
          <p>
            BIST piyasasını, hisseleri ve LYRA analizlerini tek ekrandan takip et.
          </p>
        </div>

        <div className="bist-status">
          <span />
          Piyasa Açık
        </div>
      </div>

      {/* INDEX CARDS */}
      <div className="bist-index-grid">
        {indexStats.map((item) => (
          <div className="bist-index-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>

            <div className="index-bottom">
              <em className={item.positive ? "positive" : "negative"}>
                {item.change}
              </em>

              <div className="mini-bars">
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

      {/* MAIN GRID */}
      <div className="bist-main-grid">
        <div className="bist-left">
          {/* MAIN CHART */}
          <div className="bist-card bist-chart-card">
            <div className="bist-card-header">
              <div>
                <h2>BIST 100</h2>
                <span>Endeks Performansı</span>
              </div>

              <div className="bist-periods">
                <button>1G</button>
                <button>1H</button>
                <button className="active">1A</button>
                <button>3A</button>
                <button>1Y</button>
              </div>
            </div>

            <div className="bist-chart-meta">
              <span>Açılış <strong>10.104</strong></span>
              <span>Yüksek <strong>10.320</strong></span>
              <span>Düşük <strong>10.012</strong></span>
              <span>Kapanış <strong>10.237</strong></span>
              <span className="positive">+1,34%</span>
            </div>

            <div className="bist-chart">
              <div className="bist-grid-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="bist-axis">
                <span>10.400</span>
                <span>10.300</span>
                <span>10.200</span>
                <span>10.100</span>
                <span>10.000</span>
                <span>9.900</span>
              </div>

              <svg
                viewBox="0 0 1000 390"
                preserveAspectRatio="none"
                aria-label="BIST 100 performans grafiği"
              >
                <defs>
                  <linearGradient
                    id="bistArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#00d7a7"
                      stopOpacity="0.24"
                    />
                    <stop
                      offset="100%"
                      stopColor="#00d7a7"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 300
                  C45 290 70 303 110 278
                  C150 253 175 278 215 252
                  C255 226 275 244 315 218
                  C355 192 380 218 420 188
                  C460 159 490 188 530 162
                  C570 138 595 160 635 137
                  C675 115 700 142 740 110
                  C780 80 810 117 850 86
                  C890 54 925 88 960 58
                  C975 47 990 43 1000 35
                  L1000 390
                  L0 390 Z"
                  fill="url(#bistArea)"
                />

                <path
                  d="M0 300
                  C45 290 70 303 110 278
                  C150 253 175 278 215 252
                  C255 226 275 244 315 218
                  C355 192 380 218 420 188
                  C460 159 490 188 530 162
                  C570 138 595 160 635 137
                  C675 115 700 142 740 110
                  C780 80 810 117 850 86
                  C890 54 925 88 960 58
                  C975 47 990 43 1000 35"
                  fill="none"
                  stroke="#00d7a7"
                  strokeWidth="4"
                />
              </svg>

              <div className="bist-price-tag">
                10.237
              </div>

              <div className="bist-date-axis">
                <span>13 Ağu</span>
                <span>18 Ağu</span>
                <span>25 Ağu</span>
                <span>1 Eyl</span>
                <span>8 Eyl</span>
                <span>15 Eyl</span>
              </div>
            </div>
          </div>

          {/* LYRA ANALYSIS */}
          <div className="bist-card bist-analysis">
            <div className="analysis-icon">✦</div>

            <div className="analysis-body">
              <div className="bist-eyebrow small">
                LYRA BIST ANALİZİ
              </div>

              <h2>BIST genel görünüm pozitif bölgede</h2>

              <p>
                LYRA; endeks hareketi, işlem hacmi ve seçili hisselerin
                momentumunu birlikte değerlendiriyor.
              </p>

              <div className="bist-analysis-stats">
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
                  <strong>10.050</strong>
                </div>

                <div>
                  <span>Direnç</span>
                  <strong>10.320</strong>
                </div>

                <div>
                  <span>LYRA Skoru</span>
                  <strong className="positive">8.7</strong>
                </div>
              </div>
            </div>

            <button className="analysis-button">
              Detaylı Analiz →
            </button>
          </div>

          {/* TOP STOCKS */}
          <div className="bist-card stock-card">
            <div className="bist-card-header">
              <div>
                <h2>Öne Çıkan BIST Hisseleri</h2>
                <span>LYRA tarafından takip edilen hisseler</span>
              </div>

              <button className="text-button">
                Tümünü Gör
              </button>
            </div>

            <div className="stock-table">
              <div className="stock-head">
                <span>Hisse</span>
                <span>Fiyat</span>
                <span>24s</span>
                <span>Hacim</span>
              </div>

              {watchlist.map((stock) => (
                <div className="stock-row" key={stock.symbol}>
                  <div className="stock-name">
                    <div className="stock-logo">
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

        {/* RIGHT */}
        <aside className="bist-right">
          {/* MARKET SUMMARY */}
          <div className="bist-card market-overview">
            <div className="bist-card-header">
              <div>
                <h2>Piyasa Özeti</h2>
                <span>Borsa İstanbul</span>
              </div>

              <span className="live-badge">
                ● CANLI
              </span>
            </div>

            <div className="overview-number">
              <span>BIST 100</span>
              <strong>10.237</strong>
              <em className="positive">+1,34%</em>
            </div>

            <div className="overview-divider" />

            <div className="overview-row">
              <span>İşlem Hacmi</span>
              <strong>146,8 Milyar ₺</strong>
            </div>

            <div className="overview-row">
              <span>Yükselen</span>
              <strong className="positive">312</strong>
            </div>

            <div className="overview-row">
              <span>Düşen</span>
              <strong className="negative">128</strong>
            </div>

            <div className="overview-row">
              <span>Sabit</span>
              <strong>26</strong>
            </div>
          </div>

          {/* SECTORS */}
          <div className="bist-card sectors-card">
            <div className="bist-card-header">
              <div>
                <h2>Sektör Performansı</h2>
                <span>Günlük değişim</span>
              </div>
            </div>

            <div className="sector-list">
              {sectors.map((sector) => (
                <div className="sector-row" key={sector.name}>
                  <div className="sector-label">
                    <span>{sector.name}</span>
                    <strong className="positive">
                      {sector.value}
                    </strong>
                  </div>

                  <div className="sector-bar">
                    <i style={{ width: sector.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OPPORTUNITIES */}
          <div className="bist-card opportunity-card-bist">
            <div className="bist-card-header">
              <div>
                <h2>LYRA Fırsatları</h2>
                <span>Bugünün dikkat çekenleri</span>
              </div>

              <span className="text-button">
                Tümü
              </span>
            </div>

            <div className="bist-opportunities">
              {opportunities.map((item) => (
                <div className="bist-opportunity" key={item.symbol}>
                  <div className="opportunity-symbol-bist">
                    {item.symbol.charAt(0)}
                  </div>

                  <div>
                    <strong>{item.symbol}</strong>
                    <span>{item.title}</span>
                  </div>

                  <div className="opportunity-right">
                    <strong>{item.score}</strong>
                    <span>{item.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CASH */}
          <div className="bist-card bist-cash">
            <div className="bist-card-header">
              <div>
                <h2>TL Kasa</h2>
                <span>BIST için ayrılan bütçe</span>
              </div>

              <span className="cash-icon">₺</span>
            </div>

            <strong className="cash-value">
              125.480 ₺
            </strong>

            <div className="cash-progress">
              <span />
            </div>

            <div className="cash-bottom">
              <span>Kullanılabilir</span>
              <strong>86.250 ₺</strong>
            </div>

            <button className="cash-button">
              Kasa Yönetimi
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}