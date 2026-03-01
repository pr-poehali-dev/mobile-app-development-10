import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  from: string;
  time: string;
}

interface Contact {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  color: string;
}

interface ChatMainProps {
  activeContact: Contact | undefined;
  msgs: Message[];
  inputVal: string;
  onSetInputVal: (val: string) => void;
  onSend: () => void;
}

export default function ChatMain({
  activeContact,
  msgs,
  inputVal,
  onSetInputVal,
  onSend,
}: ChatMainProps) {
  return (
    <main className="vibe-chat">
      {activeContact ? (
        <>
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
              onChange={(e) => onSetInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
            />
            <button className="vibe-icon-btn">
              <Icon name="Mic" size={20} />
            </button>
            <button className="vibe-send-btn" onClick={onSend}>
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
  );
}
