import React from "react";
import "./login.css";
import "./home.css"; 
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };
  return (
   <div className="login-page">
      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <div className="loginmaincontainer">
          
          <div className="loginimage"></div>

          <div className="login">
            <h2 style={{ color: "#333" }}>🔐 Login to Account</h2>

            <div className="usecontainer">
              <input
                type="text"
                id="userName"
                placeholder="Username"
                required
              />
             
            </div>

            <div className="usecontainer">
              <input
                type="password"
                id="userPassword"
                placeholder="Password"
                required
              />
              
            </div>

            <div className="btncontainer">
              <button type="submit">Login</button>
              <a href="/forget">Forgot Password?</a>
            </div>

            <a href="/signup">Create Your Account</a>
          </div>

        </div>
      </form>
   </div>
  );
};

export default Login;
