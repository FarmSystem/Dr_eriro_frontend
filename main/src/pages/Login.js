import React, { useState } from "react";
import "./Login.css";
import Home from "./Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 가상 로그인
    const loginSuccessful =
      email === "farm@naver.com" && password === "farm12345";

    if (loginSuccessful) {
      alert("로그인 성공!");
      setIsLoggedIn(true);
    } else {
      alert("로그인 실패. 다시 시도해주세요.");
    }
  };

  return (
    <div className="login-page">
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          <h1>로그인</h1>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit" className="login-button">
              로그인
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
