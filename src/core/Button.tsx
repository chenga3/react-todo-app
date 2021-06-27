import React from "react";

interface PropsType {
  label: string;
  onClick?: (event: React.SyntheticEvent) => void;
}

const Button: React.FC<PropsType> = ({ label, onClick }) => {
  return (
    <button
      className="w-20 px-4 py-1 bg-grey-light hover:bg-grey rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
