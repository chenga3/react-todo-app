export type Timer = {
  on: boolean;
  timeLeft: Array<number>;
  startTime: Array<number>;
  sound: boolean;
  setStartTime: (workTime: Array<number>) => void;
  setSound: (sound: boolean) => void;
  toggle: () => void;
  countdown: () => void;
  reset: (time: Array<number>) => void;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
