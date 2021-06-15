import React from "react";

interface PropsTypes {
  hrsLeft: number;
  minsLeft: number;
  secsLeft: number;
}

const Timer: React.FC<PropsTypes> = ({ hrsLeft, minsLeft, secsLeft }) => {
  /** Pads time with a 0 on the left if less than 10 */
  const padTime = (time: number) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <div>
      <span>
        {padTime(hrsLeft)} : {padTime(minsLeft)} : {padTime(secsLeft)}
      </span>
    </div>
  );
};

export default Timer;
