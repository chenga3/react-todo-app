import React from "react";

import Button from "../core/Button";

interface Props {
  input: string;
  setInput: (input: string) => void;
  addTodo: (event: React.SyntheticEvent) => void;
}

const AddTodo: React.FC<Props> = ({ input, setInput, addTodo }) => {
  return (
    <div>
      <h1 className="text-3xl">Add Todo</h1>
      <form>
        <input
          className="border-2"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <br />
        <Button label="Add" onClick={addTodo} />
      </form>
    </div>
  );
};

export default AddTodo;
