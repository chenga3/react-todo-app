import React from "react";

import UpController from "./UpController";
import Digit from "./Digit";
import DownController from "./DownController";

interface PropsTypes {
  digit: number;
  addTime: () => void;
  removeTime: () => void;
}

const Controller: React.FC<PropsTypes> = ({ digit, addTime, removeTime }) => {
  return (
    <div>
      <UpController addTime={addTime} />
      <Digit digit={digit} />
      <DownController removeTime={removeTime} />
    </div>
  );
};

export default Controller;
