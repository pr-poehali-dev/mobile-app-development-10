import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Tab = "chats" | "channels" | "calls" | "bots" | "wallet";

interface Contact {
  id: number;
  name: string;
  msg: string;
  time: string;
  avatar: string;
  online: boolean;
  unread: number;
  color: string;
}

interface Channel {
  id: number;
  name: string;
  subs: string;
  icon: string;
  color: string;
}

interface ChatSidebarProps {
  activeTab: Tab;
  activeChat: number | null;
  contacts: Contact[];
  channels: Channel[];
  onSetTab: (tab: Tab) => void;
  onSetChat: (id: number) => void;
}

const tabs: { id: Tab; icon: string; label: string }[] = [
  { id: "chats", icon: "MessageCircle", label: "Чаты" },
  { id: "channels", icon: "Rss", label: "Каналы" },
  { id: "calls", icon: "Phone", label: "Звонки" },
  { id: "bots", icon: "Bot", label: "Боты" },
  { id: "wallet", icon: "Wallet", label: "Кошелёк" },
];

export default function ChatSidebar({
  activeTab,
  activeChat,
  contacts,
  channels,
  onSetTab,
  onSetChat,
}: ChatSidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="vibe-sidebar">
      <div className="vibe-logo">
        <div className="vibe-logo-icon">
          <span>W</span>
        </div>
        <span className="vibe-logo-text">WorChat</span>
        <div className="vibe-logo-badge">BETA</div>
        <button
          onClick={() => navigate("/login")}
          className="vibe-icon-btn"
          title="Выйти"
          style={{ marginLeft: "auto" }}
        >
          <Icon name="LogOut" size={16} />
        </button>
      </div>

      <div className="vibe-search">
        <Icon name="Search" size={16} />
        <input placeholder="Поиск..." className="vibe-search-input" />
      </div>

      <div className="vibe-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSetTab(tab.id)}
            className={`vibe-tab ${activeTab === tab.id ? "vibe-tab-active" : ""}`}
          >
            <Icon name={tab.icon} size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === "chats" && (
        <div className="vibe-contact-list">
          {contacts.map((c) => (
            <div
              key={c.id}
              onClick={() => onSetChat(c.id)}
              className={`vibe-contact ${activeChat === c.id ? "vibe-contact-active" : ""}`}
            >
              <div className={`vibe-avatar bg-gradient-to-br ${c.color}`}>
                <span>{c.avatar}</span>
                {c.online && <div className="vibe-online-dot" />}
              </div>
              <div className="vibe-contact-info">
                <div className="vibe-contact-top">
                  <span className="vibe-contact-name">{c.name}</span>
                  <span className="vibe-contact-time">{c.time}</span>
                </div>
                <div className="vibe-contact-bottom">
                  <span className="vibe-contact-msg">{c.msg}</span>
                  {c.unread > 0 && <span className="vibe-unread">{c.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "channels" && (
        <div className="vibe-contact-list">
          {channels.map((ch) => (
            <div key={ch.id} className="vibe-contact">
              <div className={`vibe-avatar bg-gradient-to-br ${ch.color}`}>
                <Icon name={ch.icon} size={18} />
              </div>
              <div className="vibe-contact-info">
                <div className="vibe-contact-top">
                  <span className="vibe-contact-name">{ch.name}</span>
                </div>
                <div className="vibe-contact-bottom">
                  <span className="vibe-contact-msg">{ch.subs} подписчиков</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "calls" && (
        <div className="vibe-empty-tab">
          <div className="vibe-empty-icon">
            <Icon name="Phone" size={40} />
          </div>
          <p>История звонков пуста</p>
          <button className="vibe-call-btn">
            <Icon name="PhonePlus" size={16} />
            Новый звонок
          </button>
        </div>
      )}

      {activeTab === "bots" && (
        <div className="vibe-empty-tab">
          <div className="vibe-empty-icon">
            <Icon name="Bot" size={40} />
          </div>
          <p>Добавь первого бота</p>
          <button className="vibe-call-btn">
            <Icon name="Plus" size={16} />
            Найти бота
          </button>
        </div>
      )}

      {activeTab === "wallet" && (
        <div className="vibe-wallet">
          <div className="vibe-wallet-card">
            <div className="vibe-wallet-label">Баланс</div>
            <div className="vibe-wallet-amount">₽ 12,450.00</div>
            <div className="vibe-wallet-actions">
              <button className="vibe-wallet-btn">
                <Icon name="ArrowUpRight" size={16} />
                Отправить
              </button>
              <button className="vibe-wallet-btn">
                <Icon name="ArrowDownLeft" size={16} />
                Пополнить
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
