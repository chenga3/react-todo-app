import React, { useEffect, useState } from "react";

interface PropsType {
  status: string;
  setStatus: (status: string) => void;
}

const CountdownTimer: React.FC<PropsType> = ({ status, setStatus }) => {
  const [timeLeft, setTimeLeft] = useState<Array<number>>([-1, -1, -1]);
  const [startTime, setStartTime] = useState<Array<number>>([0, 0, 3]);

  /** Sets timer status to ON */
  const startTimer = () => {
    setStatus("ON");
  };

  /** Sets timer status to PAUSED */
  const pause = () => {
    setStatus("PAUSED");
  };

  /** Sets timer status to OFF */
  const reset = () => {
    setStatus("OFF");
  };

  useEffect(() => {
    /** Decrements time left */
    const countdown = () => {
      if (timeLeft[0] <= 0 && timeLeft[1] <= 0 && timeLeft[2] <= 0) {
        // Do nothing
        return;
      } else if (timeLeft[0] > 0 && timeLeft[1] === 0 && timeLeft[2] === 0) {
        // Decrement hour
        setTimeLeft([timeLeft[0] - 1, 59, 59]);
      } else if (timeLeft[0] >= 0 && timeLeft[1] > 0 && timeLeft[2] === 0) {
        // Decrement minute
        setTimeLeft([timeLeft[0], timeLeft[1] - 1, 59]);
      } else {
        // Decrement second
        setTimeLeft([timeLeft[0], timeLeft[1], timeLeft[2] - 1]);
      }
    };

    // When the timer is off, time left should equal the start time
    if (status === "OFF") {
      setTimeLeft([...startTime]);
    }

    // Countdown whenever the timer is on
    const timer = setInterval(() => {
      if (status === "ON") {
        countdown();
      }
    }, 1000);

    return () => clearTimeout(timer); // Avoid overlapping timers
  }, [startTime, status, timeLeft]);

  useEffect(() => {
    /** Checks if time left is 0 */
    const checkDone = () => {
      return timeLeft[0] === 0 && timeLeft[1] === 0 && timeLeft[2] === 0;
    };

    // Set status to FINISHED if timer hits 0
    if (checkDone()) {
      setStatus("FINISHED");
    }
  }, [timeLeft]);

  return (
    <div>
      <div>Timer is {status}</div>
      <div>{timeLeft.join(":")}</div>
      <div>{startTime.join(":")}</div>
      {/* <button onClick={startTimer}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
};

export default CountdownTimer;
