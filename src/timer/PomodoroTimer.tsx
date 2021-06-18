import React from "react";

import CountdownTimer from "./CountdownTimer";

const PomodoroTimer: React.FC = () => {
  return (
    <div>
      <CountdownTimer />
      <CountdownTimer />
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
