import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" Required />
          <FaUser />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" Required />
          <FaLock />
        </div>
        <div ClassName="remeber-forgot">
          <label>
            <input type="checkbox" />
            remeber me
          </label>
          <a href="#"> Forgot Password</a>
        </div>
        <button type="submit">Login</button>
        <div classname="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
