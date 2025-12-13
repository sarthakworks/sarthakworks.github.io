import { useState } from "react";
import "./css/rating.css";
const Rating = () => {
  const [initialValue, setInitialValue] = useState(2);

  return (
    <div>
      {[...new Array(5).keys()].map((param) => (
        <span
          key={param}
          data={param + 1}
          className={param < initialValue ? "star rated" : "star"}
          onClick={() => setInitialValue(param + 1)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setInitialValue(param + 1);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Rating;
