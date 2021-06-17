import React from "react";

import { TimerContext } from "../contexts/timer-context";

const Timer: React.FC = () => {
  return (
    <TimerContext.Consumer>
      {(timer) => (
        <div>
          <h2>Work Timer</h2>
          {timer.workTimer.timeLeft.join(":")}
          <br />
          <h2>Break Timer</h2>
          {timer.breakTimer.timeLeft.join(":")}
        </div>
      )}
    </TimerContext.Consumer>
  );
};

export default Timer;
