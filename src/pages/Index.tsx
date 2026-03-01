import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMain from "@/components/chat/ChatMain";
import ChatProfile from "@/components/chat/ChatProfile";

type Tab = "chats" | "channels" | "calls" | "bots" | "wallet";

const contacts = [
  { id: 1, name: "Алиса Морозова", msg: "Ты видел новый дроп? 🔥", time: "сейчас", avatar: "А", online: true, unread: 3, color: "from-pink-500 to-rose-500" },
  { id: 2, name: "Команда WorChat", msg: "Встреча в 18:00, не забудь!", time: "2 мин", avatar: "К", online: true, unread: 7, color: "from-violet-500 to-purple-600" },
  { id: 3, name: "Дима Кравцов", msg: "Голосовое сообщение 0:42", time: "15 мин", avatar: "Д", online: false, unread: 0, color: "from-blue-500 to-cyan-500" },
  { id: 4, name: "Настя ☀️", msg: "Спасибо за стикеры!", time: "1 час", avatar: "Н", online: true, unread: 1, color: "from-amber-400 to-orange-500" },
  { id: 5, name: "Крипто-канал", msg: "BTC +12% за последние...", time: "2 час", avatar: "₿", online: false, unread: 24, color: "from-emerald-400 to-teal-500" },
  { id: 6, name: "Максим Лебедев", msg: "Отправил 500₽", time: "вчера", avatar: "М", online: false, unread: 0, color: "from-indigo-500 to-blue-600" },
];

const channels = [
  { id: 1, name: "WorChat Технологии", subs: "1.2M", icon: "Cpu", color: "from-violet-600 to-purple-700" },
  { id: 2, name: "Крипто & NFT", subs: "890K", icon: "TrendingUp", color: "from-emerald-500 to-teal-600" },
  { id: 3, name: "Дизайн 2024", subs: "445K", icon: "Palette", color: "from-pink-500 to-rose-600" },
  { id: 4, name: "Музыка & Дропы", subs: "2.1M", icon: "Music", color: "from-amber-500 to-orange-600" },
];

const initialMessages = [
  { id: 1, text: "Привет! Как прошёл выходной? 🌟", from: "them", time: "14:20" },
  { id: 2, text: "Отлично! Был на концерте, атмосфера просто космос 🚀", from: "me", time: "14:22" },
  { id: 3, text: "Ты видел новый дроп? Там такой дизайн — просто fire 🔥", from: "them", time: "14:23" },
  { id: 4, text: "Да, уже смотрел. Хочешь скину ссылку?", from: "me", time: "14:24" },
  { id: 5, text: "Конечно! И давай сегодня созвонимся в 20:00?", from: "them", time: "14:25" },
  { id: 6, text: "Договорились! Буду ждать 👍", from: "me", time: "14:26" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState<Tab>("chats");
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [inputVal, setInputVal] = useState("");
  const [msgs, setMsgs] = useState(initialMessages);

  const activeContact = contacts.find((c) => c.id === activeChat);

  const sendMessage = () => {
    if (!inputVal.trim()) return;
    setMsgs((prev) => [...prev, { id: prev.length + 1, text: inputVal, from: "me", time: "сейчас" }]);
    setInputVal("");
  };

  return (
    <div className="vibe-app">
      <div className="vibe-bg">
        <div className="vibe-orb vibe-orb-1" />
        <div className="vibe-orb vibe-orb-2" />
        <div className="vibe-orb vibe-orb-3" />
      </div>

      <div className="vibe-layout">
        <ChatSidebar
          activeTab={activeTab}
          activeChat={activeChat}
          contacts={contacts}
          channels={channels}
          onSetTab={setActiveTab}
          onSetChat={setActiveChat}
        />

        <ChatMain
          activeContact={activeContact}
          msgs={msgs}
          inputVal={inputVal}
          onSetInputVal={setInputVal}
          onSend={sendMessage}
        />

        {activeContact && (
          <ChatProfile contact={activeContact} contacts={contacts} />
        )}
      </div>
    </div>
  );
}
