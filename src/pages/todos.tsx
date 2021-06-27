import React, { useState, useEffect } from "react";

import Button from "../core/Button";
import AddTodo from "../todos/AddTodo";
import TodoList from "../todos/TodoList";
import { inMemoryTodoService } from "../services/todos-service";
import type { Todo } from "../types";

const service = inMemoryTodoService();
//const service = localStorageTodoService();

var nextid = 0;

const Todos = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  /** Loads stored todos into state on intial render. */
  useEffect(() => {
    const fetchedTodos = service.load();
    setTodos(fetchedTodos);
  }, []);

  /** Adds the user input todo to their todo list. */
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    var newTodo = {
      id: nextid,
      text: input,
      done: false,
    };
    nextid++;
    service.create(newTodo);
    setTodos([...todos, newTodo]);
    setInput("");
  };

  /** Toggles todos between 'done' and 'not done' states. */
  const handleChecked = (id: number, done: boolean) => {
    service.updateDone(id, !done);
    const fetchedTodos = service.load();
    setTodos(fetchedTodos);
  };

  /** Deletes all 'done' todos. */
  const handleDeleteDone = () => {
    service.deleteDone();
    const fetchedTodos: Array<Todo> = service.load();
    setTodos(fetchedTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div className="grid grid-cols-2 bg-yellow-light">
        <TodoList todos={todos} onCheck={handleChecked} />
        <AddTodo input={input} setInput={setInput} addTodo={addTodo} />
        <Button label="Delete All Done" onClick={handleDeleteDone} />
      </div>
    </div>
  );
};

export default Todos;
