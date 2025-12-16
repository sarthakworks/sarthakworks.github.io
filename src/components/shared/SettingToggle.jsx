import { useState, Suspense, lazy } from "react";
import "./SettingToggle.css";

const LangSwitcher = lazy(() => import("./LangSwitcher/LangSwitcher"));
const DarkModeToggle = lazy(() => import("./DarkModeToggle/DarkModeToggle"));

function SettingToggle() {
  const [isExpanded, setIsExpanded] = useState(false);
  function toggleMenu() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className="setting-toggle-container">
      <a
        onClick={toggleMenu}
        href="#!"
        className={`setting-toggle-btn ${isExpanded ? "expanded" : ""}`}
      >
        <i className="dripicons-gear noti-icon" />
      </a>
      <Suspense fallback={null}>
        <DarkModeToggle isVisible={isExpanded} />
        <LangSwitcher isVisible={isExpanded} />
      </Suspense>
    </div>
  );
}

export default SettingToggle;
