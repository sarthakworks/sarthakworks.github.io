import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { PDFDocument } from "pdf-lib";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Card from "../../../components/shared/Card";

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const CompressPdf = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState("recommended");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  // Check for passed file from Rearrange tool
  useEffect(() => {
    if (location.state && location.state.file) {
      setFile(location.state.file);
      setOriginalSize(location.state.file.size);
    }
  }, [location.state]);

  const compressionOptions = [
    {
      id: "extreme",
      label: "Extreme Compression",
      desc: "Less quality, high compression",
      quality: 0.1,
      scale: 1,
    },
    {
      id: "recommended",
      label: "Recommended Compression",
      desc: "Good quality, good compression",
      quality: 0.5,
      scale: 1.5,
    },
    {
      id: "less",
      label: "Less Compression",
      desc: "High quality, less compression",
      quality: 0.8,
      scale: 2,
    },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setOriginalSize(selectedFile.size);
      setDownloadUrl(null);
      setCompressedSize(0);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleCompress = async () => {
    if (!file) return;

    setIsProcessing(true);
    setDownloadUrl(null);

    try {
      const selectedOption = compressionOptions.find(
        (opt) => opt.id === compressionLevel
      );

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      const totalPages = pdf.numPages;

      const newPdfDoc = await PDFDocument.create();

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: selectedOption.scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;

        const imgDataUrl = canvas.toDataURL(
          "image/jpeg",
          selectedOption.quality
        );
        const imgBytes = await fetch(imgDataUrl).then((res) =>
          res.arrayBuffer()
        );

        const jpgImage = await newPdfDoc.embedJpg(imgBytes);
        const newPage = newPdfDoc.addPage([viewport.width, viewport.height]);

        newPage.drawImage(jpgImage, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        });
      }

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setCompressedSize(blob.size);
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error compressing PDF:", error);
      alert("An error occurred during compression.");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">
              {t("compress_pdf") || "Compress PDF"}
            </h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title={t("compress_pdf") || "Compress PDF"}>
            <div className="mb-4">
              <label htmlFor="pdf-upload" className="form-label">
                Select PDF File
              </label>
              <input
                className="form-control"
                type="file"
                id="pdf-upload"
                accept="application/pdf"
                onChange={handleFileChange}
              />
              {originalSize > 0 && (
                <div className="mt-2 text-muted">
                  Original Size: {formatSize(originalSize)}
                </div>
              )}
            </div>

            <div
              className="mb-4"
              role="radiogroup"
              aria-labelledby="compression-level-label"
            >
              <span
                id="compression-level-label"
                className="form-label mb-3 d-block"
              >
                Compression Level
              </span>
              <div className="row g-3">
                {compressionOptions.map((option) => (
                  <div key={option.id} className="col-md-4">
                    <div
                      key={option.id}
                      role="button"
                      tabIndex={0}
                      className={`card h-100 cursor-pointer border ${
                        compressionLevel === option.id
                          ? "border-primary bg-light"
                          : ""
                      }`}
                      onClick={() => setCompressionLevel(option.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setCompressionLevel(option.id);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card-body text-center p-3">
                        <div className="form-check d-flex justify-content-center mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="compressionLevel"
                            id={`compression-option-${option.id}`}
                            checked={compressionLevel === option.id}
                            onChange={() => setCompressionLevel(option.id)}
                            style={{ cursor: "pointer" }}
                            tabIndex={-1} // Prevent double tabbing since container handles it
                          />
                        </div>
                        <label
                          className="card-title fw-bold mb-1 d-block"
                          htmlFor={`compression-option-${option.id}`}
                          style={{ cursor: "pointer" }}
                        >
                          {option.label}
                        </label>
                        <p className="card-text small text-muted mb-0">
                          {option.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn btn-primary w-100 fw-bold py-2"
              onClick={handleCompress}
              disabled={!file || isProcessing}
            >
              {isProcessing ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Compressing PDF...
                </>
              ) : (
                "Compress PDF"
              )}
            </button>

            {downloadUrl && (
              <div className="mt-4 p-3 bg-light rounded border text-center">
                <h5 className="text-success mb-2">Compression Complete!</h5>
                <p className="mb-3">
                  New Size: <strong>{formatSize(compressedSize)}</strong>{" "}
                  <span className="text-success">
                    (
                    {Math.round(
                      ((originalSize - compressedSize) / originalSize) * 100
                    )}
                    % smaller)
                  </span>
                </p>
                <a
                  href={downloadUrl}
                  download={`compressed_${file.name}`}
                  className="btn btn-success fw-bold"
                >
                  <i className="mdi mdi-download me-1"></i> Download Compressed
                  PDF
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompressPdf;
