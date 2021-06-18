import React, { useState } from "react";

const CountdownTimer: React.FC = () => {
  const [status, setStatus] = useState<string>("OFF");
  const [timeLeft, setTimeLeft] = useState<Array<number>>([0, 0, 0]);
  const [startTime, setStartTime] = useState<Array<number>>([0, 0, 10]);

  const startTimer = () => {
    setTimeLeft([...startTime]);
    setStatus("ON");
  };

  const pause = () => {
    setStatus("PAUSED");
  };

  const reset = () => {
    setTimeLeft([0, 0, 0]);
    setStatus("OFF");
  };

  return (
    <div>
      <div>Timer is {status}</div>
      <div>{timeLeft.join(":")}</div>
      <div>{startTime.join(":")}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
