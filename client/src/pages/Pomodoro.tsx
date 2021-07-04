import React from "react";

import Timer from "../timer/PomodoroTimer";
import Quotes from "../timer/Quotes";

const Pomodoro: React.FC = () => {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <div className="grid grid-cols-2 bg-yellow-light">
        <Timer />
        <Quotes />
      </div>
    </div>
  );
};

export default Pomodoro;
