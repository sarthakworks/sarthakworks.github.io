import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-none d-md-block">
            <i className="uil-copyright"></i> {new Date().getFullYear()}
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="text-md-end footer-links">
              <Link to="/Interview">{t("content")}</Link>
              <Link to="/Random">{t("mini_projects")}</Link>
              <Link to="/">
                {" "}
                {t("made_with")} <span style={{ color: "red" }}>❤</span>{" "}
                {t("by")} Sarthak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
