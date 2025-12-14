import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import Card from "../../../components/shared/Card";

// Set worker source for pdfjs-dist
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const RemovePdfPassword = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [unlockedPdfUrl, setUnlockedPdfUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [useForceMode, setUseForceMode] = useState(false); // New state for flattening

  const [showPassword, setShowPassword] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setUnlockedPdfUrl(null);
      setError("");
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const unlockPdf = async () => {
    if (!file) return;
    if (!password) {
      setError("Please enter the PDF password.");
      return;
    }

    setIsProcessing(true);
    setError("");
    setUnlockedPdfUrl(null);

    try {
      const arrayBuffer = await file.arrayBuffer();

      if (useForceMode) {
        // --- FORCE MODE (Flattening) ---
        // 1. Load with pdfjs-dist (supports more encryption types)
        const loadingTask = pdfjsLib.getDocument({
          data: new Uint8Array(arrayBuffer),
          password: password,
        });

        const pdfViewer = await loadingTask.promise;
        const totalPages = pdfViewer.numPages;

        // 2. Create new PDF with pdf-lib
        const newPdf = await PDFDocument.create();

        // 3. Render each page to image and embed
        for (let i = 1; i <= totalPages; i++) {
          const page = await pdfViewer.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 }); // Good quality default

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // Render page to canvas
          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;

          // Convert to PNG
          const imgDataUrl = canvas.toDataURL("image/png");
          const imgBytes = await fetch(imgDataUrl).then((res) =>
            res.arrayBuffer()
          );

          // Embed in new PDF
          const img = await newPdf.embedPng(imgBytes);
          const newPage = newPdf.addPage([img.width, img.height]);
          newPage.drawImage(img, {
            x: 0,
            y: 0,
            width: img.width,
            height: img.height,
          });
        }

        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setUnlockedPdfUrl(url);
      } else {
        // --- STANDARD MODE (Preserve Text) ---
        // pdf-lib logic
        const pdfDoc = await PDFDocument.load(arrayBuffer, { password });
        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setUnlockedPdfUrl(url);
      }
    } catch (err) {
      console.error("Error unlocking PDF:", err);
      // Handle incorrect password or encryption errors
      const msg = err.message || "";
      if (
        msg.includes("Password") ||
        msg.includes("decrypt") ||
        msg.includes("encrypted") ||
        msg.name === "PasswordException"
      ) {
        setError(
          "Incorrect password or unsupported encryption. Try using 'Force Unlock' mode."
        );
      } else {
        setError(
          "Failed to unlock PDF. The file might be corrupted or the password logic failed."
        );
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Remove PDF Password</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title="Remove PDF Password">
            <div className="mb-3">
              <label htmlFor="pdf-upload" className="form-label">
                Select Protected PDF
              </label>
              <input
                className="form-control"
                type="file"
                id="pdf-upload"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </div>

            {file && (
              <div className="mb-3">
                <label htmlFor="pdf-password" className="form-label">
                  Enter PDF Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="pdf-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={showPassword ? "uil-eye-slash" : "uil-eye"}
                    ></i>
                  </button>
                </div>
              </div>
            )}

            {file && (
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="force-mode"
                  checked={useForceMode}
                  onChange={(e) => setUseForceMode(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="force-mode">
                  <strong>Force Unlock (Flatten PDF)</strong>
                  <div className="form-text mt-0">
                    Use this if standard unlocking fails (e.g., Aadhaar cards).
                    It converts pages to images, removing all protection but
                    making text unselectable.
                  </div>
                </label>
              </div>
            )}

            {error && <div className="alert alert-danger">{error}</div>}

            <button
              className="btn btn-warning w-100 fw-bold"
              onClick={unlockPdf}
              disabled={!file || !password || isProcessing}
            >
              {isProcessing ? "Unlocking..." : "Unlock & Remove Password"}
            </button>

            {unlockedPdfUrl && (
              <div className="mt-4 text-center">
                <div className="alert alert-success">
                  <i className="uil-unlock me-2"></i>
                  Password removed successfully!
                </div>
                <a
                  href={unlockedPdfUrl}
                  download={`unlocked_${file.name}`}
                  className="btn btn-success"
                >
                  <i className="uil-download-alt me-2"></i>
                  Download Unlocked PDF
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RemovePdfPassword;
