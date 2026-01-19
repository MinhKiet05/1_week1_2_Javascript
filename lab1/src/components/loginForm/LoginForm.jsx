import "./LoginForm.css";

export default function LoginForm({ type = "primary", isOpen, onClose }) {
  return (
    <div className={`overlay ${isOpen ? "show" : ""}`}>
      <div className={`login-form login-${type}`}>
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
