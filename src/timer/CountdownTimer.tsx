import React, { useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<Array<number>>([0, 0, 0]);
  const [startTime, setStartTime] = useState<Array<number>>([0, 0, 10]);
  return (
    <div>
      <div>{timeLeft.join(":")}</div>
      <div>{startTime.join(":")}</div>
      <button>Start</button>
    </div>
  );
};

export default CountdownTimer;
