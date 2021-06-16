import React from "react";

interface PropsTypes {
  addTime: () => void;
}

const UpController: React.FC<PropsTypes> = ({ addTime }) => {
  return <div onClick={addTime}>^</div>;
};

export default UpController;
