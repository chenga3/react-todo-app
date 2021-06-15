import React from "react";

export const TimerContext = React.createContext({
  cycle: "Off",
  hrsLeft: 0,
  minsLeft: 25,
  secsLeft: 0,
  workTime: 25,
  breakTime: 5,
  sound: true,
  setCycle: (cycle) => {},
  setWorkTime: (workTime) => {},
  setBreakTime: (breakTime) => {},
  setSound: (sound) => {},
});
