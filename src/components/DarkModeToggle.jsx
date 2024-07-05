import React, { useState, useEffect } from "react";
import { DarkMode, LightMode } from "../helpers/icons";

const DarkModeToggle = () => {
  const LIGHT_THEME = "light";
  const DARK_THEME = "dark";

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : LIGHT_THEME
  );

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <label className="swap mr-2">
        <input
          type="checkbox"
          checked={theme === DARK_THEME}
          onChange={handleToggle}
        />
        <DarkMode />
        <LightMode />
      </label>
    </div>
  );
};

export default DarkModeToggle;
