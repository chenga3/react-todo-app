import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { TimerContext } from "./contexts/timer-context";
import { PomodoroTimer, Timer } from "./types";
import Todos from "./pages/Todos";
import Pomodoro from "./pages/Pomodoro";
import Navbar from "./core/Navbar";

const App: React.FC = () => {
  const [cycle, setCycle] = useState<string>("Off");
  const [workTimeLeft, setWorkTimeLeft] = useState<Array<number>>([0, 25, 0]);
  const [breakTimeLeft, setBreakTimeLeft] = useState<Array<number>>([0, 5, 0]);
  const [workTime, setWorkTime] = useState<Array<number>>([0, 25, 0]);
  const [breakTime, setBreakTime] = useState<Array<number>>([0, 5, 0]);
  const [sound, setSound] = useState<boolean>(true);

  const workTimer: Timer = {
    on: false,
    timeLeft: workTimeLeft,
    startTime: workTime,
    sound: sound,
    setStartTime: setWorkTime,
    setSound: setSound,
    countdown: () => {
      if (
        workTimeLeft[0] === 0 &&
        workTimeLeft[1] === 0 &&
        workTimeLeft[2] === 0
      ) {
        workTimer.reset();
      } else if (workTimeLeft[1] === 0 && workTimeLeft[2] === 0) {
        setWorkTimeLeft([workTimeLeft[0] - 1, 59, 59]);
      } else if (workTimeLeft[2] === 0) {
        setWorkTimeLeft([workTimeLeft[0], workTimeLeft[1] - 1, 59]);
      } else {
        setWorkTimeLeft([
          workTimeLeft[0],
          workTimeLeft[1],
          workTimeLeft[2] - 1,
        ]);
      }
    },
    reset: () => {
      setWorkTimeLeft([...workTimer.startTime]);
    },
  };

  const breakTimer: Timer = {
    on: false,
    timeLeft: breakTimeLeft,
    startTime: breakTime,
    sound: sound,
    setStartTime: setBreakTime,
    setSound: setSound,
    countdown: () => {
      if (
        breakTimeLeft[0] === 0 &&
        breakTimeLeft[1] === 0 &&
        breakTimeLeft[2] === 0
      ) {
        breakTimer.reset();
      } else if (breakTimeLeft[1] === 0 && breakTimeLeft[2] === 0) {
        setBreakTimeLeft([breakTimeLeft[0] - 1, 59, 59]);
      } else if (breakTimeLeft[2] === 0) {
        setBreakTimeLeft([breakTimeLeft[0], breakTimeLeft[1] - 1, 59]);
      } else {
        setBreakTimeLeft([
          breakTimeLeft[0],
          breakTimeLeft[1],
          breakTimeLeft[2] - 1,
        ]);
      }
    },
    reset: () => {
      setBreakTimeLeft([...breakTimer.startTime]);
      breakTimer.on = false;
    },
  };

  const pomodoroTimer: PomodoroTimer = {
    on: true,
    cycle: cycle,
    workTimer: workTimer,
    breakTimer: breakTimer,
    countdown: () => {
      console.log(workTimer.on);
      if (cycle === "Work") {
        if (!workTimer.on) {
          // Reached end of the work cycle
          setCycle("Break");
          breakTimer.on = true;
          breakTimer.countdown();
        } else {
          workTimer.countdown();
        }
      } else if (cycle === "Break") {
        if (!breakTimer.on) {
          // Reached end of the break cycle
          setCycle("Work");
          workTimer.on = true;
          workTimer.countdown();
        } else {
          breakTimer.countdown();
        }
      }
    },
    start: () => {
      pomodoroTimer.on = true;
      setCycle("Work"); // Start with work cycle
      workTimer.on = true;
      breakTimer.on = false;
    },
    pause: () => {
      pomodoroTimer.on = false;
    },
    reset: () => {
      pomodoroTimer.on = false;
      pomodoroTimer.cycle = "Work";
    },
  };

  useEffect(() => {
    pomodoroTimer.start();
    console.log(workTimer.on);
  }, []);

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
