import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState();
  const changeTheme = (which) => {
    setTheme(which);
  };
  useEffect(() => {
    let dark = localStorage.getItem("isDark") ?? false;
    console.log("isDark: ", dark);
    if (dark === "true") {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
