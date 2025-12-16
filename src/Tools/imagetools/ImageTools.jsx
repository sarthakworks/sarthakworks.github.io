import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ImageTools({ embedded = false }) {
  const { t } = useTranslation();
  const location = useLocation();
  const isDashboard =
    embedded ||
    location.pathname === "/image-tools" ||
    location.pathname === "/image-tools/";

  const tools = [
    {
      name: t("image_to_base64"),
      path: "/image-tools/base64",
      icon: "mdi mdi-code-braces",
      desc: t("image_to_base64_desc"),
      color: "primary",
      bg: "bg-primary-lighten",
      text: "text-primary",
    },
    {
      name: t("compress_image"),
      path: "/image-tools/compress",
      icon: "uil-compress-arrows",
      desc: t("compress_image_desc"),
      color: "success",
      bg: "bg-success-lighten",
      text: "text-success",
    },
    {
      name: t("blur_sensitive_info"),
      path: "/image-tools/blur",
      icon: "mdi mdi-blur",
      desc: t("blur_sensitive_info_desc"),
      color: "warning",
      bg: "bg-warning-lighten",
      text: "text-warning",
    },
  ];

  return (
    <div className={embedded ? "" : "container-fluid"}>
      {/* Show Dashboard only on root path or when embedded */}
      {isDashboard && (
        <>
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">{t("image_tools")}</h4>
              </div>
            </div>
          </div>

          <div className="row">
            {tools.map((tool) => (
              <div
                className={
                  embedded
                    ? "col-sm-12 col-lg-6 mb-4"
                    : "col-sm-12 col-lg-4 col-md-6 mb-4"
                }
                key={tool.path}
              >
                <Link to={tool.path} className="text-decoration-none">
                  <div className="card shadow-sm h-100 border-0 tool-card">
                    <div className="card-body p-4">
                      <div
                        className={`avatar-md mb-3 rounded-3 d-flex align-items-center justify-content-center ${
                          tool.bg || "bg-light"
                        }`}
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className={`${tool.icon} font-24 ${tool.text}`}></i>
                      </div>
                      <h4
                        className="card-title mb-2 text-dark fw-bold"
                        style={{ fontSize: "2rem" }}
                      >
                        {tool.name}
                      </h4>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "1rem", lineHeight: "1.5" }}
                      >
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Render Child Tools only if not embedded */}
      {!embedded && <Outlet />}
    </div>
  );
}

export default ImageTools;
