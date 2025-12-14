import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Card from "../../../components/shared/Card";

const SplitPdf = () => {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [range, setRange] = useState("");
  const [splitPdfUrl, setSplitPdfUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setSplitPdfUrl(null);

      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      setPageCount(pdf.getPageCount());
      setRange(`1-${pdf.getPageCount()}`);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const parseRange = (rangeStr, totalPages) => {
    const pages = new Set();
    const parts = rangeStr.split(",");

    parts.forEach((part) => {
      const trimmed = part.trim();
      if (trimmed.includes("-")) {
        const [start, end] = trimmed.split("-").map(Number);
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= totalPages) pages.add(i - 1); // 0-indexed
          }
        }
      } else {
        const pageNum = Number(trimmed);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
          pages.add(pageNum - 1);
        }
      }
    });
    return Array.from(pages).sort((a, b) => a - b);
  };

  const splitPdf = async () => {
    if (!file) return;

    setIsProcessing(true);
    try {
      const pageIndices = parseRange(range, pageCount);

      if (pageIndices.length === 0) {
        alert("Invalid page range. Please check your input.");
        setIsProcessing(false);
        return;
      }

      const arrayBuffer = await file.arrayBuffer();
      const srcPdf = await PDFDocument.load(arrayBuffer);
      const newPdf = await PDFDocument.create();

      const copiedPages = await newPdf.copyPages(srcPdf, pageIndices);
      copiedPages.forEach((page) => newPdf.addPage(page));

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setSplitPdfUrl(url);
    } catch (error) {
      console.error("Error splitting PDF:", error);
      alert("An error occurred while splitting the PDF.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Split / Extract PDF Pages</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title="Split / Extract PDF Pages">
            <div className="mb-3">
              <label htmlFor="split-upload" className="form-label">
                Select PDF File
              </label>
              <input
                className="form-control"
                type="file"
                id="split-upload"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </div>

            {file && (
              <div className="mb-3">
                <div className="alert alert-info py-2">
                  <i className="uil-file-alt me-2"></i>
                  <strong>{file.name}</strong> - {pageCount} Pages
                </div>

                <label htmlFor="page-range" className="form-label">
                  Enter Page Range to Extract (e.g., 1, 3-5, 8)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="page-range"
                  placeholder="e.g. 1-5, 8, 11-13"
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                />
                <div className="form-text">
                  Pages are 1-indexed. The selected pages will be saved into a
                  new PDF.
                </div>
              </div>
            )}

            <button
              className="btn btn-danger w-100 fw-bold"
              onClick={splitPdf}
              disabled={!file || isProcessing}
            >
              {isProcessing ? "Processing..." : "Extract Pages"}
            </button>

            {splitPdfUrl && (
              <div className="mt-4 text-center">
                <div className="alert alert-success">
                  <i className="uil-check-circle me-2"></i>
                  PDF created successfully!
                </div>
                <a
                  href={splitPdfUrl}
                  download={`extracted_${file.name}`}
                  className="btn btn-success"
                >
                  <i className="uil-download-alt me-2"></i>
                  Download Extracted PDF
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SplitPdf;
