import { useState } from "react";
import Tesseract from "tesseract.js";
import { useTranslation } from "react-i18next";
import Card from "../../../components/shared/Card";

const ImageToText = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setText("");
      setProgress(0);
      processImage(file);
    }
  };

  const processImage = (file) => {
    setIsProcessing(true);
    Tesseract.recognize(file, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .then(({ data: { text } }) => {
        setText(text);
        setIsProcessing(false);
      })
      .catch((err) => {
        console.error(err);
        setIsProcessing(false);
        alert("Failed to extract text.");
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert(t("text_copied") || "Text copied to clipboard!");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">
              {t("image_to_text") || "Image to Text"}
            </h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card title={t("image_to_text") || "Image to Text"}>
            <div className="mb-4">
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {image && (
              <div className="mb-4 text-center">
                <img
                  src={image}
                  alt="Source"
                  className="img-fluid rounded border"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            )}

            {isProcessing && (
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>{t("extracting_text") || "Extracting Text..."}</span>
                  <span>{progress}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            )}

            {text && (
              <div className="mt-4">
                <label className="form-label fw-bold" htmlFor="extracted-text">
                  Extracted Text:
                </label>
                <textarea
                  id="extracted-text"
                  className="form-control mb-3"
                  rows="10"
                  value={text}
                  readOnly
                ></textarea>
                <button className="btn btn-primary" onClick={handleCopy}>
                  <i className="mdi mdi-content-copy me-1"></i>
                  {t("copy_text") || "Copy Text"}
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageToText;
