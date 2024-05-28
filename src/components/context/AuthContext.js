// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const loginAsAdmin = () => setRole("admin");
  const loginAsUser = () => setRole("user");
  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, loginAsAdmin, loginAsUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
