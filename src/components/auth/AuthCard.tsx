import Icon from "@/components/ui/icon";

type Mode = "login" | "register" | "verify";

interface AuthCardProps {
  mode: Mode;
  phone: string;
  name: string;
  username: string;
  code: string[];
  loading: boolean;
  onSetMode: (mode: Mode) => void;
  onSetPhone: (val: string) => void;
  onSetName: (val: string) => void;
  onSetUsername: (val: string) => void;
  onSend: () => void;
  onCodeChange: (val: string, idx: number) => void;
  onCodeKeyDown: (e: React.KeyboardEvent, idx: number) => void;
}

export default function AuthCard({
  mode,
  phone,
  name,
  username,
  code,
  loading,
  onSetMode,
  onSetPhone,
  onSetName,
  onSetUsername,
  onSend,
  onCodeChange,
  onCodeKeyDown,
}: AuthCardProps) {
  return (
    <div className="auth-card">
      {mode !== "verify" && (
        <div className="auth-tabs">
          <button
            className={`auth-tab-btn ${mode === "login" ? "auth-tab-active" : ""}`}
            onClick={() => onSetMode("login")}
          >
            Войти
          </button>
          <button
            className={`auth-tab-btn ${mode === "register" ? "auth-tab-active" : ""}`}
            onClick={() => onSetMode("register")}
          >
            Регистрация
          </button>
          <div className={`auth-tab-indicator ${mode === "register" ? "auth-tab-right" : ""}`} />
        </div>
      )}

      {mode === "login" && (
        <div className="auth-form">
          <div className="auth-field-label">Номер телефона</div>
          <div className="auth-phone-wrap">
            <div className="auth-flag">🇷🇺 +7</div>
            <input
              className="auth-input auth-input-phone"
              placeholder="999 123-45-67"
              value={phone}
              onChange={(e) => onSetPhone(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
              type="tel"
            />
          </div>
          <p className="auth-hint">
            <Icon name="Shield" size={13} />
            Мы отправим код подтверждения
          </p>
          <button className="auth-submit" onClick={onSend} disabled={loading || !phone}>
            {loading ? (
              <span className="auth-spinner" />
            ) : (
              <>
                Получить код
                <Icon name="ArrowRight" size={18} />
              </>
            )}
          </button>

          <div className="auth-divider"><span>или войти через</span></div>

          <div className="auth-socials">
            <button className="auth-social-btn">
              <span>📱</span> Apple
            </button>
            <button className="auth-social-btn">
              <span>🔍</span> Google
            </button>
          </div>
        </div>
      )}

      {mode === "register" && (
        <div className="auth-form">
          <div className="auth-field-label">Как тебя зовут?</div>
          <input
            className="auth-input"
            placeholder="Имя и фамилия"
            value={name}
            onChange={(e) => onSetName(e.target.value)}
          />

          <div className="auth-field-label" style={{ marginTop: 12 }}>Имя пользователя</div>
          <div className="auth-username-wrap">
            <span className="auth-at">@</span>
            <input
              className="auth-input auth-input-username"
              placeholder="username"
              value={username}
              onChange={(e) => onSetUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""))}
            />
          </div>

          <div className="auth-field-label" style={{ marginTop: 12 }}>Номер телефона</div>
          <div className="auth-phone-wrap">
            <div className="auth-flag">🇷🇺 +7</div>
            <input
              className="auth-input auth-input-phone"
              placeholder="999 123-45-67"
              value={phone}
              onChange={(e) => onSetPhone(e.target.value)}
              type="tel"
            />
          </div>

          <div className="auth-terms">
            Регистрируясь, ты принимаешь <span className="auth-link">Условия использования</span> и <span className="auth-link">Политику конфиденциальности</span>
          </div>

          <button
            className="auth-submit"
            onClick={onSend}
            disabled={loading || !phone || !name}
          >
            {loading ? <span className="auth-spinner" /> : <>Создать аккаунт <Icon name="ArrowRight" size={18} /></>}
          </button>
        </div>
      )}

      {mode === "verify" && (
        <div className="auth-form">
          <button className="auth-back" onClick={() => onSetMode("login")}>
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <div className="auth-verify-icon">📲</div>
          <h3 className="auth-verify-title">Введи код</h3>
          <p className="auth-verify-desc">
            Мы отправили 6-значный код на<br />
            <strong>+7 {phone}</strong>
          </p>
          <div className="auth-code-wrap">
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                className={`auth-code-input ${digit ? "auth-code-filled" : ""}`}
                maxLength={1}
                value={digit}
                onChange={(e) => onCodeChange(e.target.value, i)}
                onKeyDown={(e) => onCodeKeyDown(e, i)}
                type="tel"
              />
            ))}
          </div>
          {loading && (
            <div className="auth-verify-loading">
              <span className="auth-spinner auth-spinner-inline" />
              Проверяем код...
            </div>
          )}
          <p className="auth-resend">
            Не пришёл код? <button className="auth-link-btn">Отправить ещё раз</button>
          </p>
        </div>
      )}
    </div>
  );
}
