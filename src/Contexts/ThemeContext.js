import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children, systemTheme }) => {
  console.log(systemTheme);
  const [theme, setTheme] = useState(
    (localStorage.getItem("isDark") &&
      localStorage.getItem("isDark") === "true") ||
      systemTheme === "dark"
  );
  if (!localStorage.getItem("isDark")) {
    localStorage.setItem("isDark", systemTheme === "dark");
  }
  const changeTheme = (which) => {
    setTheme(which);
    localStorage.setItem("isDark", which ?? systemTheme === "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
