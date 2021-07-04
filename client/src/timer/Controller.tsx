import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Digit from "./Digit";

interface PropsTypes {
  digit: number;
  addTime: () => void;
  removeTime: () => void;
}

const Controller: React.FC<PropsTypes> = ({ digit, addTime, removeTime }) => {
  return (
    <div>
      <BsChevronUp onClick={addTime} className="w-10 h-10 cursor-pointer" />
      <Digit digit={digit} />
      <BsChevronDown
        onClick={removeTime}
        className="mt-1 w-10 h-10 cursor-pointer"
      />
    </div>
  );
};

export default Controller;
