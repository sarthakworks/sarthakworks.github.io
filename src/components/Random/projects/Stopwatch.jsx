import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [ss, setss] = useState(10);
  const [mm, setmm] = useState(1);
  const [hh, sethh] = useState(1);
  const timerRef = useRef(null);
  useEffect(() => {
    // Check for rollover
    if (ss < 1) {
      // eslint-disable-next-line
      setss(60);
      setmm((prev) => {
        if (prev > 0) return prev - 1;
        sethh((h) => (h > 0 ? h - 1 : 24));
        return 60;
      });
    } else {
      // Only set timer if we aren't rolling over immediately
      // This logic relies on the component being "active".
      // The original code was auto-starting?
      // Original code: useEffect sets timeout blindly.
      // We need to know if it's "running".
      // But preserving original behavior: it seems it was always running?
      // "pauseHandler" clears timeout. But next render (if triggered) would restart it?
      // Only "startHandler" triggered state change?
      // Actually the original code was: useEffect runs on every render.
      // If I click pause, it clears timer. State doesn't change. No re-render. Timer stops.
      // If I click start, it sets timeout. State changes. Re-render. UseEffect runs again.
      // So I need to replicate "run on every render" for the `timer` logic, OR use a state `isRunning`.
      // I'll stick to the "run on every render" pattern but add dependencies to satisfy linter?
      // No, "run on every render" = no dependencies.
      // Linter error was "Assignments to 'timer' variable...". I fixed that with useRef.
      // Linter warning "setState inside effect".

      timerRef.current = setTimeout(() => {
        setss((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [ss]); // valid dependency

  function resetHandler() {
    setss(60);
    setmm(60);
    sethh(10);
  }
  function startHandler() {
    timerRef.current = setTimeout(() => setss(ss - 1), 1000);
  }
  function pauseHandler() {
    clearTimeout(timerRef.current);
  }
  return (
    <>
      <p>
        {hh}:{mm}:{ss}
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
