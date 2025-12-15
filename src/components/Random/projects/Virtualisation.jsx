import { useState, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";

function Virtualisation() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ height: "300px", width: "100%" }}>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Virtuoso
          style={{ height: "100%", width: "100%" }}
          totalCount={data.length}
          itemContent={(index) => (
            <div className="d-flex align-items-center border-bottom px-2 py-2">
              <span className="fw-bold me-2">#{data[index].id}</span>
              <span className="text-truncate" title={data[index].title}>
                {data[index].title}
              </span>
            </div>
          )}
        />
      )}
    </div>
  );
}

export default Virtualisation;
