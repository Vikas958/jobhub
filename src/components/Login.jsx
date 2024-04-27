import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
          ></input>
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            required
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
