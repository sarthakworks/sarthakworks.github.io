import { useState } from "react";
import "./DarkModeToggle.css";
function DarkModeToggle({ isVisible }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.getAttribute("data-layout-color") === "dark";
  });

  function handleThemeToggle() {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);

    document.body.setAttribute("data-layout-color", newMode);
    document.body.setAttribute("data-leftbar-theme", newMode);
  }
  return (
    <button
      className={`setting-sub-btn ${isVisible ? "visible" : ""}`}
      onClick={handleThemeToggle}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <i
        className={`mdi ${
          isDarkMode ? "mdi-white-balance-sunny" : "mdi-moon-waning-crescent"
        } font-20`}
      ></i>
    </button>
  );
}

export default DarkModeToggle;
