function Settings() {
  function toggleSettings() {
    document.body.classList.toggle("end-bar-enabled");
  }
  // const [darkLight, setDarkLight] = useState("dark");
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
        <div className="rightbar-content h-100" data-simplebar="init">
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    <div className="p-3">
                      <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme,
                        sidebar menu, etc.
                      </div>
                      {/* Settings */}
                      <h5 className="mt-3">Color Scheme</h5>
                      <hr className="mt-1" />
                      <div className="form-check form-switch mb-1">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="color-scheme-mode"
                          defaultValue="light"
                          onClick={() =>
                            document.body.setAttribute(
                              "data-layout-color",
                              "light"
                            )
                          }
                          id="light-mode-check"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="light-mode-check"
                        >
                          Light Mode
                        </label>
                      </div>
                      <div className="form-check form-switch mb-1">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="color-scheme-mode"
                          defaultValue="dark"
                          id="dark-mode-check"
                          onClick={() =>
                            document.body.setAttribute(
                              "data-layout-color",
                              "dark"
                            )
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dark-mode-check"
                        >
                          Dark Mode
                        </label>
                      </div>
                    </div>
                    {/* end padding*/}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 756 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
