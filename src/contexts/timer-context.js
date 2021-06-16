import React from "react";

export const TimerContext = React.createContext({
  cycle: "Off",
  timeLeft: [0, 25, 0],
  workTime: [0, 25, 0],
  breakTime: [0, 5, 0],
  sound: true,
  setCycle: (cycle) => {},
  setWorkTime: (workTime) => {},
  setBreakTime: (breakTime) => {},
  setSound: (sound) => {},
  countdown: () => {},
  reset: (time) => {},
});
