import { useState, useMemo } from "react";

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

function Debounce() {
  const [deb, setDeb] = useState(0);
  const [thr, setThr] = useState(0);

  const handleDebounce = useMemo(
    () => debounce(() => setDeb((prev) => prev + 1), 1000),
    []
  );

  const handleThrottle = useMemo(
    () => throttle(() => setThr((prev) => prev + 1), 2000),
    []
  );

  return (
    <>
      <div className="row">
        <div className="col-lg-5">
          <button className="btn btn-primary m-1" onClick={handleDebounce}>
            Click Me Debounce
          </button>
        </div>
        <div className="col-lg-5">
          <button className="btn btn-primary m-1" onClick={handleThrottle}>
            Click Me Throttle
          </button>
        </div>
      </div>

      <div className="mx-1">
        <div className="row">
          <div className="col-lg-5">Debounce: {deb} call sent</div>
          <div className="col-lg-5">Throttle: {thr} call sent</div>
        </div>
      </div>
    </>
  );
}

export default Debounce;
