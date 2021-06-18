import React, { useEffect, useState } from "react";

import CountdownTimer from "./CountdownTimer";

const PomodoroTimer: React.FC = () => {
  const [workTimerStatus, setWorkTimerStatus] = useState<string>("OFF");
  const [breakTimerStatus, setBreakTimerStatus] = useState<string>("OFF");
  const [status, setStatus] = useState<string>("OFF");

  /** Begins with WORK cycle. */
  const start = () => {
    setStatus("WORK");
  };

  /** Resumes timer after being paused. */
  const resume = () => {
    if (workTimerStatus === "PAUSED") {
      setStatus("WORK");
    } else if (breakTimerStatus === "PAUSED") {
      setStatus("BREAK");
    }
  };

  /** Pauses the timer. */
  const pause = () => {
    setStatus("PAUSED");
    if (status === "WORK") {
      setWorkTimerStatus("PAUSED");
    } else if (status === "BREAK") {
      setBreakTimerStatus("PAUSED");
    }
  };

  /** Resets the timer. */
  const reset = () => {
    setStatus("OFF");
  };

  useEffect(() => {
    // Check if cycle has ended, and switch if so.
    if (status === "WORK") {
      if (workTimerStatus === "FINISHED") {
        setBreakTimerStatus("ON");
        setWorkTimerStatus("OFF");
        setStatus("BREAK");
      }
    } else if (status === "BREAK") {
      if (breakTimerStatus === "FINISHED") {
        setWorkTimerStatus("ON");
        setBreakTimerStatus("OFF");
        setStatus("WORK");
      }
    }
  }, [status, workTimerStatus, breakTimerStatus]);

  useEffect(() => {
    // Ties pomodoro timer status with work/break timer statuses.
    if (status === "OFF") {
      setWorkTimerStatus("OFF");
      setBreakTimerStatus("OFF");
    } else if (status === "WORK") {
      setWorkTimerStatus("ON");
      setBreakTimerStatus("OFF");
    } else if (status === "BREAK") {
      setWorkTimerStatus("OFF");
      setBreakTimerStatus("ON");
    }
  }, [status]);

  return (
    <div>
      <div>Pomodoro timer is in {status} mode</div>
      <CountdownTimer status={workTimerStatus} setStatus={setWorkTimerStatus} />
      <CountdownTimer
        status={breakTimerStatus}
        setStatus={setBreakTimerStatus}
      />
      {status === "PAUSED" ? (
        <div>
          <button onClick={resume}>Resume</button>
          <button onClick={reset}>Reset</button>
        </div>
      ) : status === "OFF" ? (
        <button onClick={start}>Start</button>
      ) : (
        <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}> Pause</button>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
