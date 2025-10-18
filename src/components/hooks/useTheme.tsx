import { useEffect, useState } from "react";

type themes = "#000" | "#eee";

const useTheme = (value: themes) => {
  const [currentTheme, setCurentTheme] = useState<themes>(value);

  const toggleTheme = () => {
    const theme = currentTheme == "#000" ? "#eee" : "#000";
    setCurentTheme(theme);
  };

  useEffect(() => {
    const body = document.body as HTMLElement;
    body.style.backgroundColor = currentTheme;
    if (currentTheme == "#000") {
      body.style.color = "#eee";
    } else {
      body.style.color = "#000";
    }
  }, [currentTheme]);

  return toggleTheme;
};

export default useTheme;
