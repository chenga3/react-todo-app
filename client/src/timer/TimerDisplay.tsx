import React from "react";
import Controller from "./Controller";
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
  const addTen = (i: number) => {
    if (startTime[i] < 50) {
      var newTime = [...startTime];
      newTime[i] += 10;
      setStartTime(newTime);
    }
  };

  const removeTen = (i: number) => {
    if (startTime[i] >= 10) {
      var newTime = [...startTime];
      newTime[i] -= 10;
      setStartTime(newTime);
    }
  };

  const addOne = (i: number) => {
    if (startTime[i] % 10 < 9) {
      var newTime = [...startTime];
      newTime[i] += 1;
      setStartTime(newTime);
    }
  };

  const removeOne = (i: number) => {
    if (startTime[i] % 10 > 0) {
      var newTime = [...startTime];
      newTime[i] -= 1;
      setStartTime(newTime);
    }
  };
  return (
    <div>
      {on ? (
        <div className="ml-4 flex flex-row space-x-0.5 place-items-center text-7xl">
          <Digit digit={Math.floor(timeLeft[0] / 10)} />
          <Digit digit={timeLeft[0] % 10} />
          <div>:</div>
          <Digit digit={Math.floor(timeLeft[1] / 10)} />
          <Digit digit={timeLeft[1] % 10} />
          <div>:</div>
          <Digit digit={Math.floor(timeLeft[2] / 10)} />
          <Digit digit={timeLeft[2] % 10} />
        </div>
      ) : (
        <div className="ml-4 flex flex-row space-x-0.5 place-items-center text-7xl">
          <Controller
            digit={Math.floor(startTime[0] / 10)}
            addTime={() => addTen(0)}
            removeTime={() => removeTen(0)}
          />
          <Controller
            digit={startTime[0] % 10}
            addTime={() => addOne(0)}
            removeTime={() => removeOne(0)}
          />
          <div className="mb-4">:</div>
          <Controller
            digit={Math.floor(startTime[1] / 10)}
            addTime={() => addTen(1)}
            removeTime={() => removeTen(1)}
          />
          <Controller
            digit={startTime[1] % 10}
            addTime={() => addOne(1)}
            removeTime={() => removeOne(1)}
          />
          <div className="mb-4">:</div>
          <Controller
            digit={Math.floor(startTime[2] / 10)}
            addTime={() => addTen(2)}
            removeTime={() => removeTen(2)}
          />
          <Controller
            digit={startTime[2] % 10}
            addTime={() => addOne(2)}
            removeTime={() => removeOne(2)}
          />
        </div>
      )}
    </div>
  );
};

export default TimerDisplay;
