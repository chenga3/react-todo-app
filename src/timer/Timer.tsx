import React from "react";

import { TimerContext } from "../contexts/timer-context";

const Timer: React.FC = () => {
  return (
    <TimerContext.Consumer>{(timer) => <div></div>}</TimerContext.Consumer>
  );
};

export default Timer;
