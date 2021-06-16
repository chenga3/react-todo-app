export type Timer = {
  cycle: string;
  timeLeft: Array<number>;
  workTime: Array<number>;
  breakTime: Array<number>;
  sound: boolean;
  setCycle: (cycle: string) => void;
  setWorkTime: (workTime: Array<number>) => void;
  setBreakTime: (breakTime: Array<number>) => void;
  setSound: (sound: boolean) => void;
  countdown: () => void;
  reset: (time: Array<number>) => void;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
