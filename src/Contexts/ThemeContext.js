import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("isDark") === "true");
  const changeTheme = (which) => {
    setTheme(which);
    localStorage.setItem("isDark", which);
  };

  const value = { theme, setTheme, changeTheme };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};
