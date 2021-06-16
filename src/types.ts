export type PomodoroTimer = {
  on: boolean;
  cycle: string;
  workTimer: Timer;
  breakTimer: Timer;
  timeLeft: Array<number>;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

export type Timer = {
  on: boolean;
  timeLeft: Array<number>;
  startTime: Array<number>;
  sound: boolean;
  setStartTime: (workTime: Array<number>) => void;
  setSound: (sound: boolean) => void;
  toggle: () => void;
  countdown: () => void;
  reset: () => void;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
