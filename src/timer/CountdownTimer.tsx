import React, { useState } from "react";

const CountdownTimer: React.FC = () => {
  const [status, setStatus] = useState<string>("OFF");
  const [timeLeft, setTimeLeft] = useState<Array<number>>([0, 0, 0]);
  const [startTime, setStartTime] = useState<Array<number>>([0, 0, 10]);

  const startTimer = () => {
    setTimeLeft([...startTime]);
    setStatus("ON");
  };

  return (
    <div>
      <div>Timer is {status}</div>
      <div>{timeLeft.join(":")}</div>
      <div>{startTime.join(":")}</div>
      <button onClick={startTimer}>Start</button>
    </div>
  );
};

export default CountdownTimer;
