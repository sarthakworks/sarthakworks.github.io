function SettingToggle() {
  function toggleSettings() {
    document.body.classList.toggle("end-bar-enabled");
  }

  return (
    <>
      <a onClick={toggleSettings} href="#!" className="setting-toggle-btn">
        <i className="dripicons-gear noti-icon" />
      </a>
    </>
  );
}

export default SettingToggle;
