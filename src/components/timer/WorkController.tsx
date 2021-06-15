import React from "react";

interface PropsTypes {
  workTime: number;
  setWorkTime: (workTime: number) => void;
}

const WorkController: React.FC<PropsTypes> = ({ workTime, setWorkTime }) => {
  const decrementWorkTime = () => {
    if (workTime > 0) {
      setWorkTime(workTime - 1);
    }
  };

  const incrementWorkTime = () => {
    setWorkTime(workTime + 1);
  };

  return (
    <div className="flex flex-row">
      <div onClick={decrementWorkTime}>&lt;</div>
      <div>{workTime}</div>
      <div onClick={incrementWorkTime}>&gt;</div>
    </div>
  );
};

export default WorkController;
