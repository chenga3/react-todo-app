export type Timer = {
  cycle: string;
  hrsLeft: number;
  minsLeft: number;
  secsLeft: number;
  workTime: number;
  breakTime: number;
  sound: boolean;
  setCycle: (cycle: string) => void;
  setWorkTime: (workTime: number) => void;
  setBreakTime: (breakTime: number) => void;
  setSound: (sound: boolean) => void;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
