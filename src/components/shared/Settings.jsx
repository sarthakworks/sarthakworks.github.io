import { useState } from "react";

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.getAttribute("data-layout-color") === "dark";
  });

  function toggleSettings() {
    document.body.classList.toggle("end-bar-enabled");
  }

  function handleThemeToggle() {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute("data-layout-color", newMode);
    document.body.setAttribute("data-leftbar-theme", newMode);
  }

  return (
    <>
      <div className="end-bar">
        <div className="rightbar-title">
          <a
            onClick={toggleSettings}
            href="#!"
            className="end-bar-toggle float-end"
          >
            <i className="dripicons-cross noti-icon" />
          </a>
          <h5 className="m-0">Settings</h5>
        </div>
        <div className="rightbar-content h-100 p-3">
          <div className="alert alert-info" role="alert">
            <strong>Mode:</strong> {isDarkMode ? "Dark" : "Light"}
          </div>

          <h5 className="mt-3">Theme</h5>
          <hr className="mt-1" />

          <div className="form-check form-switch mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              name="color-scheme-mode"
              id="dark-mode-check"
              checked={isDarkMode}
              onChange={handleThemeToggle}
            />
            <label className="form-check-label" htmlFor="dark-mode-check">
              <i
                className={`mdi ${
                  isDarkMode
                    ? "mdi-moon-waning-crescent"
                    : "mdi-white-balance-sunny"
                } me-1`}
              ></i>
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
