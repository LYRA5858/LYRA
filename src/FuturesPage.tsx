import "./futures-page.css";

const positions = [
  {
    symbol: "BTC/USDT",
    direction: "Long",
    leverage: "10x",
    size: "0.50 BTC",
    entry: "66,820.12",
    current: "68,432.12",
    pnl: "+342.18 USDT (+8.24%)",
  },
  {
    symbol: "ETH/USDT",
    direction: "Short",
    leverage: "5x",
    size: "1.25 ETH",
    entry: "3,245.67",
    current: "3,180.45",
    pnl: "-125.47 USDT (-3.21%)",
  },
];

const recentTrades = [
  { symbol: "BTC/USDT", price: "68,432.12", amount: "0.125", time: "10:24:12", type: "up" },
  { symbol: "ETH/USDT", price: "3,180.45", amount: "0.320", time: "10:24:08", type: "down" },
  { symbol: "SOL/USDT", price: "142.67", amount: "1.250", time: "10:24:03", type: "up" },
  { symbol: "BTC/USDT", price: "68,421.56", amount: "0.050", time: "10:23:57", type: "up" },
  { symbol: "ETH/USDT", price: "3,181.22", amount: "0.100", time: "10:23:51", type: "down" },
];

const candles = [
  [310, 290, 322, 274],
  [292, 266, 301, 250],
  [270, 280, 288, 248],
  [282, 254, 296, 238],
  [256, 228, 270, 215],
  [230, 245, 258, 218],
  [247, 220, 258, 205],
  [223, 198, 238, 180],
  [200, 214, 226, 185],
  [213, 177, 226, 168],
  [178, 165, 191, 150],
  [166, 188, 200, 154],
  [188, 155, 200, 143],
  [157, 144, 168, 132],
  [146, 170, 181, 128],
  [171, 150, 182, 139],
  [151, 130, 161, 118],
  [132, 145, 158, 121],
  [146, 120, 157, 110],
  [121, 132, 141, 106],
  [134, 108, 145, 97],
  [110, 124, 135, 95],
  [125, 99, 137, 89],
  [100, 115, 126, 88],
  [116, 94, 126, 82],
  [95, 105, 114, 79],
  [106, 88, 118, 75],
  [90, 101, 110, 72],
  [102, 84, 114, 69],
  [86, 95, 108, 70],
  [96, 78, 105, 64],
  [80, 88, 97, 61],
  [88, 73, 98, 58],
  [74, 86, 92, 63],
  [84, 69, 96, 58],
  [70, 78, 87, 54],
  [78, 61, 90, 50],
  [62, 70, 78, 48],
  [69, 58, 81, 46],
  [60, 76, 86, 52],
];

export default function FuturesPage() {
  return (
    <div className="futures-page">

      {/* TOP CASH SUMMARY */}
      <div className="futures-cash-grid">

        <div className="futures-cash-card">
          <div className="futures-icon">▣</div>
          <div>
            <span>Normal Kasa</span>
            <strong>$12,480.32</strong>
          </div>
          <em>Senin Paran</em>
        </div>

        <div className="futures-cash-card">
          <div className="futures-icon">▱</div>
          <div>
            <span>Serbest Kasa</span>
            <strong>$9,984.27</strong>
          </div>
          <em>LYRA İşlem Bütçesi</em>
        </div>

        <div className="futures-cash-card compact">
          <div>
            <span>Kullanılabilir Kasa</span>
            <strong className="positive">$7,432.15</strong>
          </div>

          <div className="vertical-divider" />

          <div>
            <span>Açık Risk</span>
            <strong className="negative">$2,552.12</strong>
          </div>
        </div>

      </div>

      {/* MAIN TRADING GRID */}
      <div className="futures-layout">

        <div className="futures-main">

          {/* MARKET HEADER */}
          <div className="futures-market-header">

            <div className="market-title-block">
              <div className="btc-large">₿</div>

              <div>
                <h1>BTC/USDT</h1>
                <span>Perpetual · USDT-M</span>
              </div>
            </div>

            <div className="market-price-block">
              <strong>68,432.12</strong>
              <span className="positive">+2.34% (+1,562.34)</span>
            </div>

            <Metric label="24s Hacim" value="$28.4B" />
            <Metric label="24s En Yüksek" value="69,210.45" />
            <Metric label="24s En Düşük" value="65,780.12" />
            <Metric label="Fonlama / 8s" value="+0.0100%" positive />

          </div>

          {/* CHART */}
          <div className="futures-chart-card">

            <div className="chart-toolbar">

              <div className="chart-periods">
                <button>1m</button>
                <button>5m</button>
                <button>15m</button>
                <button className="active">1H</button>
                <button>4H</button>
                <button>1D</button>
                <button>1W</button>
                <button>1M</button>
              </div>

              <div className="chart-actions">
                <button>◫</button>
                <button>⚙</button>
                <button>⛶</button>
              </div>

            </div>

            <div className="chart-meta">
              <span>A 68,210.45</span>
              <span>Y 68,765.32</span>
              <span>D 68,012.34</span>
              <span>K 68,432.12</span>
              <span className="positive">+221.67 (+0.32%)</span>
            </div>

            <div className="candle-chart">

              <div className="chart-tool-rail">
                <button>+</button>
                <button>⌁</button>
                <button>☷</button>
                <button>◒</button>
                <button>T</button>
                <button>⌗</button>
                <button>⊕</button>
                <button>⌕</button>
              </div>

              <div className="chart-grid-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="price-axis">
                <span>72,000</span>
                <span>70,000</span>
                <span>68,000</span>
                <span>66,000</span>
                <span>64,000</span>
                <span>62,000</span>
                <span>60,000</span>
              </div>

              <div className="candles">
                {candles.map((candle, index) => {
                  const [open, close, high, low] = candle;
                  const bullish = close < open;

                  const top = Math.min(open, close);
                  const height = Math.max(Math.abs(open - close), 8);
                  const wickTop = Math.min(high, top);
                  const wickHeight = Math.max(low - wickTop, 15);

                  return (
                    <div className="candle-slot" key={index}>
                      <div
                        className={`wick ${bullish ? "bullish" : "bearish"}`}
                        style={{
                          top: `${wickTop / 2}px`,
                          height: `${wickHeight / 2}px`,
                        }}
                      />

                      <div
                        className={`candle ${bullish ? "bullish" : "bearish"}`}
                        style={{
                          top: `${top / 2}px`,
                          height: `${height / 2}px`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="current-price-line">
                <span>68,432.12</span>
              </div>

              <div className="volume-bars">
                {candles.map((_, index) => (
                  <span
                    key={index}
                    style={{
                      height: `${20 + ((index * 17) % 48)}%`,
                    }}
                  />
                ))}
              </div>

              <div className="chart-dates">
                <span>6 Nis</span>
                <span>7 Nis</span>
                <span>8 Nis</span>
                <span>9 Nis</span>
                <span>10 Nis</span>
              </div>

            </div>
          </div>

          {/* POSITIONS */}
          <div className="positions-card">

            <div className="positions-tabs">
              <button className="active">
                Açık Pozisyonlar (2)
              </button>

              <button>
                Bekleyen Emirler (3)
              </button>

              <button>
                Geçmiş İşlemler
              </button>
            </div>

            <div className="positions-table">

              <div className="positions-header">
                <span>Coin</span>
                <span>Yön</span>
                <span>Kaldıraç</span>
                <span>Pozisyon Büyüklüğü</span>
                <span>Giriş Fiyatı</span>
                <span>Mevcut Fiyat</span>
                <span>P&L (ROE)</span>
                <span>İşlem</span>
              </div>

              {positions.map((position) => (
                <div
                  className="position-line"
                  key={position.symbol}
                >
                  <strong>{position.symbol}</strong>

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
                      position.pnl.startsWith("+")
                        ? "positive"
                        : "negative"
                    }
                  >
                    {position.pnl}
                  </strong>

                  <button className="close-position">
                    Kapat
                  </button>
                </div>
              ))}

            </div>
          </div>

          {/* LOWER PANELS */}
          <div className="futures-bottom-grid">

            <div className="futures-info-card">

              <div className="futures-card-title">
                Futures Detayları

                <div className="mini-tabs">
                  <button className="active">USDT-M</button>
                  <button>COIN-M</button>
                </div>
              </div>

              <InfoRow label="Toplam Pozisyon Değeri" value="38,191.12 USDT" />
              <InfoRow label="Kullanılan Marjin" value="1,420.43 USDT" />
              <InfoRow label="Kullanılabilir Marjin" value="7,432.15 USDT" />
              <InfoRow label="Açık Risk" value="2,552.12 USDT" negative />
              <InfoRow label="Fonlama (8s)" value="+0.0100%" positive />
              <InfoRow label="Liq. Seviyesi" value="%92.4" />

            </div>

            <div className="futures-info-card">

              <div className="futures-card-title">
                Sık İşlem Görenler
              </div>

              <MarketQuick symbol="BTC/USDT" price="68,432.12" change="+2.34%" />
              <MarketQuick symbol="ETH/USDT" price="3,180.45" change="+1.87%" />
              <MarketQuick symbol="SOL/USDT" price="142.67" change="+3.21%" />
              <MarketQuick symbol="BNB/USDT" price="583.21" change="+0.98%" />
              <MarketQuick symbol="XRP/USDT" price="0.5214" change="+1.56%" />

            </div>

            <div className="futures-info-card risk-card-large">

              <div className="futures-card-title">
                Risk Yönetimi
              </div>

              <div className="risk-meter">
                <div className="risk-meter-inner">
                  <strong>%68</strong>
                  <span>Risk Seviyesi</span>
                </div>
              </div>

              <div className="risk-stats">
                <InfoRow label="Toplam Risk" value="2,552.12 USDT" />
                <InfoRow label="Serbest Kasa" value="9,984.27 USDT" />
                <InfoRow label="Kullanılabilir Kasa" value="7,432.15 USDT" />
              </div>

              <button className="secondary-button">
                Risk Ayarları
              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <aside className="futures-sidebar">

          {/* ORDER PANEL */}
          <div className="order-panel">

            <div className="order-top-tabs">
              <button className="active">İşlem</button>
              <button>Limit</button>
              <button>Piyasa</button>
              <button>Stop</button>
            </div>

            <div className="buy-sell">
              <button className="buy active">Al</button>
              <button>Sat</button>
            </div>

            <label>Kaldıraç</label>

            <select defaultValue="10x">
              <option>5x</option>
              <option>10x</option>
              <option>20x</option>
              <option>50x</option>
            </select>

            <label>Pozisyon Büyüklüğü</label>

            <div className="input-box">
              <input placeholder="0.00" />
              <span>USDT</span>
            </div>

            <div className="size-buttons">
              <button>%25</button>
              <button>%50</button>
              <button>%75</button>
              <button>%100</button>
            </div>

            <button className="long-button">
              Long Aç
            </button>

            <div className="order-info">
              <div>
                <span>Pozisyon Açma Maliyeti</span>
                <strong>$0.00</strong>
              </div>

              <div>
                <span>Maksimum Açılabilir</span>
                <strong>$74,321.45</strong>
              </div>
            </div>

            <div className="advanced-settings">
              ⚙ Gelişmiş Ayarlar
            </div>

          </div>

          {/* OPEN POSITIONS SIDE */}
          <div className="side-positions">

            <div className="side-title">
              <h2>Açık Pozisyonlar (2)</h2>
              <span>Tümü⌄</span>
            </div>

            <SidePosition
              symbol="BTC/USDT"
              direction="Long"
              leverage="10x"
              pnl="+342.18 USDT (+8.24%)"
              entry="66,820.12"
              current="68,432.12"
              liquidation="64,210.45"
            />

            <SidePosition
              symbol="ETH/USDT"
              direction="Short"
              leverage="5x"
              pnl="-125.47 USDT (-3.21%)"
              entry="3,245.67"
              current="3,180.45"
              liquidation="3,412.00"
            />

          </div>

          {/* LAST TRADES */}
          <div className="recent-trades">

            <div className="side-title">
              <h2>Son İşlemler</h2>
            </div>

            <div className="trades-head">
              <span>Coin</span>
              <span>Fiyat</span>
              <span>Miktar</span>
              <span>Zaman</span>
            </div>

            {recentTrades.map((trade, index) => (
              <div className="trade-row" key={index}>
                <span className={trade.type === "up" ? "trade-up" : "trade-down"}>
                  {trade.symbol}
                </span>

                <span>{trade.price}</span>
                <span>{trade.amount}</span>
                <span>{trade.time}</span>
              </div>
            ))}

          </div>

        </aside>

      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="market-metric">
      <span>{label}</span>
      <strong className={positive ? "positive" : ""}>
        {value}
      </strong>
    </div>
  );
}

function InfoRow({
  label,
  value,
  negative,
  positive,
}: {
  label: string;
  value: string;
  negative?: boolean;
  positive?: boolean;
}) {
  return (
    <div className="info-row">
      <span>{label}</span>

      <strong
        className={
          negative
            ? "negative"
            : positive
            ? "positive"
            : ""
        }
      >
        {value}
      </strong>
    </div>
  );
}

function MarketQuick({
  symbol,
  price,
  change,
}: {
  symbol: string;
  price: string;
  change: string;
}) {
  return (
    <div className="quick-market-row">
      <span>{symbol}</span>
      <strong>{price}</strong>
      <span className="positive">{change}</span>
    </div>
  );
}

function SidePosition({
  symbol,
  direction,
  leverage,
  pnl,
  entry,
  current,
  liquidation,
}: {
  symbol: string;
  direction: string;
  leverage: string;
  pnl: string;
  entry: string;
  current: string;
  liquidation: string;
}) {
  return (
    <div className="side-position">

      <div className="side-position-head">
        <strong>{symbol}</strong>

        <span
          className={
            direction === "Long"
              ? "long badge"
              : "short badge"
          }
        >
          {direction} {leverage}
        </span>

        <strong
          className={
            pnl.startsWith("+")
              ? "positive"
              : "negative"
          }
        >
          {pnl}
        </strong>
      </div>

      <div className="side-position-grid">
        <div>
          <span>Giriş Fiyatı</span>
          <strong>{entry}</strong>
        </div>

        <div>
          <span>Mevcut Fiyat</span>
          <strong>{current}</strong>
        </div>

        <div>
          <span>Likidasyon Fiyatı</span>
          <strong>{liquidation}</strong>
        </div>
      </div>

    </div>
  );
}