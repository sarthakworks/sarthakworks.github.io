import { useState, useRef, useEffect } from "react";
import { removeBackground } from "@imgly/background-removal";
import { useTranslation } from "react-i18next";
import Card from "../../../components/shared/Card";

const RemoveBackground = () => {
  const { t } = useTranslation();
  const [processedImageSrc, setProcessedImageSrc] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [customColor, setCustomColor] = useState("#ffffff");
  const canvasRef = useRef(null);

  const gradients = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #ff9966, #ff5e62)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #11998e, #38ef7d)",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProcessedImageSrc(null);
      processImage(file);
    }
  };

  const processImage = async (file) => {
    setIsProcessing(true);
    try {
      const blob = await removeBackground(file);
      const url = URL.createObjectURL(blob);
      setProcessedImageSrc(url);
    } catch (error) {
      console.error("Error removing background:", error);
      alert("Failed to remove background.");
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (processedImageSrc && canvasRef.current) {
      drawCanvas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processedImageSrc, bgColor, customColor]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw background
      if (bgColor === "transparent") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if (bgColor === "custom") {
        ctx.fillStyle = customColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Gradient
        // Parse simple gradient string for demo (or use CSS background for preview and draw roughly on canvas)
        // Since canvas gradients are complex to parse from CSS strings exactly,
        // implies we might just draw the image over a div with CSS background for display,
        // but for DOWNLOAD we need it on canvas.
        // For simplicity, let's try to map the preset gradients to canvas gradients or just basic colors.
        // Or better: Display a container with the background, and for download, composite it.

        // Actually, let's keep it simple: Real compositing on canvas is best for download.
        // Let's implement a simple parser or just mapping for the predefined gradients.

        if (bgColor.includes("linear-gradient")) {
          // Simplified gradient parsing for the demo gradients
          const colors = bgColor.match(/#[a-fA-F0-9]{6}/g);
          if (colors && colors.length >= 2) {
            const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
            grd.addColorStop(0, colors[0]);
            grd.addColorStop(1, colors[1]);
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        }
      }

      // Draw processed image
      ctx.drawImage(img, 0, 0);
    };
    img.src = processedImageSrc;
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "removed_background.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">
              {t("remove_bg") || "Remove Background"}
            </h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <Card title={t("remove_bg") || "Remove Background"}>
            <div className="mb-4">
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {isProcessing && (
              <div className="text-center my-5">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
                <p className="mt-2">
                  Removing background... (This will take some time)
                </p>
              </div>
            )}

            {!isProcessing && processedImageSrc && (
              <div className="row">
                <div className="col-md-8 text-center mb-3">
                  <div
                    className="border rounded p-2 d-inline-block bg-light"
                    style={{
                      backgroundImage:
                        "conic-gradient(#ccc 25%, white 25%, white 50%, #ccc 50%, #ccc 75%, white 75%, white)",
                      backgroundSize: "20px 20px",
                    }}
                  >
                    <canvas
                      ref={canvasRef}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <h5 className="mb-3">
                    {t("bg_color") || "Background Color"}
                  </h5>

                  <div className="mb-3">
                    <button
                      className={`btn w-100 mb-2 ${
                        bgColor === "transparent"
                          ? "btn-outline-primary active"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setBgColor("transparent")}
                    >
                      Transparent
                    </button>
                  </div>

                  <h6 className="mb-2">Solid Color</h6>
                  <div className="input-group mb-3">
                    <input
                      type="color"
                      className="form-control form-control-color"
                      value={customColor}
                      onChange={(e) => {
                        setCustomColor(e.target.value);
                        setBgColor("custom");
                      }}
                      title="Choose your color"
                    />
                    <button
                      className={`btn ${
                        bgColor === "custom"
                          ? "btn-primary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setBgColor("custom")}
                    >
                      Apply
                    </button>
                  </div>

                  <h6 className="mb-2">{t("gradients") || "Gradients"}</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {gradients.map((grad, idx) => (
                      <div
                        key={idx}
                        role="button"
                        tabIndex={0}
                        onClick={() => setBgColor(grad)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            setBgColor(grad);
                        }}
                        style={{
                          background: grad,
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                          border:
                            bgColor === grad
                              ? "2px solid black"
                              : "1px solid #ddd",
                          borderRadius: "50%",
                        }}
                        title="Apply Gradient"
                        aria-label={`Gradient option ${idx + 1}`}
                      ></div>
                    ))}
                  </div>

                  <button
                    className="btn btn-success w-100 py-2 fw-bold"
                    onClick={handleDownload}
                  >
                    <i className="mdi mdi-download me-1"></i> Download Image
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
