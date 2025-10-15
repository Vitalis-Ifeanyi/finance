import { useState, useEffect, type ReactNode, type FC } from "react";
import { ThemeContext } from "./ThemeContexts";


export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
