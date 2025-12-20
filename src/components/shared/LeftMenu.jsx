import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import usersAvatar2Png from "../assets/images/users/avatar-2.png";

function LeftMenu() {
  const { t } = useTranslation();
  return (
    <>
      <div className="card leftside-menu leftside-menu-detached show">
        {/* LOGO */}
        <div className="leftbar-user">
          <Link to="/">
            <img
              src={usersAvatar2Png}
              alt="user"
              height={150}
              className="rounded-circle shadow-sm"
            />
            <span className="leftbar-user-name">Sarthak Bansal</span>
          </Link>
          <p className="text-muted mb-0 font-13">sarthak.workplace@gmail.com</p>
        </div>
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">{t("apps")}</li>

          <li className="side-nav-item">
            <Link to="/image-tools" className="side-nav-link">
              <i className="uil-image-check" />
              <span> {t("image_tools")} </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/pdf-tools" className="side-nav-link">
              <i className="uil-file-alt" />
              <span> {t("pdf_tools")} </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/agile-tools" className="side-nav-link">
              <i className="uil-clipboard-alt" />
              <span> {t("agile_tools")} </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/aes-tool" className="side-nav-link">
              <i className="uil-padlock" />
              <span> {t("aes_encryption")} </span>
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/about" className="side-nav-link">
              <i className="uil-user" />
              <span>{t("about_me")}</span>
            </Link>
          </li>
        </ul>

        {/* Sidebar -left */}
      </div>
    </>
  );
}

export default LeftMenu;
