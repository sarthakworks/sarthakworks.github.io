import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { useTranslation } from "react-i18next";
import Card from "../../../components/shared/Card";

const ImageToPdf = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const [dragId, setDragId] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Validate that only images are selected
    const validImages = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validImages.length < selectedFiles.length) {
      alert("Some selected files were not images and will be ignored.");
    }

    if (validImages.length > 0) {
      const newImages = validImages.map((file) => ({
        id: Math.random().toString(36).substr(2, 9), // unique id for drag
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages((prev) => [...prev, ...newImages]);
      setDownloadUrl(null);
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setDownloadUrl(null);
  };

  const moveImage = (index, direction) => {
    if (
      (direction === -1 && index === 0) ||
      (direction === 1 && index === images.length - 1)
    )
      return;

    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[index + direction];
    newImages[index + direction] = temp;

    setImages(newImages);
    setDownloadUrl(null);
  };

  const handleDragStart = (e, index) => {
    setDragId(index);
    e.dataTransfer.effectAllowed = "move";
    // Transparent image ghost or custom ghost could be set here
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (dragId === null || dragId === dropIndex) return;

    const newImages = [...images];
    const dragItem = newImages[dragId];

    // Remove dragged item
    newImages.splice(dragId, 1);
    // Insert at new position
    newImages.splice(dropIndex, 0, dragItem);

    setImages(newImages);
    setDragId(null);
    setDownloadUrl(null);
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    setDownloadUrl(null);

    try {
      const pdfDoc = await PDFDocument.create();

      for (const imgObj of images) {
        const imgBuffer = await imgObj.file.arrayBuffer();
        let pdfImage;

        // Embed different image types
        if (imgObj.file.type === "image/jpeg") {
          pdfImage = await pdfDoc.embedJpg(imgBuffer);
        } else if (imgObj.file.type === "image/png") {
          pdfImage = await pdfDoc.embedPng(imgBuffer);
        } else {
          // Fallback: draw other formats to canvas and convert to JPEG
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const img = new Image();
          img.src = imgObj.preview;
          await new Promise((resolve) => (img.onload = resolve));

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const jpegDataUrl = canvas.toDataURL("image/jpeg", 0.9);
          const jpegBytes = await fetch(jpegDataUrl).then((res) =>
            res.arrayBuffer()
          );
          pdfImage = await pdfDoc.embedJpg(jpegBytes);
        }

        const page = pdfDoc.addPage([pdfImage.width, pdfImage.height]);
        page.drawImage(pdfImage, {
          x: 0,
          y: 0,
          width: pdfImage.width,
          height: pdfImage.height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
    } catch (error) {
      console.error("Error converting images to PDF:", error);
      alert("An error occurred during conversion.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">
              {t("image_to_pdf") || "Image to PDF"}
            </h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title={t("image_to_pdf") || "Image to PDF"}>
            <div className="mb-4">
              <label htmlFor="image-upload" className="form-label">
                Select Images
              </label>
              <input
                className="form-control"
                type="file"
                id="image-upload"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              <p className="text-muted small mt-1">
                Supported formats: JPG, PNG. Others will be converted
                automatically.
              </p>
            </div>

            {images.length > 0 && (
              <div className="mb-4">
                <h6 className="mb-3">Selected Images ({images.length})</h6>
                <div className="row g-2">
                  {images.map((img, index) => (
                    <div
                      key={img.id || index}
                      className="col-6 col-md-3"
                      draggable={true}
                      role="listitem"
                      aria-label={`Page ${index + 1}`}
                      tabIndex={0}
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
                        if (e.key === "ArrowLeft") moveImage(index, -1);
                        if (e.key === "ArrowRight") moveImage(index, 1);
                      }}
                    >
                      <div className="card h-100 shadow-sm border position-relative">
                        <div
                          className="position-absolute top-0 start-0 p-1 bg-white rounded-bottom-end shadow-sm"
                          style={{
                            zIndex: 10,
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          {index + 1}
                        </div>
                        <img
                          src={img.preview}
                          alt={`Page ${index + 1}`}
                          className="card-img-top object-fit-cover"
                          style={{ height: "120px", pointerEvents: "none" }} // Prevent img from interfering with drag
                        />
                        <div className="card-body p-2 d-flex justify-content-between align-items-center bg-light">
                          <div>
                            <button
                              className="btn btn-sm btn-outline-secondary me-1 p-0 px-1"
                              onClick={() => moveImage(index, -1)}
                              disabled={index === 0}
                              title="Move Left"
                              aria-label="Move Left"
                            >
                              <i className="mdi mdi-chevron-left"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-outline-secondary p-0 px-1"
                              onClick={() => moveImage(index, 1)}
                              disabled={index === images.length - 1}
                              title="Move Right"
                              aria-label="Move Right"
                            >
                              <i className="mdi mdi-chevron-right"></i>
                            </button>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-danger p-0 px-1"
                            onClick={() => removeImage(index)}
                            title="Remove"
                            aria-label="Remove"
                          >
                            <i className="mdi mdi-delete"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              className="btn btn-primary w-100 fw-bold py-2"
              onClick={convertToPdf}
              disabled={images.length === 0 || isProcessing}
            >
              {isProcessing ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Converting...
                </>
              ) : (
                "Convert to PDF"
              )}
            </button>

            {downloadUrl && (
              <div className="mt-4 p-3 bg-light rounded border text-center">
                <h5 className="text-success mb-2">Conversion Complete!</h5>
                <a
                  href={downloadUrl}
                  download="images_converted.pdf"
                  className="btn btn-success fw-bold"
                >
                  <i className="mdi mdi-download me-1"></i> Download PDF
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageToPdf;
