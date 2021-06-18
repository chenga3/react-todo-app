import React, { useState } from "react";

import CountdownTimer from "./CountdownTimer";

const PomodoroTimer: React.FC = () => {
  const [workTimerStatus, setWorkTimerStatus] = useState<string>("OFF");
  const [breakTimerStatus, setBreakTimerStatus] = useState<string>("OFF");
  const [status, setStatus] = useState<string>("OFF");

  return (
    <div>
      <div>Pomodoro timer is {status}</div>
      <CountdownTimer status={workTimerStatus} setStatus={setWorkTimerStatus} />
      <CountdownTimer
        status={breakTimerStatus}
        setStatus={setBreakTimerStatus}
      />
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
