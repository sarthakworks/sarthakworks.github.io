import { useState } from "react";
import "./SettingToggle.css";

function SettingToggle() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.getAttribute("data-layout-color") === "dark";
  });

  function toggleMenu() {
    setIsExpanded(!isExpanded);
  }

  function handleThemeToggle() {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);

    document.body.setAttribute("data-layout-color", newMode);
    document.body.setAttribute("data-leftbar-theme", newMode);
  }

  return (
    <div className="setting-toggle-container">
      {/* Main Toggle Button */}
      <a
        onClick={toggleMenu}
        href="#!"
        className={`setting-toggle-btn ${isExpanded ? "expanded" : ""}`}
      >
        <i className="dripicons-gear noti-icon" />
      </a>

      {/* Theme Toggle Button - Only visible when expanded */}
      <button
        className={`setting-sub-btn ${isExpanded ? "visible" : ""}`}
        onClick={handleThemeToggle}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <i
          className={`mdi ${
            isDarkMode ? "mdi-white-balance-sunny" : "mdi-moon-waning-crescent"
          } font-20`}
        ></i>
      </button>
    </div>
  );
}

export default SettingToggle;
