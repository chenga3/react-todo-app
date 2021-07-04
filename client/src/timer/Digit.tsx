import React from "react";

interface Props {
  digit: number;
}

const Digit: React.FC<Props> = ({ digit }) => {
  return <div>{digit}</div>;
};

export default Digit;
