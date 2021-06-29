import React from "react";

interface PropsTypes {
  removeTime: () => void;
}

const DownController: React.FC<PropsTypes> = ({ removeTime }) => {
  return <div onClick={removeTime}>\/</div>;
};

export default DownController;
