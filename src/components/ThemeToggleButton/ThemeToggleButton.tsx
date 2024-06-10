"use client";

import { useTheme } from "@/context/ThemeContext/ThemeContext";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌛" : "🌞"}</button>
  );
};
