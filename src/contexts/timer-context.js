import React from "react";

export const TimerContext = React.createContext({
  cycle: "Off",
  workTime: 25,
  breakTime: 5,
  sound: true,
  setCycle: () => {},
  setWorkTime: () => {},
  setBreakTime: () => {},
  setSound: () => {},
});
