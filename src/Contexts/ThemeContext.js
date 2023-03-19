import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("isDark"));
  const changeTheme = (which) => {
    setTheme(which);
    localStorage.setItem("isDark", which);
  };
  console.log(theme);

  const value = { theme, setTheme, changeTheme };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};
