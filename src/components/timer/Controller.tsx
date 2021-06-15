import React from "react";

import UpController from "./UpController";
import Digit from "./Digit";
import DownController from "./DownController";

interface PropsTypes {
  cycle: string;
  time: string;
  placeValue: string;
}

const Controller: React.FC<PropsTypes> = ({ cycle, time, placeValue }) => {
  return (
    <div>
      <UpController />
      <Digit />
      <DownController />
    </div>
  );
};

export default Controller;
