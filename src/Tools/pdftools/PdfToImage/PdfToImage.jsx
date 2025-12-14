import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import Card from "../../../components/shared/Card";

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfToImage = () => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [format, setFormat] = useState("image/png");
  const [scale, setScale] = useState(1.5); // Default scale for better quality

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setImages([]);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const convertToImages = async () => {
    if (!file) return;

    setIsProcessing(true);
    setImages([]);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      const totalPages = pdf.numPages;
      const newImages = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        const imgUrl = canvas.toDataURL(format);
        newImages.push({ page: i, url: imgUrl });
      }
      setImages(newImages);
    } catch (error) {
      console.error("Error converting PDF:", error);
      alert("An error occurred during conversion.");
    } finally {
      setIsProcessing(false);
    }
  };

  const extension = format === "image/png" ? "png" : "jpg";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">PDF to Image Converter</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title="PDF to Image Converter">
            <div className="mb-3">
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
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="output-format" className="form-label">
                  Output Format
                </label>
                <select
                  id="output-format"
                  className="form-select"
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                >
                  <option value="image/png">PNG</option>
                  <option value="image/jpeg">JPG</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="output-quality" className="form-label">
                  Quality (Scale)
                </label>
                <select
                  id="output-quality"
                  className="form-select"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                >
                  <option value="1">Standard (1x)</option>
                  <option value="1.5">High (1.5x)</option>
                  <option value="2">Very High (2x)</option>
                </select>
              </div>
            </div>

            <button
              className="btn btn-success w-100 fw-bold"
              onClick={convertToImages}
              disabled={!file || isProcessing}
            >
              {isProcessing ? "Converting..." : "Convert to Images"}
            </button>

            {images.length > 0 && (
              <div className="mt-4">
                <h5>Converted Pages:</h5>
                <div className="row g-3">
                  {images.map((img) => (
                    <div key={img.page} className="col-md-4">
                      <div className="card h-100 shadow-sm">
                        <img
                          src={img.url}
                          className="card-img-top p-2"
                          alt={`Page ${img.page}`}
                          style={{ border: "1px solid #eee" }}
                        />
                        <div className="card-body text-center p-2">
                          <p className="mb-2 small fw-bold">Page {img.page}</p>
                          <a
                            href={img.url}
                            download={`${file.name}_page_${img.page}.${extension}`}
                            className="btn btn-sm btn-outline-primary w-100"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PdfToImage;
