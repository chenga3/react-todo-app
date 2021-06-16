import React, { useState } from "react";

import UpController from "./UpController";
import Digit from "./Digit";
import DownController from "./DownController";

interface PropsTypes {
  cycle: string;
  time: number;
  placeValue: string;
}

const Controller: React.FC<PropsTypes> = ({ cycle, time, placeValue }) => {
  const [digit, setDigit] = useState<number>(0);

  const addTime = () => {};

  const removeTime = () => {};

  return (
    <div>
      <UpController addTime={addTime} />
      <Digit digit={digit} />
      <DownController removeTime={removeTime} />
    </div>
  );
};

export default Controller;
