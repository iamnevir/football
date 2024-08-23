import React, { useState } from "react";

const LoginWrapper = ({ children }: any) => {
  const USERNAME = "nevir"; // Tên đăng nhập cố định
  const PASSWORD = "nevir"; // Mật khẩu cố định

  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (input === USERNAME && password === PASSWORD) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "200px" }}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "200px" }}
          />
          <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
            Đăng nhập
          </button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
      )}
    </>
  );
};

export default LoginWrapper;
