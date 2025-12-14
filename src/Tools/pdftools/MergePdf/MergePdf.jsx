import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Card from "../../../components/shared/Card";

const MergePdf = () => {
  const [files, setFiles] = useState([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // Filter for PDF inputs just in case
    const pdfFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...pdfFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const mergePdfs = async () => {
    if (files.length < 2) {
      alert("Please select at least two PDF files to merge.");
      return;
    }

    setIsProcessing(true);
    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setMergedPdfUrl(url);
    } catch (error) {
      console.error("Error merging PDFs:", error);
      alert("An error occurred while merging the files.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Merge PDF Files</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title="Merge PDF Files">
            <div className="mb-3">
              <label htmlFor="pdf-upload" className="form-label">
                Select PDF Files
              </label>
              <input
                className="form-control"
                type="file"
                id="pdf-upload"
                multiple
                accept="application/pdf"
                onChange={handleFileChange}
              />
              <div className="form-text">
                Select multiple files. They will be merged in the order listed
                below.
              </div>
            </div>

            {files.length > 0 && (
              <div className="mb-3">
                <h5>Files to Merge:</h5>
                <ul className="list-group">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {file.name}
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFile(index)}
                      >
                        <i className="uil-trash"></i>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="btn btn-primary w-100 fw-bold"
              onClick={mergePdfs}
              disabled={files.length < 2 || isProcessing}
            >
              {isProcessing ? "Merging..." : "Merge PDFs"}
            </button>

            {mergedPdfUrl && (
              <div className="mt-4 text-center">
                <div className="alert alert-success">
                  <i className="uil-check-circle me-2"></i>
                  PDFs merged successfully!
                </div>
                <a
                  href={mergedPdfUrl}
                  download="merged_document.pdf"
                  className="btn btn-success"
                >
                  <i className="uil-download-alt me-2"></i>
                  Download Merged PDF
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MergePdf;
