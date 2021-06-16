import React from "react";

export const TimerContext = React.createContext({
  on: false,
  cycle: "Work",
  workTimer: {},
  breakTimer: {},
  timeLeft: [0, 0, 0],
  start: () => {},
  pause: () => {},
  reset: () => {},
});
