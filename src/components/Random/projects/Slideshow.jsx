import { useState, useEffect } from "react";
import "./css/Slideshow.css";
const colors = ["#727cf5", "#0acf97", "#fa5c7c"];

function Slideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIndex(index === 2 ? 0 : index + 1), 2000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="Container">
      <div
        className="slideContainer"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>

      <div className="dotContainer">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${index === idx && "active"}`}
            onClick={() => {
              setIndex(idx);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIndex(idx);
              }
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
