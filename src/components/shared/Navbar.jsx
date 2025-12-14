import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import logoPng from '../assets/images/logo.png';
import logoSmPng from '../assets/images/logo_sm.png';
import brandsLinkedinPng from '../assets/images/brands/linkedin.png';
import brandsGithubPng from '../assets/images/brands/github.png';
import brandsDropboxPng from '../assets/images/brands/dropbox.png';
import brandsGSuitePng from '../assets/images/brands/g-suite.png';
import usersAvatar2Png from '../assets/images/users/avatar-2.png';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isSettingOpen, setisSettingOpen] = useState(true);
  function toggleLeftbar(openclose) {
    setIsOpen(openclose);
    if (openclose) {
      document.body.classList.add("sidebar-enable", "hide-menu");
    } else {
      document.body.classList.remove("sidebar-enable", "hide-menu");
    }
  }

  function toggleSettings() {
    document.body.classList.toggle("end-bar-enabled");
  }

  return (
    <>
      <div className="navbar-custom topnav-navbar topnav-navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="topnav-logo">
            <span className="topnav-logo-lg">
              <img
                src={logoPng}
                alt="sarthak logo"
                height={45}
              />
            </span>
            <span className="topnav-logo-sm">
              <img src={logoSmPng} alt="das" height={16} />
            </span>
          </Link>

          <ul className="list-unstyled topbar-menu float-end mb-0">
            <li className="dropdown notification-list d-lg-none">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="dripicons-search noti-icon" />
              </a>
              <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>

            <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="dripicons-bell noti-icon" />
                <span className="noti-icon-badge" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
                {/* item*/}
                <div className="dropdown-item noti-title px-3">
                  <h5 className="m-0">
                    <span className="float-end">
                      <a href="/" className="text-dark">
                        <small>Clear All</small>
                      </a>
                    </span>
                    Notification
                  </h5>
                </div>
                <div
                  className="px-3"
                  style={{ maxHeight: 300 }}
                  data-simplebar="init"
                ></div>
                {/* All*/}
                <a
                  href="/"
                  className="dropdown-item text-center text-primary notify-item border-top border-light py-2"
                >
                  View All
                </a>
              </div>
            </li>
            <li className="dropdown notification-list d-none d-sm-inline-block">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="dripicons-view-apps noti-icon" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-md p-0">
                <div className="p-2">
                  <div className="row g-0">
                    <div className="col">
                      <a
                        className="dropdown-icon-item"
                        href="https://www.linkedin.com/in/sarthakworks/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={brandsLinkedinPng}
                          alt="linkedin"
                        />
                        <span>Linkedin</span>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        className="dropdown-icon-item"
                        href="https://github.com/sarthakworks"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={brandsGithubPng}
                          alt="Github"
                        />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="/">
                        <img
                          src={brandsDropboxPng}
                          alt="dropbox"
                        />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        className="dropdown-icon-item"
                        href="mailto:sarthak.workplace@gmail.com"
                      >
                        <img
                          src={brandsGSuitePng}
                          alt="G Suite"
                        />
                        <span>Mail</span>
                      </a>
                    </div>
                  </div>
                  {/* end row*/}
                </div>
              </div>
            </li>
            <li className="notification-list">
              <a
                className="nav-link end-bar-toggle"
                onClick={toggleSettings}
                href="#!"
              >
                <i className="dripicons-gear noti-icon" />
              </a>
            </li>
            <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle nav-user arrow-none me-0"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span className="account-user-avatar">
                  <img
                    src={usersAvatar2Png}
                    alt="user"
                    className="rounded-circle"
                  />
                </span>
                <span>
                  <span className="account-user-name">Sarthak Bansal</span>
                  <span className="account-position">Creator</span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                {/* item*/}
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>
                {/* item*/}
                <a href="/" className="dropdown-item notify-item">
                  <i className="mdi mdi-account-circle me-1" />
                  <span>My Account</span>
                </a>
                {/* item*/}
                <a
                  onClick={toggleSettings}
                  href="#!"
                  className="dropdown-item notify-item"
                >
                  <i className="mdi mdi-account-edit me-1" />
                  <span>Settings</span>
                </a>
                {/* item*/}
              </div>
            </li>
          </ul>
          <a
            href="#!"
            onClick={() => toggleLeftbar(!isOpen)}
            className="button-menu-mobile disable-btn"
          >
            <div className="lines">
              <span />
              <span />
              <span />
            </div>
          </a>

          <Search />
        </div>
      </div>
    </>
  );
}

export default Navbar;