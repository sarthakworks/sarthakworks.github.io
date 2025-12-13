import React from "react";
import "./css/rating.css";
const Rating = () => {
  const [initialValue, setInitialValue] = React.useState(2);
  const handleClick = (event) => {
    setInitialValue(+event.target.getAttribute("data"));
  };

  return (
    <div onClick={handleClick}>
      {[...new Array(5).keys()].map((param) => (
        <span
          key={param}
          data={param + 1}
          className={param < initialValue ? "star rated" : "star"}
        />
      ))}
    </div>
  );
};

export default Rating;
