import Icon from "@/components/ui/icon";

interface Contact {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  color: string;
}

interface ChatProfileProps {
  contact: Contact;
  contacts: Contact[];
}

export default function ChatProfile({ contact, contacts }: ChatProfileProps) {
  return (
    <aside className="vibe-profile">
      <div className={`vibe-profile-avatar bg-gradient-to-br ${contact.color}`}>
        <span>{contact.avatar}</span>
      </div>
      <h3 className="vibe-profile-name">{contact.name}</h3>
      <div className="vibe-profile-status">
        {contact.online ? "В сети" : "Был(а) недавно"}
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
  );
}
