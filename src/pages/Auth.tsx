import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthBackground from "@/components/auth/AuthBackground";
import AuthLogo from "@/components/auth/AuthLogo";
import AuthCard from "@/components/auth/AuthCard";

type Mode = "login" | "register" | "verify";

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMode("verify");
    }, 1200);
  };

  const handleCodeChange = (val: string, idx: number) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[idx] = val;
    setCode(next);
    if (val && idx < 5) {
      const el = document.getElementById(`code-${idx + 1}`);
      el?.focus();
    }
    if (next.every((d) => d !== "") && idx === 5) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    }
  };

  const handleCodeKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      document.getElementById(`code-${idx - 1}`)?.focus();
    }
  };

  return (
    <div className="auth-wrap">
      <AuthBackground />

      <div className="auth-container">
        <AuthLogo />

        <AuthCard
          mode={mode}
          phone={phone}
          name={name}
          username={username}
          code={code}
          loading={loading}
          onSetMode={setMode}
          onSetPhone={setPhone}
          onSetName={setName}
          onSetUsername={setUsername}
          onSend={handleSend}
          onCodeChange={handleCodeChange}
          onCodeKeyDown={handleCodeKeyDown}
        />

        <p className="auth-footer">WorChat © 2024 · Все сообщения зашифрованы 🔒</p>
      </div>
    </div>
  );
}
