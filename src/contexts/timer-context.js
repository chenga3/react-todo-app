import React from "react";

export const TimerContext = React.createContext({
  on: false,
  cycle: "Work",
  workTimer: {},
  breakTimer: {},
  start: () => {},
  pause: () => {},
  reset: () => {},
});
