import { Link, Outlet, useLocation } from "react-router-dom";

function ImageTools({ embedded = false }) {
  const location = useLocation();
  const isDashboard =
    embedded ||
    location.pathname === "/image-tools" ||
    location.pathname === "/image-tools/";

  const tools = [
    {
      name: "Image to Base64",
      path: "/image-tools/base64",
      icon: "mdi mdi-code-braces",
      desc: "Convert images to Base64 strings instantly.",
      color: "primary",
      bg: "bg-primary-lighten",
      text: "text-primary",
    },
    {
      name: "Compress IMAGE",
      path: "/image-tools/compress",
      icon: "uil-compress-arrows",
      desc: "Compress JPG, PNG, SVG, and GIFs while saving space and maintaining quality.",
      color: "success",
      bg: "bg-success-lighten",
      text: "text-success",
    },
    {
      name: "Blur Sensitive Info",
      path: "/image-tools/blur",
      icon: "mdi mdi-blur",
      desc: "Pixelate or blur specific regions of an image to hide sensitive data.",
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
                <h4 className="page-title">Image Tools</h4>
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
