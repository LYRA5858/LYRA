import "./index.css";
import MarketPage from "./MarketPage";
import FuturesPage from "./FuturesPage";
import BistPage from "./BistPage";
import USStocksPage from "./USStocksPage";
import CryptoPage from "./CryptoPage.tsx";
import PortfolioPage from "./PortfolioPage";
import PositionsPage from "./PositionsPage";
import AIPage from "./AIPage";
import AuthPage from "./AuthPage";
import { useState } from "react";
import OpportunitiesPage from "./OpportunitiesPage";
import SettingsPage from "./SettingsPage";
import NotificationsPage from "./NotificationsPage";
import { MarketDataProvider } from "./MarketDataContext.tsx";

type Market = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  category: "Kripto" | "Futures" | "BIST" | "ABD";
  positive?: boolean;
};

const markets: Market[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$67,432",
    change: "+2.41%",
    category: "Kripto",
    positive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,245",
    change: "+1.87%",
    category: "Kripto",
    positive: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$142.3",
    change: "+3.12%",
    category: "Kripto",
    positive: true,
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "$593.2",
    change: "+1.25%",
    category: "Kripto",
    positive: true,
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: "$0.52",
    change: "+0.98%",
    category: "Kripto",
    positive: true,
  },
  {
    symbol: "THYAO",
    name: "Türk Hava Yolları",
    price: "312.50 ₺",
    change: "+2.08%",
    category: "BIST",
    positive: true,
  },
  {
    symbol: "GARAN",
    name: "Garanti BBVA",
    price: "146.80 ₺",
    change: "+1.42%",
    category: "BIST",
    positive: true,
  },
  {
    symbol: "BIST100",
    name: "BIST 100",
    price: "10,237",
    change: "+1.34%",
    category: "BIST",
    positive: true,
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$214.32",
    change: "+1.16%",
    category: "ABD",
    positive: true,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: "$145.62",
    change: "+2.73%",
    category: "ABD",
    positive: true,
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: "$511.24",
    change: "+0.84%",
    category: "ABD",
    positive: true,
  },
];

const positions = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    direction: "Long",
    amount: "0.15",
    entry: "66,800",
    current: "67,432",
    pnl: "+4.3%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    direction: "Short",
    amount: "0.32",
    entry: "3,320",
    current: "3,245",
    pnl: "+2.2%",
  },
  {
    symbol: "SOL",
    name: "Solana",
    direction: "Long",
    amount: "10.4",
    entry: "138.2",
    current: "142.3",
    pnl: "+3.7%",
  },
  {
    symbol: "BIST",
    name: "BIST 100",
    direction: "Long",
    amount: "1,000",
    entry: "9,842",
    current: "10,237",
    pnl: "+4.0%",
  },
];

function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem("lyra_demo_session") === "1";
  });

  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [marketFilter, setMarketFilter] = useState("Tümü");

  const filteredMarkets =
    marketFilter === "Tümü"
      ? markets
      : markets.filter((market) => market.category === marketFilter);

  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Kripto", icon: "₿" },
    { name: "Futures", icon: "↗" },
    { name: "BIST", icon: "▥" },
    { name: "ABD Hisseleri", icon: "◫" },
    { name: "Fırsatlar", icon: "✦" },
    { name: "LYRA AI", icon: "Λ" },
    { name: "Portföy", icon: "▣" },
    { name: "Açık Pozisyonlar", icon: "◉" },
    { name: "LYRA Performansı", icon: "◌" },
    { name: "Bildirimler", icon: "♢" },
    { name: "Ayarlar", icon: "⚙" },
  ];

  if (!authenticated) {
    return (
      <AuthPage
        onAuthenticated={() => {
          setAuthenticated(true);
        }}
      />
    );
  }

  return (
    <MarketDataProvider>
      <div className="app">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-logo">Λ</div>

            <div>
              <div className="brand-name">LYRA</div>
              <div className="brand-subtitle">Kişisel Finansal Zekâ</div>
            </div>
          </div>

          <div className="sidebar-title">ANA MENÜ</div>

          <nav>
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`menu-item ${
                  activeMenu === item.name ? "active" : ""
                }`}
                onClick={() => setActiveMenu(item.name)}
              >
                <span className="menu-icon">{item.icon}</span>
                <span>{item.name}</span>

                {item.name === "Bildirimler" && (
                  <span className="notification-badge">3</span>
                )}
              </button>
            ))}
          </nav>

          <div className="sidebar-bottom-card">
            <div className="sparkle">✦</div>
            <strong>
              Daha akıllı yatırımlar,
              <br />
              daha özgür bir sen.
            </strong>
            <div className="bottom-line" />
          </div>
        </aside>

        {/* MAIN */}
        <main className="main">
          {/* TOP BAR */}
          <header className="topbar">
            <div className="search">
              <span>⌕</span>
              <input placeholder="Varlık, hisse, sembol ara..." />
            </div>

            <div className="topbar-right">
              <div className="connection">
                <span className="connection-dot" />
                Binance Bağlı
              </div>

              <button className="top-icon">♧</button>
              <button className="top-icon">☼</button>

              <div className="profile">
                <div className="profile-avatar">EC</div>

                <div>
                  <strong>Eşref Can</strong>
                  <small>Premium</small>
                </div>

                <span>⌄</span>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          {activeMenu === "Futures" ? (
            <FuturesPage />
          ) : activeMenu === "BIST" ? (
            <BistPage />
          ) : activeMenu === "ABD Hisseleri" ? (
            <USStocksPage />
          ) : activeMenu === "Kripto" ? (
            <CryptoPage />
          ) : activeMenu === "Portföy" ? (
            <PortfolioPage />
          ) : activeMenu === "Açık Pozisyonlar" ? (
            <PositionsPage />
          ) : activeMenu === "LYRA AI" ? (
            <AIPage />
          ) : activeMenu === "Fırsatlar" ? (
            <OpportunitiesPage />
          ) : activeMenu === "Ayarlar" ? (
            <SettingsPage
              onLogout={() => {
                localStorage.removeItem("lyra_demo_session");
                setAuthenticated(false);
              }}
            />
          ) : activeMenu === "Bildirimler" ? (
            <NotificationsPage />
          ) : activeMenu !== "Dashboard" ? (
            <MarketPage section={activeMenu} />
          ) : (
            <section className="content">
              {/* WELCOME */}
              <div className="welcome">
                <div className="welcome-main">
                  <div className="welcome-eyebrow">
                    LYRA / KONTROL PANELİ
                  </div>

                  <h1>
                    Günaydın, Eşref Can <span>☀️</span>
                  </h1>

                  <p>Bugünün fırsatlarını birlikte değerlendirelim.</p>

                  <small>Piyasalar hareketli, hazırlıklı ol.</small>
                </div>

                <div className="date-card">
                  <span>24 Nisan 2025</span>
                  <strong>10:24</strong>
                  <small>
                    <i /> Canlı Piyasa
                  </small>
                </div>
              </div>

              {/* KPI CARDS */}
              <div className="stats-grid">
                <StatCard
                  icon="▣"
                  title="Toplam Portföy"
                  value="$48,620"
                  change="↗ +2.71% (bugün)"
                  positive
                />

                <StatCard
                  icon="▤"
                  title="Serbest Kasa"
                  value="$12,480"
                  change="%62.4 kullanılabilir"
                />

                <StatCard
                  icon="△"
                  title="Günlük Kâr/Zarar"
                  value="+$1,284"
                  change="↗ +2.71%"
                  positive
                />

                <div className="stat-card risk-card">
                  <div className="stat-top">
                    <div className="stat-icon">◈</div>

                    <div>
                      <div className="stat-title">LYRA Risk</div>
                      <div className="risk-number">31 / 100</div>
                      <div className="risk-label">Kontrollü</div>
                    </div>

                    <div className="risk-circle">
                      <span>31</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CHART + MARKET LIST */}
              <div className="dashboard-grid">
                <div className="large-card portfolio-chart">
                  <div className="card-header">
                    <div>
                      <h2>Portföy Performansı</h2>
                      <span>Toplam portföy değeri</span>
                    </div>

                    <div className="periods">
                      <button>1G</button>
                      <button>1H</button>
                      <button className="selected">1A</button>
                      <button>3A</button>
                      <button>1Y</button>
                    </div>
                  </div>

                  <div className="chart">
                    <div className="chart-y">
                      <span>60.000</span>
                      <span>45.000</span>
                      <span>30.000</span>
                      <span>15.000</span>
                    </div>

                    <svg
                      className="chart-svg"
                      viewBox="0 0 900 300"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#6947ff"
                            stopOpacity="0.45"
                          />
                          <stop
                            offset="100%"
                            stopColor="#6947ff"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 250
                        C40 235 55 220 90 225
                        C125 230 135 190 175 205
                        C215 220 225 165 265 178
                        C305 191 325 150 360 165
                        C395 180 420 125 455 145
                        C490 165 510 115 545 125
                        C580 135 600 100 635 112
                        C670 124 690 72 725 90
                        C760 108 790 55 820 70
                        C850 85 875 42 900 50
                        L900 300 L0 300 Z"
                        fill="url(#chartGradient)"
                      />

                      <path
                        d="M0 250
                        C40 235 55 220 90 225
                        C125 230 135 190 175 205
                        C215 220 225 165 265 178
                        C305 191 325 150 360 165
                        C395 180 420 125 455 145
                        C490 165 510 115 545 125
                        C580 135 600 100 635 112
                        C670 124 690 72 725 90
                        C760 108 790 55 820 70
                        C850 85 875 42 900 50"
                        fill="none"
                        stroke="#6947ff"
                        strokeWidth="3"
                      />
                    </svg>

                    <div className="chart-labels">
                      <span>17 Nis</span>
                      <span>18 Nis</span>
                      <span>19 Nis</span>
                      <span>20 Nis</span>
                      <span>21 Nis</span>
                      <span>22 Nis</span>
                      <span>23 Nis</span>
                      <span>24 Nis</span>
                    </div>

                    <div className="chart-value">$48,620</div>
                  </div>
                </div>

                {/* MARKET LIST */}
                <div className="large-card market-card">
                  <div className="card-header">
                    <div className="tabs-title">
                      <button className="tab-active">Piyasa Listesi</button>
                      <button>Favoriler</button>
                    </div>

                    <button className="text-button">Tümü</button>
                  </div>

                  <div className="market-filters">
                    {["Tümü", "Kripto", "Futures", "BIST", "ABD"].map(
                      (filter) => (
                        <button
                          key={filter}
                          className={
                            marketFilter === filter ? "filter-active" : ""
                          }
                          onClick={() => setMarketFilter(filter)}
                        >
                          {filter}
                        </button>
                      )
                    )}
                  </div>

                  <div className="market-header">
                    <span>Varlık / Sembol</span>
                    <span>Fiyat</span>
                    <span>24s Değişim</span>
                  </div>

                  <div className="market-list">
                    {filteredMarkets.map((market) => (
                      <div className="market-row" key={market.symbol}>
                        <div className="market-name">
                          <div className="coin-icon">
                            {market.symbol === "BTC"
                              ? "₿"
                              : market.symbol === "ETH"
                              ? "◆"
                              : market.symbol === "SOL"
                              ? "≋"
                              : market.symbol === "BIST"
                              ? "B"
                              : market.symbol === "US500"
                              ? "S"
                              : "●"}
                          </div>

                          <div>
                            <strong>{market.symbol}</strong>
                            <small>{market.name}</small>
                          </div>
                        </div>

                        <strong>{market.price}</strong>

                        <span className="positive">{market.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LOWER GRID */}
              <div className="lower-grid">
                {/* CASH */}
                <div className="large-card cash-card">
                  <div className="card-header">
                    <div>
                      <h2>Kasa Dağılımı</h2>
                      <span>Para birimi dağılımı</span>
                    </div>

                    <button className="text-button">Detay</button>
                  </div>

                  <div className="cash-content">
                    <Donut center="$12.480" subtitle="Toplam Kasa" />

                    <div className="legend">
                      <LegendRow
                        label="USDT"
                        percent="%48,2"
                        value="$6.014"
                      />

                      <LegendRow
                        label="TRY"
                        percent="%22,7"
                        value="$2.832"
                      />

                      <LegendRow
                        label="BTC"
                        percent="%12,4"
                        value="$1.548"
                      />

                      <LegendRow
                        label="ETH"
                        percent="%8,7"
                        value="$1.085"
                      />

                      <LegendRow
                        label="Diğer"
                        percent="%7,9"
                        value="$981"
                      />
                    </div>
                  </div>

                  <div className="cash-details">
                    <div>
                      <span>Toplam Kasa</span>
                      <strong>$12.480</strong>
                    </div>

                    <div>
                      <span>Kullanılabilir Kasa</span>
                      <strong>$7.788</strong>
                    </div>

                    <div>
                      <span>Açık Pozisyonlar</span>
                      <strong>$4.692</strong>
                    </div>

                    <div>
                      <span>Günlük Değişim</span>
                      <strong className="positive">+$612</strong>
                    </div>
                  </div>

                  <button className="primary-button">◉ Kasa Yönetimi</button>
                </div>

                {/* ASSET DISTRIBUTION */}
                <div className="large-card asset-card">
                  <div className="card-header">
                    <div>
                      <h2>Varlık Dağılımı</h2>
                      <span>Portföy dağılımı</span>
                    </div>

                    <button className="text-button">Detay</button>
                  </div>

                  <div className="asset-content">
                    <Donut center="$48.620" subtitle="Toplam" second />

                    <div className="legend">
                      <LegendRow
                        label="BTC"
                        percent="%42,3"
                        value="$20.597"
                      />
                      <LegendRow
                        label="ETH"
                        percent="%18,7"
                        value="$9.098"
                      />
                      <LegendRow
                        label="SOL"
                        percent="%12,6"
                        value="$6.131"
                      />
                      <LegendRow
                        label="BIST"
                        percent="%8,4"
                        value="$4.088"
                      />
                      <LegendRow
                        label="USDT"
                        percent="%7,2"
                        value="$3.504"
                      />
                      <LegendRow
                        label="Diğer"
                        percent="%10,8"
                        value="$5.282"
                      />
                    </div>
                  </div>
                </div>

                {/* POSITIONS */}
                <div className="large-card positions-card">
                  <div className="card-header">
                    <div>
                      <h2>Açık Pozisyonlar</h2>
                      <span>Aktif işlemler ve güncel performans</span>
                    </div>

                    <button className="text-button">Tümü →</button>
                  </div>

                  <div className="positions-table">
                    <div className="positions-head">
                      <span>Varlık / Yön</span>
                      <span>Miktar</span>
                      <span>Giriş Fiyatı</span>
                      <span>Mevcut Fiyat</span>
                      <span>Kâr/Z</span>
                    </div>

                    {positions.map((position) => (
                      <div className="position-row" key={position.symbol}>
                        <div className="position-asset">
                          <div className="coin-icon">
                            {position.symbol === "BTC"
                              ? "₿"
                              : position.symbol === "ETH"
                              ? "◆"
                              : position.symbol === "SOL"
                              ? "≋"
                              : "B"}
                          </div>

                          <div>
                            <strong>{position.symbol}</strong>
                            <small
                              className={
                                position.direction === "Long"
                                  ? "long"
                                  : "short"
                              }
                            >
                              {position.direction}
                            </small>
                          </div>
                        </div>

                        <span>{position.amount}</span>
                        <span>{position.entry}</span>
                        <span>{position.current}</span>

                        <strong className="positive">
                          {position.pnl}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="bottom-grid">
                <div className="large-card lyra-performance">
                  <div className="card-header">
                    <div>
                      <h2>LYRA Performansı</h2>
                      <span>Stratejilerimizle daha iyi sonuçlar.</span>
                    </div>

                    <button className="outline-button">Detaylı Analiz</button>
                  </div>

                  <div className="performance-content">
                    <div className="performance-circle">
                      <strong>%68</strong>
                      <span>Başarı Oranı</span>
                    </div>

                    <div className="performance-stats">
                      <div>
                        <span>Toplam İşlem</span>
                        <strong>142</strong>
                      </div>

                      <div>
                        <span>Kârlı İşlem</span>
                        <strong>97</strong>
                      </div>

                      <div>
                        <span>Zararlı İşlem</span>
                        <strong className="negative">45</strong>
                      </div>

                      <div>
                        <span>Ortalama Kâr</span>
                        <strong className="positive">%3,12</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="large-card opportunities">
                  <div className="card-header">
                    <div>
                      <h2>Fırsatlar</h2>
                      <span>LYRA'nın dikkatini çeken piyasalar</span>
                    </div>

                    <button className="text-button">Tümü</button>
                  </div>

                  <div className="opportunity-list">
                    <Opportunity
                      symbol="BTC"
                      direction="Long"
                      ratio="2.33"
                    />

                    <Opportunity
                      symbol="ETH"
                      direction="Short"
                      ratio="1.91"
                    />

                    <Opportunity
                      symbol="SOL"
                      direction="Long"
                      ratio="2.76"
                    />
                  </div>
                </div>

                <div className="large-card quick-actions">
                  <div className="card-header">
                    <div>
                      <h2>Hızlı İşlemler</h2>
                      <span>LYRA araçları</span>
                    </div>
                  </div>

                  <div className="quick-grid">
                    <QuickAction icon="₿" label="Kripto AI/Sat" />
                    <QuickAction icon="↗" label="Futures İşlemi" />
                    <QuickAction icon="◉" label="Varlık Transferi" />
                    <QuickAction icon="▣" label="Portföy Analizi" />
                  </div>
                </div>
              </div>

              {/* AI BANNER */}
              <div className="ai-banner">
                <div className="ai-symbol">Λ</div>

                <div>
                  <strong>LYRA AI</strong>
                  <h2>Disiplin, en büyük getiridir.</h2>
                  <p>
                    Piyasaları analiz et, fırsatları keşfet ve
                    portföyünü daha bilinçli yönet.
                  </p>
                </div>

                <button className="ai-button">LYRA AI'ı Aç →</button>
              </div>
            </section>
          )}
        </main>
      </div>
    </MarketDataProvider>
  );
}

/* COMPONENTS */

function StatCard({
  icon,
  title,
  value,
  change,
  positive,
}: {
  icon: string;
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>

        <div>
          <div className="stat-title">{title}</div>
          <div className="stat-value">{value}</div>

          <div className={positive ? "positive" : "stat-change"}>
            {change}
          </div>
        </div>
      </div>

      <div className="mini-chart">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function Donut({
  center,
  subtitle,
  second,
}: {
  center: string;
  subtitle: string;
  second?: boolean;
}) {
  return (
    <div className={`donut ${second ? "donut-second" : ""}`}>
      <div className="donut-inner">
        <strong>{center}</strong>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

function LegendRow({
  label,
  percent,
  value,
}: {
  label: string;
  percent: string;
  value: string;
}) {
  return (
    <div className="legend-row">
      <div>
        <span className="legend-dot" />
        <strong>{label}</strong>
      </div>

      <span>{percent}</span>

      <strong>{value}</strong>
    </div>
  );
}

function Opportunity({
  symbol,
  direction,
  ratio,
}: {
  symbol: string;
  direction: string;
  ratio: string;
}) {
  return (
    <div className="opportunity">
      <div className="opportunity-symbol">
        {symbol === "BTC" ? "₿" : symbol === "ETH" ? "◆" : "≋"}
      </div>

      <div>
        <strong>{symbol}</strong>
        <span className={direction === "Long" ? "long" : "short"}>
          {direction}
        </span>
      </div>

      <div className="opportunity-ratio">
        <span>K/Z</span>
        <strong>1:{ratio}</strong>
      </div>

      <button>İncele</button>
    </div>
  );
}

function QuickAction({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <button className="quick-action">
      <span>{icon}</span>
      <small>{label}</small>
    </button>
  );
}

export default App;