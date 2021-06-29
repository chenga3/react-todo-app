import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "../core/Button";
import AddTodo from "../todos/AddTodo";
import TodoList from "../todos/TodoList";
import { inMemoryTodoService } from "../services/todos-service";
import type { Todo } from "../types";

const service = inMemoryTodoService();
//const service = localStorageTodoService();

const Todos = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  /** Loads stored todos into state on intial render. */
  useEffect(() => {
    // const fetchedTodos = service.load();
    // setTodos(fetchedTodos);
    axios.get("http://localhost:5000/todo").then((res) => {
      setTodos(res.data);
    });
  }, []);

  /** Adds the user input todo to their todo list. */
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    var newTodo = {
      text: input,
      done: false,
    };
    // service.create(newTodo);
    // setTodos([...todos, newTodo]);
    axios
      .post("http://localhost:5000/todo/add", newTodo)
      .then((res) => console.log(res.data));
    setInput("");
  };

  /** Toggles todos between 'done' and 'not done' states. */
  const updateTodo = (_id: number, text: string, done: boolean) => {
    // service.updateDone(id, !done);
    // const fetchedTodos = service.load();
    // setTodos(fetchedTodos);
    const newTodo = {
      text: text,
      done: !done,
    };
    axios
      .post("http://localhost:5000/todo/" + _id, newTodo)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  /** Deletes all 'done' todos. */
  const handleDeleteDone = () => {
    // service.deleteDone();
    // const fetchedTodos: Array<Todo> = service.load();
    // setTodos(fetchedTodos);
    axios
      .delete("http://localhost:5000/todo/done")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Todos</h1>
      <div className="grid grid-cols-2 bg-yellow-light">
        <TodoList todos={todos} onCheck={updateTodo} />
        <AddTodo input={input} setInput={setInput} addTodo={addTodo} />
        <Button label="Delete All Done" onClick={handleDeleteDone} />
      </div>
    </div>
  );
};

export default Todos;
