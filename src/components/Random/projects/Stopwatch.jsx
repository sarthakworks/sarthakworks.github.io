import { useState, useEffect } from "react";

const initialTime = { h: 1, m: 1, s: 10 };

function Stopwatch() {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (time.s > 0) {
          setTime({ ...time, s: time.s - 1 });
        } else if (time.m > 0) {
          setTime({ ...time, m: time.m - 1, s: 59 });
        } else if (time.h > 0) {
          setTime({ h: time.h - 1, m: 59, s: 59 });
        } else {
          setIsActive(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  function resetHandler() {
    setIsActive(false);
    setTime(initialTime);
  }

  function startHandler() {
    setIsActive(true);
  }

  function pauseHandler() {
    setIsActive(false);
  }
  return (
    <>
      <p>
        {time.h}:{time.m}:{time.s}
      </p>
      <div className="button-list">
        <button className="btn btn-primary" onClick={startHandler}>
          Start
        </button>
        <button className="btn btn-success" onClick={pauseHandler}>
          Pause
        </button>
        <button className="btn btn-danger" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Stopwatch;
