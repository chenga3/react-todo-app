import React from "react";

import Timer from "../timer/PomodoroTimer";

const Pomodoro: React.FC = () => {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <Timer />
    </div>
  );
};

export default Pomodoro;
