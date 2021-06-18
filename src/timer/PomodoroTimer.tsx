import React, { useEffect, useState } from "react";

import CountdownTimer from "./CountdownTimer";

const PomodoroTimer: React.FC = () => {
  const [workTimerStatus, setWorkTimerStatus] = useState<string>("OFF");
  const [breakTimerStatus, setBreakTimerStatus] = useState<string>("OFF");
  const [status, setStatus] = useState<string>("OFF");

  const start = () => {
    setStatus("WORK");
    setWorkTimerStatus("ON");
    setBreakTimerStatus("OFF");
  };

  const pause = () => {
    setStatus("PAUSED");
    if (status === "WORK") {
      setWorkTimerStatus("PAUSED");
    } else if (status === "BREAK") {
      setBreakTimerStatus("PAUSED");
    }
  };

  useEffect(() => {
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

  return (
    <div>
      <div>Pomodoro timer is in {status} mode</div>
      <CountdownTimer status={workTimerStatus} setStatus={setWorkTimerStatus} />
      <CountdownTimer
        status={breakTimerStatus}
        setStatus={setBreakTimerStatus}
      />
      <button onClick={start}>Start</button>
      <button onClick={pause}> Pause</button>
      <button>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
