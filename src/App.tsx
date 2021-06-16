import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { TimerContext } from "./contexts/timer-context";
import { Timer } from "./types";
import Todos from "./pages/todos";
import Pomodoro from "./pages/pomodoro";
import Navbar from "./core/navbar";

const App: React.FC = () => {
  const [cycle, setCycle] = useState<string>("Off");
  const [timeLeft, setTimeLeft] = useState<Array<number>>([0, 25, 0]);
  const [workTime, setWorkTime] = useState<Array<number>>([0, 25, 0]);
  const [breakTime, setBreakTime] = useState<Array<number>>([0, 5, 0]);
  const [sound, setSound] = useState<boolean>(true);

  const pomodoroTimer: Timer = {
    cycle: cycle,
    timeLeft: timeLeft,
    workTime: workTime,
    breakTime: breakTime,
    sound: sound,
    setCycle: setCycle,
    setWorkTime: setWorkTime,
    setBreakTime: setBreakTime,
    setSound: setSound,
    countdown: () => {
      if (cycle === "Off") {
        return;
      } else if (timeLeft[0] === 0 && timeLeft[1] === 0 && timeLeft[2] === 0) {
        // move to next state
        if (cycle === "Work") {
          setCycle("Break");
          pomodoroTimer.reset(breakTime);
        } else if (cycle === "Break") {
          setCycle("Work");
          pomodoroTimer.reset(workTime);
        }
      } else if (timeLeft[1] === 0 && timeLeft[2] === 0) {
        setTimeLeft([timeLeft[0] - 1, 59, 59]);
      } else if (timeLeft[2] === 0) {
        setTimeLeft([timeLeft[0], timeLeft[1] - 1, 59]);
      } else {
        setTimeLeft([timeLeft[0], timeLeft[1], timeLeft[2] - 1]);
      }
    },
    reset: (time: Array<number>) => {
      setTimeLeft([...time]);
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      pomodoroTimer.countdown();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <TimerContext.Provider value={pomodoroTimer}>
      <div className="p-4">
        <Navbar />
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
        </Switch>
      </div>
    </TimerContext.Provider>
  );
};

export default App;
