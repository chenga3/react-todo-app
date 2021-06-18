import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [status, setStatus] = useState<string>("OFF");
  const [timeLeft, setTimeLeft] = useState<Array<number>>([0, 0, 0]);
  const [startTime, setStartTime] = useState<Array<number>>([0, 0, 3]);

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

    const checkDone = () => {
      return timeLeft[0] === 0 && timeLeft[1] === 0 && timeLeft[2] === 0;
    };

    const timer = setInterval(() => {
      if (status === "ON") {
        countdown();
      }
    }, 1000);
    if (checkDone()) {
      setStatus("FINISHED");
    }
    return () => clearTimeout(timer);
  }, [status, timeLeft]);

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
