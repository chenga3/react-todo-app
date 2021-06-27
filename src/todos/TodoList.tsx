import React from "react";

import { Todo } from "../types";

interface Props {
  todos: Array<Todo>;
  onCheck: (id: number, done: boolean) => void;
}

const TodoList: React.FC<Props> = ({ todos, onCheck }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Todo List</h1>
      <ul>
        {todos.map(({ id, text, done }) => (
          <li key={id} className="py-0.5">
            <input
              type="checkbox"
              className="mx-3 transform scale-150"
              checked={done}
              onChange={() => onCheck(id, done)}
            />
            <span className={done ? "line-through" : ""}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
