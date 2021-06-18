import React, { useState } from "react";

import CountdownTimer from "./CountdownTimer";

const PomodoroTimer: React.FC = () => {
  const [workTimerStatus, setWorkTimerStatus] = useState<string>("OFF");
  const [breakTimerStatus, setBreakTimerStatus] = useState<string>("OFF");
  const [status, setStatus] = useState<string>("OFF");

  const start = () => {
    setStatus("ON");
    setWorkTimerStatus("ON");
    setBreakTimerStatus("OFF");
  };

  return (
    <div>
      <div>Pomodoro timer is {status}</div>
      <CountdownTimer status={workTimerStatus} setStatus={setWorkTimerStatus} />
      <CountdownTimer
        status={breakTimerStatus}
        setStatus={setBreakTimerStatus}
      />
      <button onClick={start}>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
