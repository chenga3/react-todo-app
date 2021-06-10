import React from "react";

interface PropsTypes {
  breakTime: number;
  setBreakTime: (breakTime: number) => void;
}

const BreakController: React.FC<PropsTypes> = ({ breakTime, setBreakTime }) => {
  return <div>{breakTime}</div>;
};

export default BreakController;
