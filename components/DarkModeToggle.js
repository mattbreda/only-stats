"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="bg-orange-500 dark:bg-gray-50 hover:bg-orange-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-orange-500 px-2 py-2 text-s rounded-lg  "
    >
      {theme === "dark" ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
};

export default ThemeSwitch;
