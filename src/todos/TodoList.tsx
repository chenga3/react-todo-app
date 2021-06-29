import React from "react";

import { Todo } from "../types";

interface Props {
  todos: Array<Todo>;
  onCheck: (_id: number, text: string, done: boolean) => void;
}

const TodoList: React.FC<Props> = ({ todos, onCheck }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Todo List</h1>
      <ul>
        {todos.map(({ _id, text, done }) => (
          <li key={_id} className="py-0.5">
            <input
              type="checkbox"
              className="mx-3 transform scale-150"
              checked={done}
              onChange={() => onCheck(_id, text, done)}
            />
            <span className={done ? "line-through" : ""}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
