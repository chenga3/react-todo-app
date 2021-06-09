import React from "react";
import WorkController from "./WorkController";
import BreakController from "./BreakController";

const TimerController: React.FC = () => {
  return (
    <div>
      <WorkController />
      <BreakController />
    </div>
  );
};

export default TimerController;
