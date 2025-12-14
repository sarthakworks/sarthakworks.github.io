import { Link, Outlet, useLocation } from "react-router-dom";

function PdfTools({ embedded = false }) {
  const location = useLocation();
  const isDashboard =
    embedded ||
    location.pathname === "/pdf-tools" ||
    location.pathname === "/pdf-tools/";

  const tools = [
    {
      name: "Merge PDF",
      path: "/pdf-tools/merge",
      icon: "mdi mdi-file-document-multiple-outline",
      desc: "Combine multiple PDF files into one single document.",
      color: "primary",
      bg: "bg-primary-lighten",
      text: "text-primary",
    },
    {
      name: "Split PDF",
      path: "/pdf-tools/split",
      icon: "uil-minus-path",
      desc: "Separate one PDF into individual pages or distinct files.",
      color: "danger",
      bg: "bg-danger-lighten",
      text: "text-danger",
    },
    {
      name: "PDF to Image",
      path: "/pdf-tools/to-image",
      icon: "mdi mdi-file-image-outline",
      desc: "Convert PDF pages into high-quality JPG or PNG images.",
      color: "success",
      bg: "bg-success-lighten",
      text: "text-success",
    },
    {
      name: "Unlock PDF",
      path: "/pdf-tools/unlock",
      icon: "uil-unlock-alt",
      desc: "Remove password protection from PDF files.",
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
                <h4 className="page-title">PDF Tools</h4>
              </div>
            </div>
          </div>

          <div className="row">
            {tools.map((tool) => (
              <div
                className={
                  embedded
                    ? "col-sm-12 col-lg-6 mb-4"
                    : "col-sm-12 col-lg-6 col-md-6 mb-4"
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

export default PdfTools;
