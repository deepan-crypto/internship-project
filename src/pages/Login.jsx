import React from "react";
import "../Styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <h2>Login Page</h2>
        <label>Email</label>
        <input type="email" placeholder="Email" required />
        <label>Password</label>
        <input type="password" placeholder="Password" required />
        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
