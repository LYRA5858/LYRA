import "./portfolio-page.css";

const assets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: "0.302 BTC",
    value: "$20,597",
    percent: "42.3%",
    change: "+4.31%",
    type: "crypto",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: "2.80 ETH",
    value: "$9,098",
    percent: "18.7%",
    change: "+2.24%",
    type: "crypto",
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: "43.1 SOL",
    value: "$6,131",
    percent: "12.6%",
    change: "+3.71%",
    type: "crypto",
  },
  {
    symbol: "BIST",
    name: "BIST Hisseleri",
    amount: "18 pozisyon",
    value: "$4,088",
    percent: "8.4%",
    change: "+3.02%",
    type: "bist",
  },
  {
    symbol: "US",
    name: "ABD Hisseleri",
    amount: "7 pozisyon",
    value: "$4,201",
    percent: "8.6%",
    change: "+2.18%",
    type: "us",
  },
  {
    symbol: "USDT",
    name: "Tether",
    amount: "3,504 USDT",
    value: "$3,504",
    percent: "7.2%",
    change: "+0.02%",
    type: "stable",
  },
];

const positions = [
  {
    symbol: "BTC/USDT",
    direction: "Long",
    leverage: "10x",
    entry: "66,820.12",
    current: "68,432.12",
    pnl: "+342.18 USDT",
    roi: "+8.24%",
  },
  {
    symbol: "ETH/USDT",
    direction: "Short",
    leverage: "5x",
    entry: "3,245.67",
    current: "3,180.45",
    pnl: "-125.47 USDT",
    roi: "-3.21%",
  },
  {
    symbol: "THYAO",
    direction: "Long",
    leverage: "1x",
    entry: "305.10",
    current: "312.50",
    pnl: "+218.30 ₺",
    roi: "+2.42%",
  },
  {
    symbol: "NVDA",
    direction: "Long",
    leverage: "1x",
    entry: "140.40",
    current: "145.62",
    pnl: "+156.72 $",
    roi: "+3.72%",
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">

      {/* HEADER */}
      <section className="portfolio-hero">

        <div>
          <div className="portfolio-eyebrow">
            LYRA / PORTFÖY
          </div>

          <h1>Portföyüm</h1>

          <p>
            Tüm varlıklarını, performansını ve riskini
            tek merkezden takip et.
          </p>
        </div>

        <div className="portfolio-actions">
          <button className="portfolio-outline-button">
            Raporu Gör
          </button>

          <button className="portfolio-primary-button">
            + Varlık Ekle
          </button>
        </div>

      </section>

      {/* KPI */}
      <section className="portfolio-stats">

        <div className="portfolio-stat-card">
          <div className="portfolio-stat-icon purple">
            ▣
          </div>

          <span>Toplam Portföy</span>

          <strong>$48,620.32</strong>

          <small className="positive">
            ↗ +2.71% bugün
          </small>

          <div className="portfolio-mini-chart purple-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="portfolio-stat-card">
          <div className="portfolio-stat-icon green">
            ◈
          </div>

          <span>Günlük Kâr / Zarar</span>

          <strong className="positive">
            +$1,284.40
          </strong>

          <small className="positive">
            +2.71%
          </small>

          <div className="portfolio-mini-chart green-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="portfolio-stat-card">
          <div className="portfolio-stat-icon blue">
            ▱
          </div>

          <span>Serbest Kasa</span>

          <strong>$12,480.32</strong>

          <small>
            %62.4 kullanılabilir
          </small>
        </div>

        <div className="portfolio-stat-card">
          <div className="portfolio-stat-icon orange">
            ◉
          </div>

          <span>Açık Risk</span>

          <strong className="negative">
            $2,552.12
          </strong>

          <small>
            Kontrollü
          </small>

          <div className="portfolio-risk-ring">
            <span>31</span>
          </div>
        </div>

      </section>

      {/* MAIN GRID */}
      <section className="portfolio-main-grid">

        <div className="portfolio-left">

          {/* PERFORMANCE */}
          <div className="portfolio-card performance-card">

            <div className="portfolio-card-header">

              <div>
                <h2>Portföy Performansı</h2>
                <span>
                  Portföy değerinin zaman içerisindeki değişimi
                </span>
              </div>

              <div className="portfolio-periods">
                <button>1G</button>
                <button>1H</button>
                <button className="active">1A</button>
                <button>3A</button>
                <button>1Y</button>
              </div>

            </div>

            <div className="portfolio-performance-chart">

              <div className="performance-y-axis">
                <span>60.000</span>
                <span>50.000</span>
                <span>40.000</span>
                <span>30.000</span>
                <span>20.000</span>
                <span>10.000</span>
              </div>

              <div className="performance-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <svg
                viewBox="0 0 900 330"
                preserveAspectRatio="none"
                aria-label="Portföy performans grafiği"
              >
                <defs>
                  <linearGradient
                    id="portfolioGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#704dff"
                      stopOpacity="0.38"
                    />

                    <stop
                      offset="100%"
                      stopColor="#704dff"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="
                    M0 285
                    C35 272 55 258 86 269
                    C118 280 132 240 165 250
                    C197 260 217 222 250 231
                    C286 241 305 199 340 210
                    C375 220 394 177 430 190
                    C468 203 485 159 520 176
                    C555 193 578 137 614 151
                    C649 165 670 118 704 132
                    C740 146 770 98 800 116
                    C835 137 861 79 900 61
                    L900 330
                    L0 330
                    Z
                  "
                  fill="url(#portfolioGradient)"
                />

                <path
                  d="
                    M0 285
                    C35 272 55 258 86 269
                    C118 280 132 240 165 250
                    C197 260 217 222 250 231
                    C286 241 305 199 340 210
                    C375 220 394 177 430 190
                    C468 203 485 159 520 176
                    C555 193 578 137 614 151
                    C649 165 670 118 704 132
                    C740 146 770 98 800 116
                    C835 137 861 79 900 61
                  "
                  fill="none"
                  stroke="#7654ff"
                  strokeWidth="4"
                />
              </svg>

              <div className="performance-current">
                $48,620
              </div>

              <div className="performance-dates">
                <span>17 Ağu</span>
                <span>19 Ağu</span>
                <span>21 Ağu</span>
                <span>23 Ağu</span>
                <span>25 Ağu</span>
                <span>27 Ağu</span>
                <span>29 Ağu</span>
              </div>

            </div>
          </div>

          {/* ASSET DISTRIBUTION */}
          <div className="portfolio-card">

            <div className="portfolio-card-header">
              <div>
                <h2>Varlık Dağılımı</h2>
                <span>Portföy içerisindeki varlık ağırlıkları</span>
              </div>

              <button className="portfolio-text-button">
                Detay →
              </button>
            </div>

            <div className="asset-distribution">

              <div className="portfolio-big-donut">
                <div>
                  <strong>$48,620</strong>
                  <span>Toplam</span>
                </div>
              </div>

              <div className="asset-legend">

                {assets.map((asset) => (
                  <div
                    className="asset-legend-row"
                    key={asset.symbol}
                  >
                    <div>
                      <span className={`asset-dot ${asset.type}`} />
                      <strong>{asset.symbol}</strong>
                    </div>

                    <span>{asset.percent}</span>

                    <strong>{asset.value}</strong>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* POSITIONS */}
          <div className="portfolio-card positions-portfolio-card">

            <div className="portfolio-card-header">

              <div>
                <h2>Açık Pozisyonlar</h2>

                <span>
                  Portföy içerisindeki aktif pozisyonlar
                </span>
              </div>

              <button className="portfolio-text-button">
                Tümü →
              </button>

            </div>

            <div className="portfolio-positions-table">

              <div className="portfolio-position-head">
                <span>Varlık</span>
                <span>Yön</span>
                <span>Giriş</span>
                <span>Mevcut</span>
                <span>Kaldıraç</span>
                <span>K/Z</span>
                <span>ROI</span>
              </div>

              {positions.map((position) => (
                <div
                  className="portfolio-position-row"
                  key={position.symbol}
                >

                  <strong>
                    {position.symbol}
                  </strong>

                  <span
                    className={
                      position.direction === "Long"
                        ? "long"
                        : "short"
                    }
                  >
                    {position.direction}
                  </span>

                  <span>{position.entry}</span>
                  <span>{position.current}</span>
                  <span>{position.leverage}</span>

                  <strong
                    className={
                      position.pnl.startsWith("+")
                        ? "positive"
                        : "negative"
                    }
                  >
                    {position.pnl}
                  </strong>

                  <strong
                    className={
                      position.roi.startsWith("+")
                        ? "positive"
                        : "negative"
                    }
                  >
                    {position.roi}
                  </strong>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <aside className="portfolio-right">

          {/* RISK */}
          <div className="portfolio-card risk-overview-card">

            <div className="portfolio-card-header">
              <div>
                <h2>LYRA Risk</h2>
                <span>Portföy risk göstergesi</span>
              </div>
            </div>

            <div className="risk-big-circle">
              <div>
                <strong>31</strong>
                <span>/ 100</span>
              </div>
            </div>

            <div className="risk-status">
              Kontrollü Risk
            </div>

            <div className="risk-bar">
              <span />
            </div>

            <div className="risk-breakdown">

              <div>
                <span>Volatilite</span>
                <strong>32</strong>
              </div>

              <div>
                <span>Kaldıraç</span>
                <strong>18</strong>
              </div>

              <div>
                <span>Yoğunlaşma</span>
                <strong>42</strong>
              </div>

            </div>

          </div>

          {/* CASH */}
          <div className="portfolio-card cash-overview-card">

            <div className="portfolio-card-header">
              <div>
                <h2>Kasa Dağılımı</h2>
                <span>Mevcut nakit durumu</span>
              </div>
            </div>

            <div className="portfolio-cash-total">
              $12,480
            </div>

            <div className="portfolio-cash-list">

              <div>
                <div>
                  <span className="cash-dot usdt" />
                  USDT
                </div>

                <strong>
                  $6,014
                </strong>
              </div>

              <div>
                <div>
                  <span className="cash-dot try" />
                  TRY
                </div>

                <strong>
                  $2,832
                </strong>
              </div>

              <div>
                <div>
                  <span className="cash-dot other" />
                  Diğer
                </div>

                <strong>
                  $3,634
                </strong>
              </div>

            </div>

            <button className="portfolio-cash-button">
              Kasa Yönetimi
            </button>

          </div>

          {/* PERFORMANCE SUMMARY */}
          <div className="portfolio-card strategy-card">

            <div className="portfolio-card-header">
              <div>
                <h2>LYRA Performansı</h2>
                <span>Stratejilerinin sonucu</span>
              </div>
            </div>

            <div className="strategy-score">
              <div className="strategy-ring">
                <strong>%68</strong>
              </div>

              <div>
                <span>Başarı Oranı</span>
                <strong>142</strong>
                <small>Toplam işlem</small>
              </div>

            </div>

            <div className="strategy-stats">

              <div>
                <span>Kârlı</span>
                <strong className="positive">97</strong>
              </div>

              <div>
                <span>Zararlı</span>
                <strong className="negative">45</strong>
              </div>

              <div>
                <span>Ort. Kâr</span>
                <strong className="positive">%3.12</strong>
              </div>

            </div>

          </div>

          {/* TOP OPPORTUNITIES */}
          <div className="portfolio-card portfolio-opportunity-card">

            <div className="portfolio-card-header">
              <div>
                <h2>Fırsatlar</h2>
                <span>LYRA'nın dikkat çektiği alanlar</span>
              </div>

              <button className="portfolio-text-button">
                Tümü
              </button>
            </div>

            <div className="portfolio-opportunities">

              <Opportunity
                symbol="BTC"
                title="Trend Takibi"
                score="9.1"
              />

              <Opportunity
                symbol="NVDA"
                title="Momentum"
                score="8.9"
              />

              <Opportunity
                symbol="THYAO"
                title="Pozitif Kırılım"
                score="8.6"
              />

            </div>

          </div>

        </aside>

      </section>

      {/* BOTTOM SUMMARY */}
      <section className="portfolio-bottom-grid">

        <div className="portfolio-bottom-card">
          <span>Toplam Yatırım</span>
          <strong>$48,620</strong>
          <small>+%12.4 başlangıçtan beri</small>
        </div>

        <div className="portfolio-bottom-card">
          <span>Toplam Kâr</span>
          <strong className="positive">
            +$6,482
          </strong>
          <small>%15.4 getiri</small>
        </div>

        <div className="portfolio-bottom-card">
          <span>Toplam İşlem</span>
          <strong>142</strong>
          <small>97 başarılı işlem</small>
        </div>

        <div className="portfolio-bottom-card">
          <span>LYRA Skoru</span>
          <strong>8.7 / 10</strong>
          <small className="positive">
            Güçlü
          </small>
        </div>

      </section>

    </div>
  );
}

function Opportunity({
  symbol,
  title,
  score,
}: {
  symbol: string;
  title: string;
  score: string;
}) {
  return (
    <div className="portfolio-opportunity">

      <div className="portfolio-opportunity-icon">
        {symbol.charAt(0)}
      </div>

      <div>
        <strong>{symbol}</strong>
        <span>{title}</span>
      </div>

      <div>
        <strong className="positive">
          {score}
        </strong>

        <span>/10</span>
      </div>

    </div>
  );
}