import React, { useEffect, useState } from "react";
import ProgressBar from "../core/ProgressBar";
import SubHeading from "../core/SubHeading";

interface PropsType {
  title: string;
  status: string;
  setStatus: (status: string) => void;
}

const CountdownTimer: React.FC<PropsType> = ({ title, status, setStatus }) => {
  const [timeLeft, setTimeLeft] = useState<Array<number>>([-1, -1, -1]);
  const [startTime, setStartTime] = useState<Array<number>>([0, 0, 5]);
  const [percentDone, setPercentDone] = useState<number>(0);

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

    // Update percentDone state
    setPercentDone(
      100 -
        ((timeLeft[0] * 3600 + timeLeft[1] * 60 + timeLeft[2]) /
          (startTime[0] * 3600 + startTime[1] * 60 + startTime[2])) *
          100
    );

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

  const bgColor =
    status === "ON"
      ? "bg-green-dark"
      : status === "PAUSED"
      ? "bg-orange"
      : "bg-yellow";

  return (
    <div className="flex flex-col place-items-center">
      <SubHeading text={title} />
      <div
        className={
          "w-72 py-4 text-7xl text-center rounded-3xl shadow-md " + bgColor
        }
      >
        {timeLeft.join(":")}
        <ProgressBar
          fillColor={status === "PAUSED" ? "bg-grey" : "bg-green-light"}
          percentDone={percentDone}
        />
      </div>
      <div>{startTime.join(":")}</div>
    </div>
  );
};

export default CountdownTimer;
