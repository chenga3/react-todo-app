import React from "react";

interface PropsTypes {
  breakTime: number;
  setBreakTime: (breakTime: number) => void;
}

const BreakController: React.FC<PropsTypes> = ({ breakTime, setBreakTime }) => {
  const decrementBreakTime = () => {
    if (breakTime > 0) {
      setBreakTime(breakTime - 1);
    }
  };

  const incrementBreakTime = () => {
    setBreakTime(breakTime + 1);
  };

  return (
    <div className="flex flex-row">
      <div onClick={decrementBreakTime}>&lt;</div>
      <div>{breakTime}</div>
      <div onClick={incrementBreakTime}>&gt;</div>
    </div>
  );
};

export default BreakController;
