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

  const workTimer: Timer = {
    on: false,
    timeLeft: timeLeft,
    startTime: workTime,
    sound: sound,
    setStartTime: setWorkTime,
    setSound: setSound,
    toggle: () => {
      workTimer.on = !workTimer.on;
    },
    countdown: () => {
      if (timeLeft[0] === 0 && timeLeft[1] === 0 && timeLeft[2] === 0) {
        workTimer.reset();
      } else if (timeLeft[1] === 0 && timeLeft[2] === 0) {
        setTimeLeft([timeLeft[0] - 1, 59, 59]);
      } else if (timeLeft[2] === 0) {
        setTimeLeft([timeLeft[0], timeLeft[1] - 1, 59]);
      } else {
        setTimeLeft([timeLeft[0], timeLeft[1], timeLeft[2] - 1]);
      }
    },
    reset: () => {
      setTimeLeft([...workTimer.startTime]);
    },
  };

  const breakTimer: Timer = {
    on: false,
    timeLeft: timeLeft,
    startTime: breakTime,
    sound: sound,
    setStartTime: setBreakTime,
    setSound: setSound,
    toggle: () => {
      breakTimer.on = !breakTimer.on;
    },
    countdown: () => {
      if (timeLeft[0] === 0 && timeLeft[1] === 0 && timeLeft[2] === 0) {
        breakTimer.reset();
      } else if (timeLeft[1] === 0 && timeLeft[2] === 0) {
        setTimeLeft([timeLeft[0] - 1, 59, 59]);
      } else if (timeLeft[2] === 0) {
        setTimeLeft([timeLeft[0], timeLeft[1] - 1, 59]);
      } else {
        setTimeLeft([timeLeft[0], timeLeft[1], timeLeft[2] - 1]);
      }
    },
    reset: () => {
      setTimeLeft([...breakTimer.startTime]);
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      workTimer.countdown();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <TimerContext.Provider value={workTimer}>
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
