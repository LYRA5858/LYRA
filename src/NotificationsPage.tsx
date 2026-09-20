import { useState } from "react";
import "./notifications-page.css";

type Notification = {
  id: number;
  type: "opportunity" | "risk" | "market" | "system";
  title: string;
  description: string;
  time: string;
  unread: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "opportunity",
    title: "BTC için güçlü fırsat tespit edildi.",
    description:
      "LYRA, BTC/USDT üzerinde 9.2 skorla pozitif momentum tespit etti.",
    time: "12 dk önce",
    unread: true,
  },
  {
    id: 2,
    type: "risk",
    title: "Futures risk seviyesi yükseldi.",
    description:
      "Kaldıraçlı pozisyonların toplam portföy riskindeki payı arttı.",
    time: "26 dk önce",
    unread: true,
  },
  {
    id: 3,
    type: "market",
    title: "NASDAQ teknoloji hisselerinde hareketlilik.",
    description:
      "Takip listendeki teknoloji hisselerinde hacim artışı gözlendi.",
    time: "41 dk önce",
    unread: true,
  },
  {
    id: 4,
    type: "opportunity",
    title: "NVDA momentum sinyali güçlendi.",
    description:
      "LYRA skoru 8.9 seviyesine yükseldi.",
    time: "58 dk önce",
    unread: false,
  },
  {
    id: 5,
    type: "market",
    title: "BIST 100 10.200 seviyesinin üzerinde.",
    description:
      "Endeks gün içerisinde pozitif bölgede kalmaya devam ediyor.",
    time: "1 saat önce",
    unread: false,
  },
  {
    id: 6,
    type: "system",
    title: "LYRA AI günlük taramayı tamamladı.",
    description:
      "2.481 varlık analiz edildi ve 17 fırsat tespit edildi.",
    time: "2 saat önce",
    unread: false,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const [filter, setFilter] = useState("Tümü");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = notifications.filter(
    (notification) => {
      if (filter === "Okunmamış") {
        return notification.unread;
      }

      if (filter === "Fırsatlar") {
        return notification.type === "opportunity";
      }

      if (filter === "Risk") {
        return notification.type === "risk";
      }

      if (filter === "Piyasa") {
        return notification.type === "market";
      }

      return true;
    }
  );

  const markAllRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  return (
    <div className="notifications-page">

      <div className="notifications-hero">
        <div>
          <div className="notifications-eyebrow">
            LYRA / BİLDİRİMLER
          </div>

          <h1>Bildirimler</h1>

          <p>
            Piyasalar, fırsatlar, riskler ve LYRA AI
            tarafından oluşturulan önemli uyarıları burada takip et.
          </p>
        </div>

        <div className="notification-count">
          <strong>{unreadCount}</strong>
          <span>okunmamış</span>
        </div>
      </div>

      <div className="notifications-toolbar">

        <div className="notification-filters">

          {[
            "Tümü",
            "Okunmamış",
            "Fırsatlar",
            "Risk",
            "Piyasa",
          ].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <button
          className="mark-all-button"
          onClick={markAllRead}
        >
          Tümünü okundu işaretle
        </button>

      </div>

      <div className="notifications-layout">

        <main className="notifications-list-card">

          <div className="notifications-list-header">
            <div>
              <h2>Son Bildirimler</h2>
              <span>
                LYRA hesabınla ilgili son gelişmeler
              </span>
            </div>
          </div>

          <div className="notifications-list">

            {filteredNotifications.map((notification) => (
              <button
                key={notification.id}
                className={`notification-item ${
                  notification.unread ? "unread" : ""
                }`}
                onClick={() => markRead(notification.id)}
              >

                <div
                  className={`notification-icon ${notification.type}`}
                >
                  {notification.type === "opportunity"
                    ? "✦"
                    : notification.type === "risk"
                    ? "!"
                    : notification.type === "market"
                    ? "◈"
                    : "Λ"}
                </div>

                <div className="notification-content">

                  <div className="notification-title-row">

                    <strong>
                      {notification.title}
                    </strong>

                    {notification.unread && (
                      <span className="unread-dot" />
                    )}

                  </div>

                  <p>
                    {notification.description}
                  </p>

                  <small>
                    {notification.time}
                  </small>

                </div>

                <span className="notification-arrow">
                  →
                </span>

              </button>
            ))}

            {filteredNotifications.length === 0 && (
              <div className="notifications-empty">
                <div>✓</div>
                <strong>Bildirim yok</strong>
                <span>
                  Bu filtreye ait yeni bir bildirim bulunmuyor.
                </span>
              </div>
            )}

          </div>

        </main>

        <aside className="notifications-side">

          <div className="notification-side-card">

            <div className="notification-side-header">
              <div>
                <h2>Bildirim Tercihleri</h2>
                <span>
                  Sana hangi uyarıların gösterileceğini seç
                </span>
              </div>
            </div>

            <Preference
              title="LYRA AI Fırsatları"
              description="Yeni fırsat tespit edildiğinde bildir."
              enabled
            />

            <Preference
              title="Risk Uyarıları"
              description="Portföy veya pozisyon riski arttığında bildir."
              enabled
            />

            <Preference
              title="Piyasa Hareketleri"
              description="Önemli fiyat hareketlerini bildir."
              enabled
            />

            <Preference
              title="Sistem Bildirimleri"
              description="Hesap ve güvenlik bildirimlerini göster."
              enabled
            />

          </div>

          <div className="notification-side-card notification-summary">

            <div className="notification-side-header">
              <div>
                <h2>Bildirim Özeti</h2>
                <span>Bugünkü dağılım</span>
              </div>
            </div>

            <SummaryRow
              label="Fırsatlar"
              value="7"
              type="opportunity"
            />

            <SummaryRow
              label="Risk"
              value="3"
              type="risk"
            />

            <SummaryRow
              label="Piyasa"
              value="11"
              type="market"
            />

            <SummaryRow
              label="Sistem"
              value="4"
              type="system"
            />

          </div>

        </aside>

      </div>

    </div>
  );
}

function Preference({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="notification-preference">

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <span
        className={`notification-toggle ${
          enabled ? "on" : ""
        }`}
      >
        <i />
      </span>

    </div>
  );
}

function SummaryRow({
  label,
  value,
  type,
}: {
  label: string;
  value: string;
  type: string;
}) {
  return (
    <div className="notification-summary-row">

      <div>
        <span className={`summary-dot ${type}`} />
        <span>{label}</span>
      </div>

      <strong>{value}</strong>

    </div>
  );
}