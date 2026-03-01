import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const contacts = [
  { id: 1, name: "Алиса Морозова", msg: "Ты видел новый дроп? 🔥", time: "сейчас", avatar: "А", online: true, unread: 3, color: "from-pink-500 to-rose-500" },
  { id: 2, name: "Команда VIBE", msg: "Встреча в 18:00, не забудь!", time: "2 мин", avatar: "К", online: true, unread: 7, color: "from-violet-500 to-purple-600" },
  { id: 3, name: "Дима Кравцов", msg: "Голосовое сообщение 0:42", time: "15 мин", avatar: "Д", online: false, unread: 0, color: "from-blue-500 to-cyan-500" },
  { id: 4, name: "Настя ☀️", msg: "Спасибо за стикеры!", time: "1 час", avatar: "Н", online: true, unread: 1, color: "from-amber-400 to-orange-500" },
  { id: 5, name: "Крипто-канал", msg: "BTC +12% за последние...", time: "2 час", avatar: "₿", online: false, unread: 24, color: "from-emerald-400 to-teal-500" },
  { id: 6, name: "Максим Лебедев", msg: "Отправил 500₽", time: "вчера", avatar: "М", online: false, unread: 0, color: "from-indigo-500 to-blue-600" },
];

const messages = [
  { id: 1, text: "Привет! Как прошёл выходной? 🌟", from: "them", time: "14:20" },
  { id: 2, text: "Отлично! Был на концерте, атмосфера просто космос 🚀", from: "me", time: "14:22" },
  { id: 3, text: "Ты видел новый дроп? Там такой дизайн — просто fire 🔥", from: "them", time: "14:23" },
  { id: 4, text: "Да, уже смотрел. Хочешь скину ссылку?", from: "me", time: "14:24" },
  { id: 5, text: "Конечно! И давай сегодня созвонимся в 20:00?", from: "them", time: "14:25" },
  { id: 6, text: "Договорились! Буду ждать 👍", from: "me", time: "14:26" },
];

const channels = [
  { id: 1, name: "VIBE Технологии", subs: "1.2M", icon: "Cpu", color: "from-violet-600 to-purple-700" },
  { id: 2, name: "Крипто & NFT", subs: "890K", icon: "TrendingUp", color: "from-emerald-500 to-teal-600" },
  { id: 3, name: "Дизайн 2024", subs: "445K", icon: "Palette", color: "from-pink-500 to-rose-600" },
  { id: 4, name: "Музыка & Дропы", subs: "2.1M", icon: "Music", color: "from-amber-500 to-orange-600" },
];

type Tab = "chats" | "channels" | "calls" | "bots" | "wallet";

export default function Index() {
  const [activeTab, setActiveTab] = useState<Tab>("chats");
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [inputVal, setInputVal] = useState("");
  const [msgs, setMsgs] = useState(messages);

  const navigate = useNavigate();
  const activeContact = contacts.find((c) => c.id === activeChat);

  const sendMessage = () => {
    if (!inputVal.trim()) return;
    setMsgs((prev) => [...prev, { id: prev.length + 1, text: inputVal, from: "me", time: "сейчас" }]);
    setInputVal("");
  };

  const tabs: { id: Tab; icon: string; label: string }[] = [
    { id: "chats", icon: "MessageCircle", label: "Чаты" },
    { id: "channels", icon: "Rss", label: "Каналы" },
    { id: "calls", icon: "Phone", label: "Звонки" },
    { id: "bots", icon: "Bot", label: "Боты" },
    { id: "wallet", icon: "Wallet", label: "Кошелёк" },
  ];

  return (
    <div className="vibe-app">
      {/* Animated background */}
      <div className="vibe-bg">
        <div className="vibe-orb vibe-orb-1" />
        <div className="vibe-orb vibe-orb-2" />
        <div className="vibe-orb vibe-orb-3" />
      </div>

      {/* Main layout */}
      <div className="vibe-layout">
        {/* Sidebar */}
        <aside className="vibe-sidebar">
          {/* Logo */}
          <div className="vibe-logo">
            <div className="vibe-logo-icon">
              <span>V</span>
            </div>
            <span className="vibe-logo-text">VIBE</span>
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

          {/* Search */}
          <div className="vibe-search">
            <Icon name="Search" size={16} />
            <input placeholder="Поиск..." className="vibe-search-input" />
          </div>

          {/* Tabs */}
          <div className="vibe-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`vibe-tab ${activeTab === tab.id ? "vibe-tab-active" : ""}`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content by tab */}
          {activeTab === "chats" && (
            <div className="vibe-contact-list">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveChat(c.id)}
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

        {/* Chat area */}
        <main className="vibe-chat">
          {activeChat && activeContact ? (
            <>
              {/* Chat header */}
              <div className="vibe-chat-header">
                <div className={`vibe-avatar-sm bg-gradient-to-br ${activeContact.color}`}>
                  {activeContact.avatar}
                </div>
                <div className="vibe-chat-header-info">
                  <span className="vibe-chat-name">{activeContact.name}</span>
                  <span className="vibe-chat-status">
                    {activeContact.online ? "🟢 В сети" : "был(а) недавно"}
                  </span>
                </div>
                <div className="vibe-chat-actions">
                  <button className="vibe-icon-btn" title="Видеозвонок">
                    <Icon name="Video" size={20} />
                  </button>
                  <button className="vibe-icon-btn" title="Голосовой звонок">
                    <Icon name="Phone" size={20} />
                  </button>
                  <button className="vibe-icon-btn" title="Поиск">
                    <Icon name="Search" size={20} />
                  </button>
                  <button className="vibe-icon-btn" title="Настройки">
                    <Icon name="MoreVertical" size={20} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="vibe-messages">
                <div className="vibe-date-divider">Сегодня</div>
                {msgs.map((m) => (
                  <div key={m.id} className={`vibe-msg-row ${m.from === "me" ? "vibe-msg-row-me" : ""}`}>
                    {m.from === "them" && (
                      <div className={`vibe-msg-avatar bg-gradient-to-br ${activeContact.color}`}>
                        {activeContact.avatar}
                      </div>
                    )}
                    <div className={`vibe-msg-bubble ${m.from === "me" ? "vibe-msg-bubble-me" : "vibe-msg-bubble-them"}`}>
                      <span className="vibe-msg-text">{m.text}</span>
                      <span className="vibe-msg-time">{m.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="vibe-input-bar">
                <button className="vibe-icon-btn">
                  <Icon name="Smile" size={20} />
                </button>
                <button className="vibe-icon-btn">
                  <Icon name="Paperclip" size={20} />
                </button>
                <input
                  className="vibe-input"
                  placeholder="Напиши сообщение..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button className="vibe-icon-btn">
                  <Icon name="Mic" size={20} />
                </button>
                <button className="vibe-send-btn" onClick={sendMessage}>
                  <Icon name="Send" size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="vibe-welcome">
              <div className="vibe-welcome-icon">💬</div>
              <h2>Выбери чат, чтобы начать</h2>
              <p>Здесь будет история переписки</p>
            </div>
          )}
        </main>

        {/* Right panel - profile */}
        {activeContact && (
          <aside className="vibe-profile">
            <div className={`vibe-profile-avatar bg-gradient-to-br ${activeContact.color}`}>
              <span>{activeContact.avatar}</span>
            </div>
            <h3 className="vibe-profile-name">{activeContact.name}</h3>
            <div className="vibe-profile-status">
              {activeContact.online ? "В сети" : "Был(а) недавно"}
            </div>
            <div className="vibe-profile-actions">
              <button className="vibe-profile-btn">
                <Icon name="Phone" size={20} />
                Звонок
              </button>
              <button className="vibe-profile-btn">
                <Icon name="Video" size={20} />
                Видео
              </button>
              <button className="vibe-profile-btn">
                <Icon name="Send" size={20} />
                Чат
              </button>
            </div>
            <div className="vibe-profile-section">
              <div className="vibe-profile-section-title">Медиафайлы</div>
              <div className="vibe-media-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`vibe-media-item bg-gradient-to-br ${contacts[i % contacts.length].color}`} />
                ))}
              </div>
            </div>
            <div className="vibe-profile-section">
              <div className="vibe-profile-section-title">Общие группы</div>
              <div className="vibe-profile-stat">3 группы</div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}