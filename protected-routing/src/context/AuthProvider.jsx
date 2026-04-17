import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    console.log("user login successfully", user);
    setUser(user)

    if(user) {
      localStorage.setItem("isUser", true)
      localStorage.setItem("currentUser", JSON.stringify(user))
    }
  };

  const logout = () => {
    console.log("logout handler is working");
    setUser(null);
    localStorage.setItem("isUser", null)
    localStorage.setItem("currentUser", JSON.stringify([]))
  };

  return (
    <AuthContext.Provider value={[user, login, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
