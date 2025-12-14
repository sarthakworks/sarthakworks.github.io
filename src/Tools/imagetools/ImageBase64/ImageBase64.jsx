import { useState } from "react";

function ImageBase64() {
  const [base64, setBase64] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        // 4MB limit check example
        setError("File size is too large (max 4MB)");
        setBase64("");
        return;
      }
      setError("");

      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result);
      };
      reader.onerror = () => {
        setError("Failed to read file");
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base64);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Image to Base64 Converter</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="fileInput" className="form-label">
                  Upload Image (upto 4MB)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              {base64 && (
                <div className="mt-4">
                  <h5>Base64 Output</h5>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                      rows="8"
                      value={base64}
                      readOnly
                    ></textarea>
                  </div>
                  <button className="btn btn-primary" onClick={copyToClipboard}>
                    <i className="dripicons-copy me-1"></i> Copy Base64
                  </button>

                  <div className="mt-4">
                    <h5>Preview</h5>
                    <img
                      src={base64}
                      alt="Preview"
                      className="img-fluid rounded border p-1"
                      style={{ maxWidth: "300px" }}
                    />
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

export default ImageBase64;
