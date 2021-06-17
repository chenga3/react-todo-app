import React from "react";

import { PomodoroTimer, Timer } from "../types";

const workTimer: Timer = {
  on: false,
  timeLeft: [0, 25, 0],
  startTime: [0, 25, 0],
  sound: true,
  setStartTime: (workTime) => {},
  setSound: (sound) => {},
  toggle: () => {},
  countdown: () => {},
  reset: () => {},
};

const breakTimer: Timer = {
  on: false,
  timeLeft: [0, 25, 0],
  startTime: [0, 25, 0],
  sound: true,
  setStartTime: (breakTime) => {},
  setSound: (sound) => {},
  toggle: () => {},
  countdown: () => {},
  reset: () => {},
};

const pomodoroTimer: PomodoroTimer = {
  on: false,
  cycle: "Work",
  workTimer: workTimer,
  breakTimer: breakTimer,
  countdown: () => {},
  start: () => {},
  pause: () => {},
  reset: () => {},
};

export const TimerContext = React.createContext(pomodoroTimer);
