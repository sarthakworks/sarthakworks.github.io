import React, { useState, useEffect } from "react";

function Debounce() {
  const [deb, setDeb] = useState(0);
  const [thr, setThr] = useState(0);

  function debounce(cb, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  function throttle(cb, delay) {
    let inThrottle;
    return (...args) => {
      if (inThrottle) return;
      inThrottle = true;
      cb(...args);
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    };
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-5">
          <button
            className="btn btn-primary m-1"
            onClick={debounce((e) => setDeb(deb + 1), 1000)}
          >
            Click Me Debounce
          </button>
        </div>
        <div className="col-lg-5">
          <button
            className="btn btn-primary m-1"
            onClick={throttle((e) => console.log("throttle"), 2000)}
          >
            Click Me Throttle
          </button>
        </div>
      </div>

      <div className="mx-1">
        <div className="row">
          <div className="col-lg-5">Debounce: {deb} call sent</div>
          <div className="col-lg-5">Throttle: check console</div>
        </div>
      </div>
    </>
  );
}

export default Debounce;
