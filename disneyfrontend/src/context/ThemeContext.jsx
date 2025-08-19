import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isNight, setIsNight] = useState(false);
  const toggleTheme = () => setIsNight((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isNight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
