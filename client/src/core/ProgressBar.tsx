import React from "react";

interface Props {
  fillColor: string;
  percentDone: number;
}

const ProgressBar: React.FC<Props> = ({ fillColor, percentDone }) => {
  return (
    <div className="h-2 w-64 mx-auto mt-2 rounded-full overflow-hidden relative">
      <div className="w-full h-full bg-grey-light absolute"></div>
      <div
        className={"h-full absolute " + fillColor}
        style={{ width: percentDone + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
