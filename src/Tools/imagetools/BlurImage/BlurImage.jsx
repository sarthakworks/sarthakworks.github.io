import { useState, useRef, useEffect, useCallback } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function BlurImage() {
  const [src, setSrc] = useState(null); // The original source
  const [baseImage, setBaseImage] = useState(null); // The "committed" image (Image Object)
  const [history, setHistory] = useState([]); // Stack of data URLs

  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);

  const [blurIntensity, setBlurIntensity] = useState(10);
  const [blurType, setBlurType] = useState("gaussian");

  const canvasRef = useRef(null);

  // Select File
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          setSrc(reader.result);
          setBaseImage(image);
          setHistory([reader.result]); // Init history
          setCrop(undefined);
          setCompletedCrop(null);
        };
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Draw Function: Renders Base Image + Current Live Effect
  const drawCallback = useCallback(() => {
    if (!baseImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 1. Resize canvas to match image
    if (
      canvas.width !== baseImage.width ||
      canvas.height !== baseImage.height
    ) {
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;
    }

    // 2. Clear & Draw Base Image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseImage, 0, 0);

    // 3. Apply Live Effect if Crop Exists
    if (completedCrop?.width && completedCrop?.height) {
      const scaleX = canvas.width / canvas.clientWidth;
      const scaleY = canvas.height / canvas.clientHeight;

      const x = completedCrop.x * scaleX;
      const y = completedCrop.y * scaleY;
      const w = completedCrop.width * scaleX;
      const h = completedCrop.height * scaleY;

      ctx.save();
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.clip(); // Restrict drawing to crop area

      if (blurType === "gaussian") {
        ctx.filter = `blur(${blurIntensity}px)`;
        ctx.drawImage(baseImage, 0, 0); // Draw image again with blur over the clip
        ctx.filter = "none";
      } else if (blurType === "pixelate") {
        // Pixelate manual implementation
        // We need to disable smoothing for a pixelated look scaling up/down?
        // Simpler: Draw small blocks
        const sampleSize = blurIntensity;
        for (let py = y; py < y + h; py += sampleSize) {
          for (let px = x; px < x + w; px += sampleSize) {
            const p = ctx.getImageData(px, py, 1, 1).data;
            ctx.fillStyle = `rgb(${p[0]},${p[1]},${p[2]})`;
            ctx.fillRect(px, py, sampleSize, sampleSize);
          }
        }
      }
      ctx.restore();
    }
  }, [baseImage, completedCrop, blurIntensity, blurType]);

  useEffect(() => {
    drawCallback();
  }, [drawCallback]);

  // Commit Blur: Burns the current state into a new Base Image
  const applyBlur = () => {
    if (!canvasRef.current) return;
    const newDataUrl = canvasRef.current.toDataURL("image/png");

    // Update History
    setHistory((prev) => [...prev, newDataUrl]);

    // Update Base Image
    const newImg = new Image();
    newImg.src = newDataUrl;
    newImg.onload = () => {
      setBaseImage(newImg);
      setCrop(undefined);
      setCompletedCrop(null);
    };
  };

  const undo = () => {
    if (history.length <= 1) return;
    const newHistory = [...history];
    newHistory.pop(); // Remove current
    const prevDataUrl = newHistory[newHistory.length - 1];
    setHistory(newHistory);

    const newImg = new Image();
    newImg.src = prevDataUrl;
    newImg.onload = () => {
      setBaseImage(newImg);
      setCrop(undefined);
      setCompletedCrop(null);
    };
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "blurred-result.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Blur Sensitive Info</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="file-upload" className="form-label">
                  Upload Image
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile}
                  className="form-control"
                />
              </div>

              {src && (
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="p-3 bg-light rounded glass-panel mb-3 text-center position-relative"
                      style={{ overflow: "auto", maxHeight: "70vh" }}
                    >
                      {/* We render ReactCrop AROUND the canvas */}
                      {/* Note: ReactCrop expects an image or something to wrap. We can just wrap a div? */}
                      {/* Or we wrap the Canvas? Yes. */}
                      {baseImage && (
                        <ReactCrop
                          crop={crop}
                          onChange={(c) => setCrop(c)}
                          onComplete={(c) => setCompletedCrop(c)}
                        >
                          <canvas
                            ref={canvasRef}
                            style={{ maxWidth: "100%" }}
                          />
                        </ReactCrop>
                      )}
                    </div>
                    <div className="text-center text-muted small">
                      <i className="uil-info-circle me-1"></i>
                      Drag to select an area. Defines the blur region. Click
                      "Apply Blur" to commit.
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="p-3 card shadow-soft sticky-top"
                      style={{ top: "20px", zIndex: 100 }}
                    >
                      <h5>Settings</h5>

                      <div className="mb-3">
                        <label htmlFor="blur-type" className="form-label mt-2">
                          Blur Type
                        </label>
                        <select
                          id="blur-type"
                          className="form-select"
                          value={blurType}
                          onChange={(e) => setBlurType(e.target.value)}
                        >
                          <option value="gaussian">Gaussian Blur</option>
                          <option value="pixelate">Pixelate (Mosaic)</option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="blur-intensity" className="form-label">
                          Intensity: {blurIntensity}
                        </label>
                        <input
                          id="blur-intensity"
                          type="range"
                          className="form-range"
                          min="1"
                          max="50"
                          value={blurIntensity}
                          onChange={(e) =>
                            setBlurIntensity(Number(e.target.value))
                          }
                        />
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          onClick={applyBlur}
                          disabled={!completedCrop?.width}
                        >
                          <i className="uil-layer-group me-1"></i> Apply Blur
                        </button>

                        <button
                          className="btn btn-secondary"
                          onClick={undo}
                          disabled={history.length <= 1}
                        >
                          <i className="uil-history me-1"></i> Undo Last
                        </button>

                        <hr />

                        <button
                          className="btn btn-success"
                          onClick={downloadImage}
                        >
                          <i className="uil-image-download me-1"></i> Download
                          Result
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlurImage;
