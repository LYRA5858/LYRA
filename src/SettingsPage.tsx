import { useState } from "react";
import "./settings-page.css";

type SettingsPageProps = {
  onLogout: () => void;
};

export default function SettingsPage({
  onLogout,
}: SettingsPageProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [aiAlerts, setAiAlerts] = useState(true);
  const [marketAlerts, setMarketAlerts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="settings-page">

      <div className="settings-hero">
        <div>
          <div className="settings-eyebrow">
            LYRA / AYARLAR
          </div>

          <h1>Ayarlar</h1>

          <p>
            Hesabını, güvenlik tercihlerini ve LYRA deneyimini
            buradan yönet.
          </p>
        </div>
      </div>

      <div className="settings-layout">

        <main className="settings-main">

          <section className="settings-card">

            <div className="settings-card-header">
              <div>
                <h2>Profil</h2>
                <span>Hesap bilgilerin</span>
              </div>

              <span className="settings-badge">
                Premium
              </span>
            </div>

            <div className="profile-settings">

              <div className="profile-avatar">
                EC
              </div>

              <div className="profile-info">
                <strong>Eşref Can</strong>
                <span>demo@lyra.app</span>
              </div>

              <button>
                Profili Düzenle
              </button>

            </div>

          </section>

          <section className="settings-card">

            <div className="settings-card-header">
              <div>
                <h2>LYRA Tercihleri</h2>
                <span>
                  Sana gösterilecek deneyimi özelleştir
                </span>
              </div>
            </div>

            <SettingToggle
              title="AI Uyarıları"
              description="LYRA'nın önemli analiz ve risk uyarılarını göster."
              enabled={aiAlerts}
              onChange={() => setAiAlerts(!aiAlerts)}
            />

            <SettingToggle
              title="Piyasa Uyarıları"
              description="Takip ettiğin varlıklardaki önemli hareketleri bildir."
              enabled={marketAlerts}
              onChange={() => setMarketAlerts(!marketAlerts)}
            />

            <SettingToggle
              title="Karanlık Tema"
              description="LYRA'nın koyu arayüzünü kullan."
              enabled={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

          </section>

          <section className="settings-card">

            <div className="settings-card-header">
              <div>
                <h2>Güvenlik</h2>
                <span>Hesabını koru</span>
              </div>
            </div>

            <SettingToggle
              title="İki Aşamalı Doğrulama"
              description="Hesabına girişlerde ek doğrulama iste."
              enabled={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
            />

            <div className="security-row">

              <div>
                <strong>Şifre</strong>
                <span>Son değiştirme: Yakın zamanda</span>
              </div>

              <button>
                Şifreyi Değiştir
              </button>

            </div>

            <div className="security-row">

              <div>
                <strong>Google hesabı</strong>
                <span>Bağlı değil</span>
              </div>

              <button>
                Google'ı Bağla
              </button>

            </div>

          </section>

        </main>

        <aside className="settings-side">

          <div className="settings-card account-status">

            <div className="settings-card-header">
              <div>
                <h2>Hesap Durumu</h2>
                <span>LYRA hesabın</span>
              </div>
            </div>

            <div className="status-item">
              <span>Hesap</span>
              <strong className="positive">
                Aktif
              </strong>
            </div>

            <div className="status-item">
              <span>2FA</span>
              <strong className="positive">
                Açık
              </strong>
            </div>

            <div className="status-item">
              <span>AI Profili</span>
              <strong className="positive">
                Hazır
              </strong>
            </div>

            <div className="status-item">
              <span>Piyasa Bağlantısı</span>
              <strong className="positive">
                Aktif
              </strong>
            </div>

          </div>

          <div className="settings-card danger-card">

            <h2>Oturum</h2>

            <p>
              Bu cihazdaki LYRA oturumunu kapat.
            </p>

            <button
              className="logout-button"
              onClick={onLogout}
            >
              Güvenli Çıkış Yap
            </button>

          </div>

        </aside>

      </div>
    </div>
  );
}

function SettingToggle({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="setting-row">

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <button
        className={`toggle ${enabled ? "on" : ""}`}
        onClick={onChange}
        aria-label={title}
      >
        <i />
      </button>

    </div>
  );
}