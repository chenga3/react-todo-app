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
    axios.get("http://localhost:5000/api/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  /** Adds the user input todo to their todo list. */
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/todos", {
        text: input,
        done: false,
      })
      .then((res) => {
        // Update the todo list client-side
        const newTodo: Todo = {
          _id: res.data.insertedId,
          text: input,
          done: false,
        };
        setTodos([...todos, newTodo]);
      })
      .catch((err) => console.log(err));
    setInput("");
  };

  /** Toggles todos between 'done' and 'not done' states. */
  const updateTodo = (_id: number, text: string, done: boolean) => {
    axios
      .post("http://localhost:5000/api/todos/" + _id, {
        text: text,
        done: !done,
      })
      .then((res) => {
        // Update the todo client-side
        setTodos(
          todos.map((todo) =>
            todo._id === _id ? { ...todo, done: !done } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };

  /** Deletes all 'done' todos. */
  const handleDeleteDone = () => {
    axios
      .delete("http://localhost:5000/api/todos/done")
      .then((res) => {
        // Update the todo list client-side
        setTodos(todos.filter((todo) => !todo.done));
      })
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
