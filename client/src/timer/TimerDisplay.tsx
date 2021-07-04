import React from "react";
import Digit from "./Digit";

interface Props {
  on: boolean;
  setStartTime: (startTime: Array<number>) => void;
  startTime: Array<number>;
  timeLeft: Array<number>;
}

const TimerDisplay: React.FC<Props> = ({
  on,
  setStartTime,
  startTime,
  timeLeft,
}) => {
  if (on) {
    return (
      <div className="flex flex-row text-7xl">
        <Digit digit={Math.floor(timeLeft[0] / 10)} />
        <Digit digit={timeLeft[0] % 10} />
        <div>:</div>
        <Digit digit={Math.floor(timeLeft[1] / 10)} />
        <Digit digit={timeLeft[1] % 10} />
        <div>:</div>
        <Digit digit={Math.floor(timeLeft[2] / 10)} />
        <Digit digit={timeLeft[2] % 10} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-row text-7xl">
          <div>
            <Digit digit={Math.floor(startTime[0] / 10)} />
          </div>
          <div>
            <Digit digit={startTime[0] % 10} />
          </div>
          <div>:</div>
          <div>
            <Digit digit={Math.floor(startTime[1] / 10)} />
          </div>
          <div>
            <Digit digit={startTime[1] % 10} />
          </div>
          <div>:</div>
          <div>
            <Digit digit={Math.floor(startTime[2] / 10)} />
          </div>
          <div>
            <Digit digit={startTime[2] % 10} />
          </div>
        </div>
      </div>
    );
  }
};

export default TimerDisplay;
