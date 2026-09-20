import { useState } from "react";
import "./ai-page.css";

const marketSignals = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    action: "GÜÇLÜ AL",
    score: "9.2",
    trend: "Yükseliş",
    detail: "Trend ve momentum birlikte pozitif.",
    positive: true,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    action: "AL",
    score: "8.9",
    trend: "Yükseliş",
    detail: "Teknoloji sektöründe güçlü momentum.",
    positive: true,
  },
  {
    symbol: "THYAO",
    name: "Türk Hava Yolları",
    action: "BEKLE",
    score: "7.4",
    trend: "Pozitif",
    detail: "Destek üzerinde hareket ediyor.",
    positive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    action: "BEKLE",
    score: "7.8",
    trend: "Nötr / Pozitif",
    detail: "Momentum güçlü ancak risk artıyor.",
    positive: true,
  },
];

const opportunities = [
  {
    symbol: "BTC/USDT",
    title: "Trend Takibi",
    entry: "67,800 - 68,200",
    target: "70,500",
    risk: "Orta",
  },
  {
    symbol: "NVDA",
    title: "Momentum",
    entry: "$142 - $145",
    target: "$151",
    risk: "Orta",
  },
  {
    symbol: "THYAO",
    title: "Pozitif Kırılım",
    entry: "308 - 312 ₺",
    target: "326 ₺",
    risk: "Düşük",
  },
];

const alerts = [
  {
    level: "Dikkat",
    title: "BTC volatilitesi yükseliyor.",
    detail: "Son 60 dakikada oynaklık ortalamanın üzerinde.",
    type: "warning",
  },
  {
    level: "Fırsat",
    title: "NASDAQ teknoloji hisselerinde momentum güçlendi.",
    detail: "LYRA takip listesindeki birkaç hissede eş zamanlı pozitif sinyal.",
    type: "positive",
  },
  {
    level: "Risk",
    title: "Futures portföyünde kaldıraç yoğunluğu bulunuyor.",
    detail: "BTC/USDT pozisyonu toplam riskin önemli bölümünü oluşturuyor.",
    type: "danger",
  },
];

const suggestedQuestions = [
  "Portföyümü analiz et",
  "Bugünün fırsatlarını göster",
  "BTC için kısa vadeli görünüm",
  "Riskimi açıkla",
];

export default function AIPage() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  return (
    <div className="ai-page">

      {/* HEADER */}
      <section className="ai-hero">

        <div className="ai-hero-left">

          <div className="ai-orb">
            <span>Λ</span>
          </div>

          <div>
            <div className="ai-eyebrow">
              LYRA / ARTIFICIAL INTELLIGENCE
            </div>

            <h1>LYRA AI</h1>

            <p>
              Piyasaları analiz et, fırsatları keşfet,
              riskleri gör ve portföyünü daha bilinçli yönet.
            </p>
          </div>

        </div>

        <div className="ai-status">
          <span />
          AI Motoru Hazır
        </div>

      </section>

      {/* TOP SUMMARY */}
      <section className="ai-summary-grid">

        <div className="ai-summary-card">
          <span>Tarama Durumu</span>
          <strong>2,481</strong>
          <small>varlık analiz edildi</small>
        </div>

        <div className="ai-summary-card">
          <span>Aktif Fırsatlar</span>
          <strong className="positive">17</strong>
          <small>LYRA tarafından tespit edildi</small>
        </div>

        <div className="ai-summary-card">
          <span>Risk Uyarıları</span>
          <strong className="negative">3</strong>
          <small>takip edilmesi gerekiyor</small>
        </div>

        <div className="ai-summary-card ai-score-card">
          <span>LYRA Güven Skoru</span>
          <strong>8.7 / 10</strong>
          <small className="positive">Güçlü sinyal kalitesi</small>

          <div className="ai-score-ring">
            <span>87</span>
          </div>
        </div>

      </section>

      {/* MAIN GRID */}
      <section className="ai-main-grid">

        <div className="ai-left-column">

          {/* MARKET SCAN */}
          <div className="ai-card ai-scan-card">

            <div className="ai-card-header">

              <div>
                <h2>LYRA Piyasa Taraması</h2>
                <span>
                  Kripto, BIST ve ABD piyasalarından seçilmiş sinyaller
                </span>
              </div>

              <button className="ai-text-button">
                Tümünü Gör →
              </button>

            </div>

            <div className="ai-signal-table">

              <div className="ai-signal-head">
                <span>Varlık</span>
                <span>Sinyal</span>
                <span>Trend</span>
                <span>Skor</span>
                <span>Açıklama</span>
              </div>

              {marketSignals.map((signal) => (
                <div className="ai-signal-row" key={signal.symbol}>

                  <div className="ai-signal-asset">

                    <div className="ai-signal-icon">
                      {signal.symbol.charAt(0)}
                    </div>

                    <div>
                      <strong>{signal.symbol}</strong>
                      <small>{signal.name}</small>
                    </div>

                  </div>

                  <span
                    className={
                      signal.action === "BEKLE"
                        ? "ai-wait-badge"
                        : "ai-buy-badge"
                    }
                  >
                    {signal.action}
                  </span>

                  <span className="positive">
                    {signal.trend}
                  </span>

                  <strong className="ai-score">
                    {signal.score}
                  </strong>

                  <span className="ai-signal-detail">
                    {signal.detail}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* CHAT */}
          <div className="ai-card ai-chat-card">

            <div className="ai-card-header">

              <div>
                <h2>LYRA'ya Sor</h2>
                <span>
                  Portföyün ve piyasalar hakkında sorularını yönelt
                </span>
              </div>

              <span className="ai-online">
                ● Çevrimiçi
              </span>

            </div>

            <div className="ai-chat-body">

              <div className="ai-message ai-message-bot">

                <div className="ai-message-avatar">
                  Λ
                </div>

                <div>
                  <strong>LYRA</strong>

                  <p>
                    Merhaba. Portföyün, piyasalar, risk,
                    fırsatlar ve stratejilerin hakkında
                    sana yardımcı olabilirim.
                  </p>
                </div>

              </div>

              {selectedQuestion && (
                <div className="ai-message ai-message-user">

                  <div className="ai-message-user-bubble">
                    {selectedQuestion}
                  </div>

                </div>
              )}

            </div>

            <div className="ai-question-chips">

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => setSelectedQuestion(question)}
                >
                  {question}
                </button>
              ))}

            </div>

            <div className="ai-input-area">

              <input
                value={selectedQuestion}
                onChange={(event) =>
                  setSelectedQuestion(event.target.value)
                }
                placeholder="LYRA'ya bir soru sor..."
              />

              <button className="ai-send-button">
                →
              </button>

            </div>

          </div>

          {/* OPPORTUNITIES */}
          <div className="ai-card">

            <div className="ai-card-header">

              <div>
                <h2>LYRA Fırsat Alanları</h2>
                <span>
                  Strateji motorunun dikkat çektiği bölgeler
                </span>
              </div>

              <button className="ai-text-button">
                Tümü →
              </button>

            </div>

            <div className="ai-opportunities">

              {opportunities.map((item) => (
                <div
                  className="ai-opportunity"
                  key={item.symbol}
                >

                  <div className="ai-opportunity-symbol">
                    {item.symbol.charAt(0)}
                  </div>

                  <div>
                    <strong>{item.symbol}</strong>
                    <span>{item.title}</span>
                  </div>

                  <div>
                    <small>Giriş</small>
                    <strong>{item.entry}</strong>
                  </div>

                  <div>
                    <small>Hedef</small>
                    <strong className="positive">
                      {item.target}
                    </strong>
                  </div>

                  <div>
                    <small>Risk</small>
                    <strong>{item.risk}</strong>
                  </div>

                  <button>İncele</button>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <aside className="ai-right-column">

          {/* PERSONALIZED */}
          <div className="ai-card ai-personal-card">

            <div className="ai-card-header">
              <div>
                <h2>Seni Tanıyorum</h2>
                <span>LYRA kullanıcı profilinden</span>
              </div>
            </div>

            <div className="ai-profile-row">
              <div className="ai-profile-avatar">
                EC
              </div>

              <div>
                <strong>Eşref Can</strong>
                <span>Premium Profil</span>
              </div>
            </div>

            <div className="ai-preference-list">

              <div>
                <span>Risk Yaklaşımı</span>
                <strong>Dengeli</strong>
              </div>

              <div>
                <span>İlgi Alanı</span>
                <strong>Kripto + Hisse</strong>
              </div>

              <div>
                <span>İşlem Tarzı</span>
                <strong>Orta Vadeli</strong>
              </div>

              <div>
                <span>AI Yardımı</span>
                <strong className="positive">
                  Aktif
                </strong>
              </div>

            </div>

            <button className="ai-profile-button">
              Profil Tercihlerimi Düzenle
            </button>

          </div>

          {/* ALERTS */}
          <div className="ai-card ai-alert-card">

            <div className="ai-card-header">

              <div>
                <h2>AI Uyarıları</h2>
                <span>LYRA'nın dikkat çektiği konular</span>
              </div>

              <span className="ai-alert-count">
                3
              </span>

            </div>

            <div className="ai-alert-list">

              {alerts.map((alert) => (
                <div
                  className={`ai-alert ${alert.type}`}
                  key={alert.title}
                >

                  <div className="ai-alert-icon">
                    {alert.type === "danger"
                      ? "!"
                      : alert.type === "warning"
                      ? "!"
                      : "✦"}
                  </div>

                  <div>
                    <strong>{alert.level}</strong>

                    <p>{alert.title}</p>

                    <small>{alert.detail}</small>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* PORTFOLIO INSIGHT */}
          <div className="ai-card ai-insight-card">

            <div className="ai-card-header">

              <div>
                <h2>Portföy İçgörüsü</h2>
                <span>Bugünün AI değerlendirmesi</span>
              </div>

            </div>

            <div className="ai-insight-score">
              <strong>82</strong>
              <span>/ 100</span>
            </div>

            <h3>
              Portföy dengeli durumda.
            </h3>

            <p>
              Kripto ve hisse dağılımı dengeli olsa da
              Futures tarafındaki kaldıraç toplam risk
              seviyesini yükseltiyor.
            </p>

            <div className="ai-insight-bar">
              <span />
            </div>

            <button className="ai-profile-button">
              Detaylı Portföy Analizi
            </button>

          </div>

          {/* RECENT AI */}
          <div className="ai-card ai-history-card">

            <div className="ai-card-header">

              <div>
                <h2>Son AI Analizleri</h2>
                <span>Yakın zamanda oluşturulan analizler</span>
              </div>

              <button className="ai-text-button">
                Tümü
              </button>

            </div>

            <div className="ai-history-list">

              <div>
                <span>BTC/USDT</span>
                <strong>Güçlü AL</strong>
                <small>12 dk önce</small>
              </div>

              <div>
                <span>NVDA</span>
                <strong>Momentum</strong>
                <small>28 dk önce</small>
              </div>

              <div>
                <span>BIST 100</span>
                <strong>Yükseliş</strong>
                <small>1 saat önce</small>
              </div>

            </div>

          </div>

        </aside>

      </section>

    </div>
  );
}