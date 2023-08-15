import React from "react";
import "./style.scss";

const RegisterPage = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Welcome to ChatApp</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">Choose Avatar</label>

          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default RegisterPage;
