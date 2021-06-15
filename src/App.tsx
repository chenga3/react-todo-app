import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { TimerContext } from "./contexts/timer-context";
import { Timer } from "./types";
import Todos from "./pages/todos";
import Pomodoro from "./pages/pomodoro";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  const [cycle, setCycle] = useState<string>("Off");
  const [hrsLeft, setHrsLeft] = useState<number>(0);
  const [minsLeft, setMinsLeft] = useState<number>(25);
  const [secsLeft, setSecsLeft] = useState<number>(0);
  const [workTime, setWorkTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [sound, setSound] = useState<boolean>(true);

  const timer: Timer = {
    cycle: cycle,
    hrsLeft: hrsLeft,
    minsLeft: minsLeft,
    secsLeft: secsLeft,
    workTime: workTime,
    breakTime: breakTime,
    sound: sound,
    setCycle: setCycle,
    setWorkTime: setWorkTime,
    setBreakTime: setBreakTime,
    setSound: setSound,
  };

  const countDown = () => {
    if (hrsLeft === 0 && minsLeft === 0 && secsLeft === 0) {
      // move to next state
    } else if (minsLeft === 0 && secsLeft === 0) {
      setHrsLeft(hrsLeft - 1);
      setMinsLeft(59);
      setSecsLeft(59);
    } else if (secsLeft === 0) {
      setMinsLeft(minsLeft - 1);
      setSecsLeft(59);
    } else {
      setSecsLeft(secsLeft - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      countDown();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <TimerContext.Provider value={timer}>
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
