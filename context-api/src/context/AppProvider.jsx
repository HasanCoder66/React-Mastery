import React from "react";
import ThemeProvider from "./ThemeProvider";
import CounterProvider from "./CounterProvider";
import AuthProvider from "./AuthProvider";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CounterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CounterProvider>
    </AuthProvider>
  );
};

export default AppProvider;
