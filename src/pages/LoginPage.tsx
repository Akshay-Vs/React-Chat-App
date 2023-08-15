import React from "react";
import "./style.scss";

const LoginPage = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Welcome Back</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? Sign In</p>
      </div>
    </div>
  );
};

export default LoginPage;
