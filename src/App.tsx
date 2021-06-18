import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { TimerContext } from "./contexts/timer-context";
import { PomodoroTimer, Timer } from "./types";
import Todos from "./pages/Todos";
import Pomodoro from "./pages/Pomodoro";
import Navbar from "./core/Navbar";

const App: React.FC = () => {
  const [cycle, setCycle] = useState<string>("Off");
  const [workTimerOn, setWorkTimerOn] = useState<boolean>(false);
  const [breakTimerOn, setBreakTimerOn] = useState<boolean>(false);
  const [pomodoroTimerOn, setPomodoroTimerOn] = useState<boolean>(false);
  const [workTimeLeft, setWorkTimeLeft] = useState<Array<number>>([0, 0, 10]);
  const [breakTimeLeft, setBreakTimeLeft] = useState<Array<number>>([0, 0, 5]);
  const [workTime, setWorkTime] = useState<Array<number>>([0, 0, 10]);
  const [breakTime, setBreakTime] = useState<Array<number>>([0, 0, 5]);
  const [sound, setSound] = useState<boolean>(true);

  const workTimer: Timer = {
    on: workTimerOn,
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
      setWorkTimerOn(false);
    },
  };

  const breakTimer: Timer = {
    on: breakTimerOn,
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
      setBreakTimerOn(false);
    },
  };

  const pomodoroTimer: PomodoroTimer = {
    on: pomodoroTimerOn,
    cycle: cycle,
    workTimer: workTimer,
    breakTimer: breakTimer,
    countdown: () => {
      if (cycle === "Work") {
        workTimer.countdown();
        if (!workTimer.on) {
          // Reached end of the work cycle
          setCycle("Break");
          setBreakTimerOn(true);
          breakTimer.countdown();
        }
      } else if (cycle === "Break") {
        breakTimer.countdown();
        if (!breakTimer.on) {
          // Reached end of the break cycle
          setCycle("Work");
          setWorkTimerOn(true);
          workTimer.countdown();
        }
      }
    },
    start: () => {
      setPomodoroTimerOn(true);
      setCycle("Work"); // Start with work cycle
      setWorkTimerOn(true);
      setBreakTimerOn(false);
    },
    pause: () => {
      setPomodoroTimerOn(false);
    },
    reset: () => {
      setPomodoroTimerOn(false);
      setCycle("Work");
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
