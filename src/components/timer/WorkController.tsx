import React from "react";

interface PropsTypes {
  workTime: number;
  setWorkTime: (workTime: number) => void;
}

const WorkController: React.FC<PropsTypes> = ({ workTime, setWorkTime }) => {
  return <div>{workTime}</div>;
};

export default WorkController;
