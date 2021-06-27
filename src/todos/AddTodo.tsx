import React from "react";

interface Props {
  input: string;
  setInput: () => void;
  addTodo: (event: React.SyntheticEvent) => void;
}

const AddTodo: React.FC<Props> = ({ input, setInput, addTodo }) => {
  return <div></div>;
};

export default AddTodo;
