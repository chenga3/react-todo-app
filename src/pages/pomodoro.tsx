import React from "react";
import Timer from "../components/timer/timer";
import TimerControllers from "../components/timer/timerControllers";

const Pomodoro: React.FC = () => {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <Timer />
      <TimerControllers />
    </div>
  );
};

export default Pomodoro;
