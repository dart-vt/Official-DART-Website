import { useEffect, useState } from "react";

const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
function readPreference() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    return null;
  }
}

// Mounted once in the app shell; pages use tokens instead of mutating the theme.
export function useTheme() {
  const [preference, setPreference] = useState(readPreference);
  const [system, setSystem] = useState(systemTheme);
  const theme = preference || system;
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystem(query.matches ? "dark" : "light");
    query.addEventListener("change", update);
    const sync = (event) => {
      if (event.key === "theme" || event.key === null)
        setPreference(readPreference());
    };
    window.addEventListener("storage", sync);
    return () => {
      query.removeEventListener("change", update);
      window.removeEventListener("storage", sync);
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setPreference(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Still works without persistent storage. */
    }
  };
  return { theme, toggleTheme };
}
