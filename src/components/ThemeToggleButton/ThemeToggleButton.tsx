"use client";

import { useTheme } from "@/context/ThemeContext/ThemeContext";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="motion-safe:animate-bounce">
      {theme === "light" ? "🌛" : "🌞"}
    </button>
  );
};
