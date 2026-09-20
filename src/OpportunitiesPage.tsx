import "./opportunities-page.css";

const opportunities = [
  {
    symbol: "BTC/USDT",
    market: "Kripto",
    strategy: "Trend Takibi",
    entry: "67,800 - 68,200",
    target: "70,500",
    stop: "66,200",
    score: "9.2",
    risk: "Orta",
  },
  {
    symbol: "NVDA",
    market: "ABD",
    strategy: "Momentum",
    entry: "$142 - $145",
    target: "$151",
    stop: "$138",
    score: "8.9",
    risk: "Orta",
  },
  {
    symbol: "THYAO",
    market: "BIST",
    strategy: "Pozitif Kırılım",
    entry: "308 - 312 ₺",
    target: "326 ₺",
    stop: "302 ₺",
    score: "8.6",
    risk: "Düşük",
  },
  {
    symbol: "ETH/USDT",
    market: "Futures",
    strategy: "Momentum",
    entry: "3,160 - 3,190",
    target: "3,280",
    stop: "3,120",
    score: "8.1",
    risk: "Orta",
  },
];

const filters = ["Tümü", "Kripto", "Futures", "BIST", "ABD"];

export default function OpportunitiesPage() {
  return (
    <div className="opportunities-page">

      <div className="opportunities-hero">
        <div>
          <div className="opp-eyebrow">
            LYRA / FIRSATLAR
          </div>

          <h1>Piyasa Fırsatları</h1>

          <p>
            LYRA'nın farklı piyasalarda tespit ettiği
            dikkat çekici fırsatları tek ekranda incele.
          </p>
        </div>

        <div className="opp-live">
          <span />
          LYRA Tarama Aktif
        </div>
      </div>

      <div className="opp-summary">
        <div>
          <span>Aktif Fırsatlar</span>
          <strong>17</strong>
          <small>LYRA tarafından tespit edildi</small>
        </div>

        <div>
          <span>Güçlü Sinyaller</span>
          <strong className="positive">7</strong>
          <small>8.5 üzeri skor</small>
        </div>

        <div>
          <span>Ortalama Skor</span>
          <strong>8.7</strong>
          <small>10 üzerinden</small>
        </div>

        <div>
          <span>Takip Edilen Piyasa</span>
          <strong>4</strong>
          <small>Kripto · Futures · BIST · ABD</small>
        </div>
      </div>

      <div className="opp-filter-bar">
        <div className="opp-filter-buttons">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={index === 0 ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>

        <button className="opp-sort-button">
          Skora Göre ↓
        </button>
      </div>

      <div className="opp-main-grid">

        <main className="opp-list-card">

          <div className="opp-card-header">
            <div>
              <h2>LYRA Fırsat Motoru</h2>
              <span>
                Trend, momentum, hacim ve risk göstergelerinden
                oluşturulan fırsatlar
              </span>
            </div>

            <span className="opp-refresh">
              Son tarama: şimdi
            </span>
          </div>

          <div className="opp-table-head">
            <span>Varlık</span>
            <span>Strateji</span>
            <span>Giriş Bölgesi</span>
            <span>Hedef</span>
            <span>Stop</span>
            <span>Risk</span>
            <span>Skor</span>
            <span>İşlem</span>
          </div>

          {opportunities.map((item) => (
            <div className="opp-row" key={item.symbol}>

              <div className="opp-asset">
                <div className="opp-asset-icon">
                  {item.symbol.charAt(0)}
                </div>

                <div>
                  <strong>{item.symbol}</strong>
                  <small>{item.market}</small>
                </div>
              </div>

              <span>{item.strategy}</span>

              <strong>{item.entry}</strong>

              <strong className="positive">
                {item.target}
              </strong>

              <strong className="negative">
                {item.stop}
              </strong>

              <span>{item.risk}</span>

              <div className="opp-score">
                <strong>{item.score}</strong>
                <small>/10</small>
              </div>

              <button className="opp-detail-button">
                İncele
              </button>

            </div>
          ))}

        </main>

        <aside className="opp-right">

          <div className="opp-side-card">

            <div className="opp-card-header">
              <div>
                <h2>LYRA Seçimi</h2>
                <span>En yüksek skorlu fırsat</span>
              </div>
            </div>

            <div className="selected-opportunity">

              <div className="selected-symbol">
                B
              </div>

              <strong>BTC/USDT</strong>

              <span>
                Trend Takibi
              </span>

              <div className="selected-score">
                <strong>9.2</strong>
                <span>/10</span>
              </div>

            </div>

            <div className="selected-details">

              <div>
                <span>Giriş</span>
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
                <span>Risk / Ödül</span>
                <strong>1 : 2.8</strong>
              </div>

            </div>

            <button className="opp-main-button">
              Detaylı Analizi Aç →
            </button>

          </div>

          <div className="opp-side-card">

            <div className="opp-card-header">
              <div>
                <h2>Fırsat Dağılımı</h2>
                <span>Piyasalara göre aktif fırsatlar</span>
              </div>
            </div>

            <div className="opp-distribution">

              <Distribution
                name="Kripto"
                count="8"
                width="82%"
                type="crypto"
              />

              <Distribution
                name="ABD"
                count="4"
                width="58%"
                type="us"
              />

              <Distribution
                name="BIST"
                count="3"
                width="46%"
                type="bist"
              />

              <Distribution
                name="Futures"
                count="2"
                width="31%"
                type="futures"
              />

            </div>

          </div>

          <div className="opp-side-card">

            <div className="opp-card-header">
              <div>
                <h2>LYRA Fırsat İlkeleri</h2>
                <span>Analiz motorunun temel yaklaşımı</span>
              </div>
            </div>

            <div className="opp-principles">

              <div>
                <span>01</span>
                <p>
                  Trend ve momentum birlikte değerlendirilir.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Risk / ödül oranı fırsat değerlendirmesine dahil edilir.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Tek bir gösterge yerine çoklu sinyal yaklaşımı kullanılır.
                </p>
              </div>

            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}

function Distribution({
  name,
  count,
  width,
  type,
}: {
  name: string;
  count: string;
  width: string;
  type: string;
}) {
  return (
    <div className="opp-distribution-row">

      <div className="opp-distribution-label">
        <span className={`opp-dot ${type}`} />
        <span>{name}</span>
        <strong>{count}</strong>
      </div>

      <div className="opp-distribution-bar">
        <i style={{ width }} />
      </div>

    </div>
  );
}