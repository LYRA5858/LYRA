import "./positions-page.css";

type Position = {
  symbol: string;
  market: string;
  direction: "Long" | "Short";
  leverage: string;
  size: string;
  entry: string;
  current: string;
  pnl: string;
  roe: string;
  margin: string;
  liquidation: string;
  positive: boolean;
};

const positions: Position[] = [
  {
    symbol: "BTC/USDT",
    market: "Futures",
    direction: "Long",
    leverage: "10x",
    size: "0.50 BTC",
    entry: "66,820.12",
    current: "68,432.12",
    pnl: "+342.18 USDT",
    roe: "+8.24%",
    margin: "672.31 USDT",
    liquidation: "64,210.45",
    positive: true,
  },
  {
    symbol: "ETH/USDT",
    market: "Futures",
    direction: "Short",
    leverage: "5x",
    size: "1.25 ETH",
    entry: "3,245.67",
    current: "3,180.45",
    pnl: "-125.47 USDT",
    roe: "-3.21%",
    margin: "748.12 USDT",
    liquidation: "3,412.00",
    positive: false,
  },
  {
    symbol: "THYAO",
    market: "BIST",
    direction: "Long",
    leverage: "1x",
    size: "1,000",
    entry: "305.10",
    current: "312.50",
    pnl: "+7,400 ₺",
    roe: "+2.42%",
    margin: "305,100 ₺",
    liquidation: "-",
    positive: true,
  },
  {
    symbol: "NVDA",
    market: "ABD",
    direction: "Long",
    leverage: "1x",
    size: "20",
    entry: "140.40",
    current: "145.62",
    pnl: "+104.40 $",
    roe: "+3.72%",
    margin: "$2,808",
    liquidation: "-",
    positive: true,
  },
];

const recentTrades = [
  ["BTC/USDT", "68,432.12", "0.125", "10:24:12", true],
  ["ETH/USDT", "3,180.45", "0.320", "10:24:08", false],
  ["SOL/USDT", "142.67", "1.250", "10:24:03", true],
  ["THYAO", "312.50", "100", "10:23:57", true],
  ["NVDA", "145.62", "20", "10:23:51", true],
];

export default function PositionsPage() {
  const positiveCount = positions.filter((p) => p.positive).length;
  const negativeCount = positions.length - positiveCount;

  return (
    <div className="positions-page">

      {/* HEADER */}
      <div className="positions-hero">

        <div>
          <div className="positions-eyebrow">
            LYRA / POZİSYONLAR
          </div>

          <h1>Açık Pozisyonlar</h1>

          <p>
            Tüm piyasalardaki aktif pozisyonlarını,
            kâr/zararını ve riskini tek merkezden izle.
          </p>
        </div>

        <div className="position-status">
          <span />
          {positions.length} Aktif Pozisyon
        </div>

      </div>

      {/* SUMMARY */}
      <div className="positions-summary">

        <SummaryCard
          label="Toplam Pozisyon Değeri"
          value="$38,191.12"
          detail="4 aktif pozisyon"
        />

        <SummaryCard
          label="Toplam Kâr / Zarar"
          value="+$324.87"
          detail="+1.92% toplam"
          positive
        />

        <SummaryCard
          label="Kullanılan Marjin"
          value="$1,420.43"
          detail="%18.5 kullanım"
        />

        <SummaryCard
          label="Açık Risk"
          value="$2,552.12"
          detail="Kontrollü"
          negative
        />

      </div>

      {/* TABS */}
      <div className="positions-tabs-main">
        <button className="active">
          Açık Pozisyonlar
          <span>4</span>
        </button>

        <button>
          Bekleyen Emirler
          <span>3</span>
        </button>

        <button>
          Geçmiş İşlemler
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="positions-main-grid">

        <div className="positions-left">

          {/* TABLE */}
          <div className="positions-card positions-table-card">

            <div className="positions-card-header">

              <div>
                <h2>Aktif Pozisyonlar</h2>
                <span>
                  Tüm piyasalardaki açık işlemler
                </span>
              </div>

              <div className="position-filters">
                <button className="active">Tümü</button>
                <button>Kripto</button>
                <button>Futures</button>
                <button>BIST</button>
                <button>ABD</button>
              </div>

            </div>

            <div className="positions-table-scroll">

              <div className="position-table-head">
                <span>Varlık</span>
                <span>Piyasa</span>
                <span>Yön</span>
                <span>Kaldıraç</span>
                <span>Büyüklük</span>
                <span>Giriş</span>
                <span>Mevcut</span>
                <span>K/Z</span>
                <span>ROE</span>
                <span>İşlem</span>
              </div>

              {positions.map((position) => (
                <div
                  className="position-table-row"
                  key={position.symbol}
                >

                  <div className="position-symbol">
                    <div className="position-coin-icon">
                      {position.symbol === "BTC/USDT"
                        ? "₿"
                        : position.symbol === "ETH/USDT"
                        ? "◆"
                        : position.symbol === "THYAO"
                        ? "T"
                        : "N"}
                    </div>

                    <div>
                      <strong>{position.symbol}</strong>
                      <small>{position.market}</small>
                    </div>
                  </div>

                  <span>{position.market}</span>

                  <span
                    className={
                      position.direction === "Long"
                        ? "long"
                        : "short"
                    }
                  >
                    {position.direction}
                  </span>

                  <span>{position.leverage}</span>

                  <span>{position.size}</span>
                  <span>{position.entry}</span>
                  <span>{position.current}</span>

                  <strong
                    className={
                      position.positive
                        ? "positive"
                        : "negative"
                    }
                  >
                    {position.pnl}
                  </strong>

                  <strong
                    className={
                      position.positive
                        ? "positive"
                        : "negative"
                    }
                  >
                    {position.roe}
                  </strong>

                  <button className="position-close-button">
                    Kapat
                  </button>

                </div>
              ))}

            </div>

          </div>

          {/* DETAIL */}
          <div className="positions-card selected-position">

            <div className="positions-card-header">

              <div>
                <h2>Seçili Pozisyon</h2>
                <span>BTC/USDT · Futures</span>
              </div>

              <span className="long detail-badge">
                Long 10x
              </span>

            </div>

            <div className="selected-position-grid">

              <DetailMetric
                label="Pozisyon Büyüklüğü"
                value="0.50 BTC"
              />

              <DetailMetric
                label="Giriş Fiyatı"
                value="66,820.12"
              />

              <DetailMetric
                label="Mevcut Fiyat"
                value="68,432.12"
              />

              <DetailMetric
                label="Kullanılan Marjin"
                value="672.31 USDT"
              />

              <DetailMetric
                label="Likidasyon"
                value="64,210.45"
                positive
              />

              <DetailMetric
                label="Fonlama"
                value="+0.0100%"
                positive
              />

            </div>

            <div className="selected-pnl">

              <div>
                <span>Gerçekleşmemiş Kâr/Zarar</span>
                <strong className="positive">
                  +342.18 USDT
                </strong>
              </div>

              <div>
                <span>ROE</span>
                <strong className="positive">
                  +8.24%
                </strong>
              </div>

              <div className="selected-actions">
                <button className="secondary-position-button">
                  SL / TP
                </button>

                <button className="danger-position-button">
                  Pozisyonu Kapat
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <aside className="positions-right">

          {/* RISK */}
          <div className="positions-card risk-position-card">

            <div className="positions-card-header">
              <div>
                <h2>Risk Yönetimi</h2>
                <span>Portföy pozisyon riski</span>
              </div>
            </div>

            <div className="position-risk-circle">
              <div>
                <strong>68%</strong>
                <span>Risk</span>
              </div>
            </div>

            <div className="risk-position-status">
              Kontrollü Risk
            </div>

            <div className="position-risk-bar">
              <span />
            </div>

            <div className="risk-position-stats">

              <div>
                <span>Toplam Risk</span>
                <strong>$2,552</strong>
              </div>

              <div>
                <span>Serbest Kasa</span>
                <strong>$9,984</strong>
              </div>

              <div>
                <span>Kullanılabilir</span>
                <strong>$7,432</strong>
              </div>

            </div>

          </div>

          {/* PERFORMANCE */}
          <div className="positions-card position-performance">

            <div className="positions-card-header">
              <div>
                <h2>Pozisyon Özeti</h2>
                <span>Bugünkü performans</span>
              </div>
            </div>

            <div className="performance-number">
              +$462.93
            </div>

            <span className="positive">
              Toplam gerçekleşmemiş K/Z
            </span>

            <div className="position-performance-list">

              <div>
                <span>Kârlı</span>
                <strong className="positive">
                  {positiveCount}
                </strong>
              </div>

              <div>
                <span>Zararlı</span>
                <strong className="negative">
                  {negativeCount}
                </strong>
              </div>

              <div>
                <span>Başarı</span>
                <strong>%68</strong>
              </div>

            </div>

          </div>

          {/* RECENT */}
          <div className="positions-card recent-position-card">

            <div className="positions-card-header">
              <div>
                <h2>Son İşlemler</h2>
                <span>Gerçekleşen işlemler</span>
              </div>

              <button className="positions-link">
                Tümü →
              </button>
            </div>

            <div className="recent-position-head">
              <span>Varlık</span>
              <span>Fiyat</span>
              <span>Miktar</span>
              <span>Zaman</span>
            </div>

            {recentTrades.map((trade, index) => (
              <div
                className="recent-position-row"
                key={index}
              >
                <span
                  className={
                    trade[4]
                      ? "positive"
                      : "negative"
                  }
                >
                  {trade[0]}
                </span>

                <span>{trade[1]}</span>
                <span>{trade[2]}</span>
                <span>{trade[3]}</span>
              </div>
            ))}

          </div>

        </aside>

      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  detail,
  positive,
  negative,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="positions-summary-card">

      <span>{label}</span>

      <strong
        className={
          positive
            ? "positive"
            : negative
            ? "negative"
            : ""
        }
      >
        {value}
      </strong>

      <small
        className={
          positive
            ? "positive"
            : negative
            ? "negative"
            : ""
        }
      >
        {detail}
      </small>

    </div>
  );
}

function DetailMetric({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="detail-metric">

      <span>{label}</span>

      <strong
        className={positive ? "positive" : ""}
      >
        {value}
      </strong>

    </div>
  );
}