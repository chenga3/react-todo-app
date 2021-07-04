import React from "react";

interface Props {
  text: string;
}

const SubHeading: React.FC<Props> = ({ text }) => {
  return <h2 className="mb-4 text-3xl font-semibold">{text}</h2>;
};

export default SubHeading;
