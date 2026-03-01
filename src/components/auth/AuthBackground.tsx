export default function AuthBackground() {
  return (
    <>
      <div className="vibe-bg">
        <div className="vibe-orb vibe-orb-1" />
        <div className="vibe-orb vibe-orb-2" />
        <div className="vibe-orb vibe-orb-3" />
      </div>

      <div className="auth-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="auth-particle" style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      <style>{`
        .auth-wrap {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--vibe-bg);
        }

        .auth-particles {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .auth-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          opacity: 0.4;
          animation: particleDrift calc(8s + var(--i) * 1.2s) ease-in-out infinite;
          left: calc(5% + var(--i) * 8%);
          top: calc(10% + var(--i) * 7%);
        }

        @keyframes particleDrift {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(20px, -30px) scale(1.5); opacity: 0.8; }
        }

        .auth-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 24px 16px;
          width: 100%;
          max-width: 420px;
          animation: authEntrance 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        }

        @keyframes authEntrance {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .auth-logo {
          position: relative;
          width: 76px; height: 76px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 4px;
        }

        .auth-logo-ring {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4);
          animation: logoSpin 4s linear infinite;
          padding: 2px;
        }

        @keyframes logoSpin {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .auth-logo-icon {
          position: relative;
          z-index: 1;
          width: 68px; height: 68px;
          border-radius: 20px;
          background: #0d0d1e;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 900;
          font-size: 34px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .auth-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 36px;
          font-weight: 900;
          letter-spacing: 4px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 2px;
        }

        .auth-subtitle {
          font-size: 13px;
          color: var(--vibe-text-muted);
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .auth-card {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(24px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.08);
        }

        .auth-tabs {
          position: relative;
          display: flex;
          background: rgba(255,255,255,0.05);
          border-radius: 14px;
          padding: 4px;
          margin-bottom: 24px;
          gap: 0;
        }

        .auth-tab-btn {
          flex: 1;
          padding: 10px;
          border: none;
          background: none;
          color: var(--vibe-text-muted);
          font-family: 'Golos Text', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 10px;
          position: relative;
          z-index: 1;
          transition: color 0.2s;
        }

        .auth-tab-active { color: white; }

        .auth-tab-indicator {
          position: absolute;
          top: 4px; left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 10px;
          transition: transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
          box-shadow: 0 4px 12px rgba(139,92,246,0.4);
        }

        .auth-tab-right { transform: translateX(calc(100% + 0px)); }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .auth-field-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--vibe-text-muted);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .auth-phone-wrap, .auth-username-wrap {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.2s;
        }

        .auth-phone-wrap:focus-within, .auth-username-wrap:focus-within {
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.1);
        }

        .auth-flag, .auth-at {
          padding: 0 12px;
          font-size: 14px;
          color: var(--vibe-text-muted);
          border-right: 1px solid rgba(255,255,255,0.07);
          white-space: nowrap;
          height: 48px;
          display: flex;
          align-items: center;
        }

        .auth-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          padding: 13px 16px;
          color: var(--vibe-text);
          font-family: 'Golos Text', sans-serif;
          font-size: 15px;
          outline: none;
          transition: all 0.2s;
        }

        .auth-input:focus {
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.1);
        }

        .auth-input::placeholder { color: var(--vibe-text-muted); }

        .auth-input-phone, .auth-input-username {
          background: none;
          border: none;
          border-radius: 0;
          padding: 13px 14px;
          box-shadow: none !important;
        }

        .auth-hint {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: var(--vibe-text-muted);
          margin: 8px 0 18px;
        }

        .auth-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border: none;
          color: white;
          font-family: 'Golos Text', sans-serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 6px 24px rgba(139,92,246,0.4);
          min-height: 52px;
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139,92,246,0.5);
        }

        .auth-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .auth-spinner {
          width: 22px; height: 22px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        .auth-spinner-inline {
          width: 16px; height: 16px;
          border-width: 2px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0;
          color: var(--vibe-text-muted);
          font-size: 12px;
        }

        .auth-divider::before, .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .auth-socials {
          display: flex;
          gap: 10px;
        }

        .auth-social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: var(--vibe-text);
          font-family: 'Golos Text', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .auth-social-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(139,92,246,0.3);
        }

        .auth-terms {
          font-size: 12px;
          color: var(--vibe-text-muted);
          line-height: 1.6;
          margin: 10px 0 16px;
        }

        .auth-link {
          color: #a78bfa;
          cursor: pointer;
        }

        .auth-back {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: var(--vibe-text-muted);
          font-family: 'Golos Text', sans-serif;
          font-size: 14px;
          cursor: pointer;
          padding: 0;
          margin-bottom: 16px;
          transition: color 0.2s;
        }

        .auth-back:hover { color: var(--vibe-text); }

        .auth-verify-icon {
          font-size: 52px;
          text-align: center;
          margin-bottom: 8px;
          animation: iconBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes iconBounce {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .auth-verify-title {
          font-size: 22px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 8px;
        }

        .auth-verify-desc {
          font-size: 14px;
          color: var(--vibe-text-muted);
          text-align: center;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .auth-verify-desc strong { color: var(--vibe-text); }

        .auth-code-wrap {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 16px;
        }

        .auth-code-input {
          width: 46px; height: 54px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          color: var(--vibe-text);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          text-align: center;
          outline: none;
          transition: all 0.2s;
          caret-color: #8b5cf6;
        }

        .auth-code-input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139,92,246,0.15);
        }

        .auth-code-filled {
          background: rgba(139,92,246,0.12);
          border-color: rgba(139,92,246,0.5);
          color: #a78bfa;
        }

        .auth-verify-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          color: var(--vibe-text-muted);
          margin-bottom: 8px;
        }

        .auth-resend {
          font-size: 13px;
          color: var(--vibe-text-muted);
          text-align: center;
        }

        .auth-link-btn {
          background: none;
          border: none;
          color: #a78bfa;
          font-family: 'Golos Text', sans-serif;
          font-size: 13px;
          cursor: pointer;
          padding: 0;
        }

        .auth-footer {
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          margin-top: 4px;
        }
      `}</style>
    </>
  );
}
