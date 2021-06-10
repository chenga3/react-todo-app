import React from "react";
import WorkController from "./WorkController";
import BreakController from "./BreakController";

interface PropTypes {
  workTime: number;
  breakTime: number;
  setWorkTime: (workTime: number) => void;
  setBreakTime: (breakTime: number) => void;
}

const TimerController: React.FC<PropTypes> = ({
  workTime,
  breakTime,
  setWorkTime,
  setBreakTime,
}) => {
  return (
    <div>
      <WorkController workTime={workTime} setWorkTime={setWorkTime} />
      <BreakController breakTime={breakTime} setBreakTime={setBreakTime} />
    </div>
  );
};

export default TimerController;
