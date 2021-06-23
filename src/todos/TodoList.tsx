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
          <li key={id}>
            <label className={done ? "done-todo" : ""}>
              <input
                type="checkbox"
                checked={done}
                onChange={() => onCheck(id, done)}
              />
              {text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
