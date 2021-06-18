import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const countdown = () => {
      setTimeLeft([timeLeft[0], timeLeft[1], timeLeft[2] - 1]);
    };

    const timer = setInterval(() => {
      if (status === "ON") {
        countdown();
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

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
