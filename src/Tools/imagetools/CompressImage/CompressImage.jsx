import { useState } from "react";
import imageCompression from "browser-image-compression";

function CompressImage() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionQuality, setCompressionQuality] = useState(0.8);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOriginalImage(file);
      setCompressedImage(null); // Reset previous compressed image
    }
  };

  const compressImage = async () => {
    if (!originalImage) return;

    setIsCompressing(true);

    // Check if SVG (Basic minification)
    if (originalImage.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        // Basic minification: remove newlines and extra spaces
        const minified = content.replace(/\s+/g, " ").trim();
        const blob = new Blob([minified], { type: "image/svg+xml" });
        setCompressedImage(blob);
        setIsCompressing(false);
      };
      reader.readAsText(originalImage);
      return;
    }

    // Default options for JPG/PNG/WEBP
    const options = {
      maxSizeMB: 1, // Default max size
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: compressionQuality,
    };

    try {
      const compressedFile = await imageCompression(originalImage, options);
      setCompressedImage(compressedFile);
    } catch (error) {
      console.error(error);
      alert("Compression failed! See console for details.");
    } finally {
      setIsCompressing(false);
    }
  };

  const formatSize = (size) => {
    return (size / 1024 / 1024).toFixed(2) + " MB";
  };

  return (
    <div className="container-fluid">
      {/* Page Title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Image Compressor</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="image-upload-input" className="form-label">
                  Upload Image (JPG, PNG, SVG, WEBP)
                </label>
                <input
                  id="image-upload-input"
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>

              {originalImage && (
                <div className="mb-4 p-3 bg-light rounded glass-panel">
                  <h5>Settings</h5>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <label htmlFor="quality-range" className="form-label">
                        Quality (0.1 - 1.0)
                      </label>
                      <input
                        id="quality-range"
                        type="range"
                        className="form-range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={compressionQuality}
                        onChange={(e) =>
                          setCompressionQuality(parseFloat(e.target.value))
                        }
                        disabled={originalImage.type === "image/svg+xml"}
                      />
                      <div className="text-muted small">
                        Current: {compressionQuality}
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      <button
                        className="btn btn-primary"
                        onClick={compressImage}
                        disabled={isCompressing}
                      >
                        {isCompressing ? (
                          <span className="spinner-border spinner-border-sm me-1"></span>
                        ) : (
                          <i className="mdi mdi-zip-box me-1"></i>
                        )}
                        Compress Image
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="row mt-4">
                {/* Original */}
                {originalImage && (
                  <div className="col-md-6">
                    <div className="card shadow-soft">
                      <div className="card-body text-center">
                        <h6>Original</h6>
                        <img
                          src={URL.createObjectURL(originalImage)}
                          alt="Original"
                          className="img-fluid mb-2 rounded"
                          style={{ maxHeight: "200px" }}
                        />
                        <p className="mb-0 fw-bold">
                          {formatSize(originalImage.size)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Compressed */}
                {compressedImage && (
                  <div className="col-md-6">
                    <div className="card shadow-soft border-success">
                      <div className="card-body text-center">
                        <h6 className="text-success">Compressed Result</h6>
                        <img
                          src={URL.createObjectURL(compressedImage)}
                          alt="Compressed"
                          className="img-fluid mb-2 rounded"
                          style={{ maxHeight: "200px" }}
                        />
                        <p className="mb-0 fw-bold text-success">
                          {formatSize(compressedImage.size)}
                          <span className="badge bg-success ms-2">
                            -
                            {(
                              (1 - compressedImage.size / originalImage.size) *
                              100
                            ).toFixed(0)}
                            %
                          </span>
                        </p>
                        <a
                          href={URL.createObjectURL(compressedImage)}
                          download={`compressed-${originalImage.name}`}
                          className="btn btn-success mt-2"
                        >
                          <i className="dripicons-download me-1"></i> Download
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompressImage;
