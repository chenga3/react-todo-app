import React from "react";

interface PropsTypes {
  digit: number;
}

const Digit: React.FC<PropsTypes> = ({ digit }) => {
  return <div>{digit}</div>;
};

export default Digit;
