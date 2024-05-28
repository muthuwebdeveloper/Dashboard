import { Grid } from "@mui/material";
import React, { useState } from "react";
import loginImg from "../assets/images/login_img.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeLogin, setActiveLogin] = useState("admin");

  const handleAdminLogin = () => {
    setActiveLogin("admin");
    setEmail("admin@example.com");
    setPassword("admin123");
  };

  const handleEmployeeLogin = () => {
    setActiveLogin("employee");
    setEmail("employee@example.com");
    setPassword("user123");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const getSlidePosition = () => {
    return activeLogin === "admin" ? "0%" : "50%";
  };

  return (
    <div className="login">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="login_text">
            <div className="card">
              <div className="">
                <ul>
                  <div
                    className="slide-bg"
                    style={{ left: getSlidePosition() }}
                  />
                  <li
                    className={`login_btn_change ${
                      activeLogin === "admin" ? "active" : ""
                    }`}
                    onClick={handleAdminLogin}
                  >
                    Admin Login
                  </li>
                  <li
                    className={`login_btn_change ${
                      activeLogin === "employee" ? "active" : ""
                    }`}
                    onClick={handleEmployeeLogin}
                  >
                    Employee Login
                  </li>
                </ul>
              </div>
              <h1>Login Page</h1>
              <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="login_img">
            <img src={loginImg} alt="Login" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
