import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { TimerContext } from "./contexts/timer-context";
import { Timer } from "./types";
import Todos from "./pages/todos";
import Pomodoro from "./pages/pomodoro";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  const [cycle, setCycle] = useState<string>("Off");
  const [workTime, setWorkTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [sound, setSound] = useState<boolean>(true);

  const timer: Timer = {
    cycle: cycle,
    workTime: workTime,
    breakTime: breakTime,
    sound: sound,
    setCycle: setCycle,
    setWorkTime: setWorkTime,
    setBreakTime: setBreakTime,
    setSound: setSound,
  };

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
