import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = () => {
    setEmail("admin@example.com");
    setPassword("adminpassword");
  };

  const handleEmployeeLogin = () => {
    setEmail("employee@example.com");
    setPassword("employeepassword");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="Login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={handleAdminLogin}>Admin Login</button>
        <button onClick={handleEmployeeLogin}>Employee Login</button>
      </div>
    </div>
  );
}

export default Login;
