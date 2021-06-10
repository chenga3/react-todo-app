import React from "react";
import Timer from "../components/timer/timer";
import TimerControllers from "../components/timer/timerControllers";

import { TimerContext } from "../contexts/timer-context";

const Pomodoro: React.FC = () => {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <TimerContext.Consumer>
        {({
          cycle,
          workTime,
          breakTime,
          sound,
          setCycle,
          setWorkTime,
          setBreakTime,
          setSound,
        }) => (
          <div>
            <Timer />
            <TimerControllers
              workTime={workTime}
              breakTime={breakTime}
              setWorkTime={setWorkTime}
              setBreakTime={setBreakTime}
            />
          </div>
        )}
      </TimerContext.Consumer>
    </div>
  );
};

export default Pomodoro;
