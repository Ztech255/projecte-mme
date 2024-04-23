import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  var [user, setUser] = useState();
  var [password, setPassword] = useState();

  const [loginSuccess, setLoginSuccess] = useState(false);

  var userDb = [
    {
      user: "user",
      password: "1234",
    },
    {
      user: "Lluc",
      password: "1234",
    },
  ];

  const handleSubmit = () => {
    userDb.map((u) => {
      if (u.user === user && u.password === password) {
        setLoginSuccess(true);
      }
    });
  };

  return (
    <div className="wrapper">
      {loginSuccess ? (
        <div>
          Welcome, {user}!{" "}
          <a href="#" onClick={() => setLoginSuccess(false)}>
            Log out
          </a>
        </div>
      ) : (
        <div className="login-form">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password ?</a>
          </div>

          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
