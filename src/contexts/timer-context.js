import React from "react";

export const TimerContext = React.createContext({
  on: false,
  timeLeft: [0, 0, 0],
  startTime: [0, 0, 0],
  sound: true,
  setStartTime: (startTime) => {},
  setSound: (sound) => {},
  toggle: () => {},
  countdown: () => {},
  reset: () => {},
});
