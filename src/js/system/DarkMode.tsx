import { useEffect, useState } from "react";


export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return {isDarkMode,toggleDarkMode:()=> setIsDarkMode(!isDarkMode)};
};
