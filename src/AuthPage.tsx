import { useState } from "react";
import "./auth-page.css";

type AuthPageProps = {
  onAuthenticated: () => void;
};

type AuthMode = "login" | "register";
type AuthStep = "credentials" | "profile" | "verify";

export default function AuthPage({
  onAuthenticated,
}: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [step, setStep] = useState<AuthStep>("credentials");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [horizon, setHorizon] = useState("Orta vadeli");
  const [risk, setRisk] = useState("Dengeli");
  const [markets, setMarkets] = useState<string[]>([
    "Kripto",
    "BIST",
  ]);

  const [code, setCode] = useState("");

  const toggleMarket = (market: string) => {
    setMarkets((current) =>
      current.includes(market)
        ? current.filter((item) => item !== market)
        : [...current, market]
    );
  };

  const handleCredentials = () => {
    if (!email || !password) {
      return;
    }

    if (mode === "register") {
      setStep("profile");
    } else {
      setStep("verify");
    }
  };

  const handleProfile = () => {
    setStep("verify");
  };

  const handleVerify = () => {
    if (code.length < 6) {
      return;
    }

    localStorage.setItem("lyra_demo_session", "1");

    onAuthenticated();
  };

  const switchMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setStep("credentials");
    setCode("");
  };

  return (
    <div className="auth-page">

      {/* BACKGROUND */}
      <div className="auth-glow auth-glow-one" />
      <div className="auth-glow auth-glow-two" />

      {/* BRAND */}
      <header className="auth-header">

        <div className="auth-brand">
          <div className="auth-brand-logo">
            Λ
          </div>

          <div>
            <strong>LYRA</strong>
            <span>Kişisel Finansal Zekâ</span>
          </div>
        </div>

        <div className="auth-header-status">
          <span />
          Güvenli bağlantı
        </div>

      </header>

      {/* CONTENT */}
      <main className="auth-content">

        <section className="auth-intro">

          <div className="auth-intro-badge">
            LYRA FINANCIAL INTELLIGENCE
          </div>

          <h1>
            Finansal kararlarını
            <br />
            <span>LYRA ile daha bilinçli yönet.</span>
          </h1>

          <p>
            Piyasaları takip et, fırsatları keşfet,
            risklerini analiz et ve sana özel finansal
            içgörüler oluştur.
          </p>

          <div className="auth-feature-list">

            <div>
              <span className="feature-icon">✦</span>
              <div>
                <strong>LYRA AI</strong>
                <small>
                  Piyasaları ve portföyünü sürekli analiz eder.
                </small>
              </div>
            </div>

            <div>
              <span className="feature-icon">◈</span>
              <div>
                <strong>Çoklu Piyasa</strong>
                <small>
                  Kripto, BIST, ABD ve Futures tek merkezde.
                </small>
              </div>
            </div>

            <div>
              <span className="feature-icon">⌁</span>
              <div>
                <strong>Güvenlik</strong>
                <small>
                  Çok katmanlı hesap koruması ve 2FA.
                </small>
              </div>
            </div>

          </div>

        </section>

        <section className="auth-card">

          {/* CARD BRAND */}
          <div className="auth-card-brand">
            <div className="auth-card-logo">
              Λ
            </div>

            <div>
              <strong>LYRA</strong>
              <span>
                {step === "credentials"
                  ? mode === "login"
                    ? "Hesabına giriş yap"
                    : "Yeni hesabını oluştur"
                  : step === "profile"
                  ? "LYRA seni tanısın"
                  : "Hesabını doğrula"}
              </span>
            </div>
          </div>

          {/* MODE TABS */}
          {step === "credentials" && (
            <div className="auth-mode-tabs">

              <button
                className={
                  mode === "login" ? "active" : ""
                }
                onClick={() => switchMode("login")}
              >
                Giriş Yap
              </button>

              <button
                className={
                  mode === "register" ? "active" : ""
                }
                onClick={() => switchMode("register")}
              >
                Kayıt Ol
              </button>

            </div>
          )}

          {/* STEP INDICATOR */}
          <div className="auth-steps">

            <div
              className={
                `auth-step ${
                  step === "credentials"
                    ? "active"
                    : "completed"
                }`
              }
            >
              <span>1</span>
              <small>Hesap</small>
            </div>

            {mode === "register" && (
              <div
                className={
                  `auth-step ${
                    step === "profile"
                      ? "active"
                      : step === "verify"
                      ? "completed"
                      : ""
                  }`
                }
              >
                <span>2</span>
                <small>Sen</small>
              </div>
            )}

            <div
              className={
                `auth-step ${
                  step === "verify"
                    ? "active"
                    : ""
                }`
              }
            >
              <span>
                {mode === "register" ? "3" : "2"}
              </span>
              <small>2FA</small>
            </div>

          </div>

          {/* CREDENTIALS */}
          {step === "credentials" && (
            <div className="auth-form">

              {mode === "register" && (
                <label>
                  Ad Soyad

                  <div className="auth-input">
                    <span>◉</span>

                    <input
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Adını ve soyadını gir"
                    />
                  </div>
                </label>
              )}

              <label>
                E-posta

                <div className="auth-input">
                  <span>@</span>

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="ornek@email.com"
                  />
                </div>
              </label>

              <label>
                Şifre

                <div className="auth-input">
                  <span>⌁</span>

                  <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="••••••••••••"
                  />
                </div>
              </label>

              {mode === "login" && (
                <div className="auth-options">

                  <label className="remember-option">
                    <input type="checkbox" />
                    <span />
                    Beni hatırla
                  </label>

                  <button>
                    Şifremi unuttum
                  </button>

                </div>
              )}

              <button
                className="auth-primary-button"
                onClick={handleCredentials}
              >
                {mode === "login"
                  ? "Güvenli Giriş Yap"
                  : "Hesap Oluştur"}
                <span>→</span>
              </button>

              <div className="auth-divider">
                <span>veya</span>
              </div>

              <button
                className="google-button"
                onClick={() => setStep("verify")}
              >
                <strong>G</strong>
                Google ile devam et
              </button>

              <p className="auth-disclaimer">
                Devam ederek LYRA kullanım koşullarını ve
                gizlilik politikasını kabul etmiş olursun.
              </p>

            </div>
          )}

          {/* PROFILE */}
          {step === "profile" && (
            <div className="auth-profile-form">

              <div className="profile-welcome">
                <div className="profile-orb">
                  Λ
                </div>

                <h2>
                  Seni biraz tanıyalım.
                </h2>

                <p>
                  Bu cevaplar LYRA'nın sana özel
                  analizler oluşturmasına yardımcı olacak.
                </p>
              </div>

              <div className="question-block">

                <span>
                  Yatırım ufkun nedir?
                </span>

                <div className="choice-grid">

                  {[
                    "Kısa vadeli",
                    "Orta vadeli",
                    "Uzun vadeli",
                  ].map((item) => (
                    <button
                      key={item}
                      className={
                        horizon === item
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setHorizon(item)
                      }
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              <div className="question-block">

                <span>
                  Risk yaklaşımın nasıl?
                </span>

                <div className="choice-grid">

                  {[
                    "Temkinli",
                    "Dengeli",
                    "Agresif",
                  ].map((item) => (
                    <button
                      key={item}
                      className={
                        risk === item
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setRisk(item)
                      }
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              <div className="question-block">

                <span>
                  Hangi piyasaları takip etmek istiyorsun?
                </span>

                <div className="choice-grid">

                  {[
                    "Kripto",
                    "BIST",
                    "ABD Hisseleri",
                    "Futures",
                  ].map((item) => (
                    <button
                      key={item}
                      className={
                        markets.includes(item)
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        toggleMarket(item)
                      }
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              <button
                className="auth-primary-button"
                onClick={handleProfile}
              >
                LYRA Profilimi Oluştur
                <span>→</span>
              </button>

            </div>
          )}

          {/* 2FA */}
          {step === "verify" && (
            <div className="auth-verify">

              <div className="verify-icon">
                ◈
              </div>

              <h2>
                İki aşamalı doğrulama
              </h2>

              <p>
                Hesabını korumak için doğrulama kodunu
                girmen gerekiyor.
              </p>

              <div className="verify-destination">
                <span>
                  Doğrulama hedefi
                </span>

                <strong>
                  {email || "Google hesabın"}
                </strong>
              </div>

              <label>
                6 haneli doğrulama kodu

                <input
                  className="verify-code-input"
                  value={code}
                  onChange={(event) =>
                    setCode(
                      event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 6)
                    )
                  }
                  placeholder="000000"
                  inputMode="numeric"
                />
              </label>

              <div className="demo-code">
                Demo için:
                <strong>123456</strong>
              </div>

              <button
                className="auth-primary-button"
                onClick={handleVerify}
              >
                Doğrula ve LYRA'ya Gir
                <span>→</span>
              </button>

              <button
                className="back-auth-button"
                onClick={() =>
                  setStep(
                    mode === "register"
                      ? "profile"
                      : "credentials"
                  )
                }
              >
                ← Geri dön
              </button>

            </div>
          )}

        </section>

      </main>

      {/* FOOTER */}
      <footer className="auth-footer">
        <span>© 2026 LYRA</span>
        <span>Güvenli Finansal Zekâ</span>
      </footer>

    </div>
  );
}