import React, { useState, createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  //###################################################################

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  //###################################################################

  useEffect(() => {}, []);

  //###################################################################

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
