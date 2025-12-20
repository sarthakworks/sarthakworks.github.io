import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { PDFDocument } from "pdf-lib";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/shared/Card";

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const RearrangePdf = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragId, setDragId] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [generatedPdfBytes, setGeneratedPdfBytes] = useState(null);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsProcessing(true);
    setDownloadUrl(null);
    setGeneratedPdfBytes(null);

    try {
      const newFiles = [...uploadedFiles];
      const newPages = [...pages];

      for (const file of files) {
        if (file.type !== "application/pdf") continue;

        const fileIndex = newFiles.push(file) - 1;
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        const totalPages = pdf.numPages;

        for (let i = 1; i <= totalPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 0.5 }); // Thumbnail scale

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise;
          const imgUrl = canvas.toDataURL("image/png");

          newPages.push({
            id: await generateId(),
            fileIndex: fileIndex,
            pageIndex: i - 1, // 0-based for pdf-lib
            pageNumber: i, // 1-based for display
            thumbnail: imgUrl,
            fileName: file.name,
          });
        }
      }

      setUploadedFiles(newFiles);
      setPages(newPages);
    } catch (error) {
      console.error("Error loading PDF:", error);
      alert("Error loading PDF files.");
    } finally {
      setIsProcessing(false);
    }
  };

  const generateId = async () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const removePage = (index) => {
    const newPages = [...pages];
    newPages.splice(index, 1);
    setPages(newPages);
    setDownloadUrl(null);
    setGeneratedPdfBytes(null);
  };

  const movePage = (index, direction) => {
    if (
      (direction === -1 && index === 0) ||
      (direction === 1 && index === pages.length - 1)
    )
      return;

    const newPages = [...pages];
    const temp = newPages[index];
    newPages[index] = newPages[index + direction];
    newPages[index + direction] = temp;
    setPages(newPages);
    setDownloadUrl(null);
    setGeneratedPdfBytes(null);
  };

  const handleDragStart = (e, index) => {
    setDragId(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (dragId === null || dragId === dropIndex) return;

    const newPages = [...pages];
    const dragItem = newPages[dragId];
    newPages.splice(dragId, 1);
    newPages.splice(dropIndex, 0, dragItem);

    setPages(newPages);
    setDragId(null);
    setDownloadUrl(null);
    setGeneratedPdfBytes(null);
  };

  const generatePdf = async () => {
    if (pages.length === 0) return;

    setIsProcessing(true);
    setDownloadUrl(null);
    setGeneratedPdfBytes(null);

    try {
      const newPdfDoc = await PDFDocument.create();

      // Cache loaded pdf-lib documents to avoid re-parsing same file multiple times
      const loadedDocs = {};

      for (const pageInfo of pages) {
        const file = uploadedFiles[pageInfo.fileIndex];

        if (!loadedDocs[pageInfo.fileIndex]) {
          const arrayBuffer = await file.arrayBuffer();
          loadedDocs[pageInfo.fileIndex] = await PDFDocument.load(arrayBuffer);
        }

        const sourceDoc = loadedDocs[pageInfo.fileIndex];
        const [copiedPage] = await newPdfDoc.copyPages(sourceDoc, [
          pageInfo.pageIndex,
        ]);
        newPdfDoc.addPage(copiedPage);
      }

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setGeneratedPdfBytes(pdfBytes);
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF.");
    } finally {
      setIsProcessing(false);
    }
  };

  const navigateToCompress = () => {
    if (!generatedPdfBytes) return;

    const blob = new Blob([generatedPdfBytes], { type: "application/pdf" });
    const file = new File([blob], "rearranged.pdf", {
      type: "application/pdf",
    });

    navigate("/pdf-tools/compress", { state: { file: file } });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">
              {t("rearrange_pdf") || "Back To Organize & Edit PDF"}
            </h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <Card title={t("rearrange_pdf") || "Organize & Edit PDF"}>
            <div className="mb-4">
              <label className="form-label btn btn-primary w-100">
                <i className="mdi mdi-upload me-2"></i>{" "}
                {t("add_files") || "Add PDF Files to Merge/Organize"}
                <input
                  type="file"
                  accept="application/pdf"
                  multiple
                  onChange={handleFileChange}
                  hidden
                />
              </label>
              <p className="text-muted small text-center mt-2">
                Upload multiple files. Drag and drop pages to re-order. Output
                can be compressed.
              </p>
            </div>

            {pages.length > 0 && (
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Total Pages: {pages.length}</h5>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      setPages([]);
                      setUploadedFiles([]);
                    }}
                  >
                    Clear All
                  </button>
                </div>

                <div
                  className="row g-3"
                  style={{ maxHeight: "600px", overflowY: "auto" }}
                >
                  {pages.map((page, index) => (
                    <div
                      key={page.id}
                      className="col-6 col-sm-4 col-md-3 col-lg-2"
                      draggable={true}
                      role="button"
                      tabIndex={0}
                      aria-label={`Page ${page.pageNumber} from ${page.fileName}`}
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                      style={{
                        opacity: dragId === index ? 0.4 : 1,
                        cursor: "move",
                        transition: "opacity 0.2s",
                        outline: "none",
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowLeft") movePage(index, -1);
                        if (e.key === "ArrowRight") movePage(index, 1);
                        if (e.key === "Delete" || e.key === "Backspace")
                          removePage(index);
                      }}
                    >
                      <div className="card h-100 shadow-sm border position-relative">
                        <div
                          className="position-absolute top-0 start-0 p-1 bg-white rounded-bottom-end shadow-sm"
                          style={{
                            zIndex: 10,
                            fontSize: "0.7rem",
                            maxWidth: "100%",
                          }}
                        >
                          <div
                            className="text-truncate"
                            style={{ maxWidth: "80px" }}
                            title={page.fileName}
                          >
                            {page.fileName}
                          </div>
                          <div className="fw-bold">P {page.pageNumber}</div>
                        </div>
                        <button
                          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1 p-0 px-1 rounded-circle"
                          style={{
                            width: "24px",
                            height: "24px",
                            lineHeight: "1",
                            zIndex: 20,
                          }}
                          onClick={() => removePage(index)}
                          title="Remove Page"
                        >
                          &times;
                        </button>

                        <div
                          className="d-flex align-items-center justify-content-center bg-light border rounded grow"
                          style={{ minHeight: "150px" }}
                        >
                          <img
                            src={page.thumbnail}
                            alt={`Page ${index + 1}`}
                            className="img-fluid shadow-sm"
                            style={{ maxHeight: "140px" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex gap-2">
              <button
                className="btn btn-success grow fw-bold py-2"
                onClick={generatePdf}
                disabled={pages.length === 0 || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Generating PDF...
                  </>
                ) : (
                  "Generate PDF"
                )}
              </button>

              {downloadUrl && (
                <>
                  <a
                    href={downloadUrl}
                    download="organized_document.pdf"
                    className="btn btn-primary fw-bold py-2"
                  >
                    <i className="mdi mdi-download me-1"></i> Download
                  </a>
                  <button
                    className="btn btn-light border-secondary text-start"
                    onClick={navigateToCompress}
                    title="Feed to Compress Tool"
                  >
                    <i className="mdi mdi-zip-box-outline me-1"></i> Compress
                    Output
                  </button>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RearrangePdf;
