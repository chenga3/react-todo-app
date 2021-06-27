import React, { useState, useEffect } from "react";

import Button from "../core/Button";
import AddTodo from "../todos/AddTodo";
import TodoList from "../todos/TodoList";

import type { Todo } from "../types";

const inMemoryTodoService = () => {
  const todos = new Map();
  return {
    load: () => Array.from(todos.values()) ?? [],
    create: (todo: Todo) => {
      todos.set(todo.id, todo);
    },
    updateDone: (id: number, done: boolean) => {
      const todo = todos.get(id);
      todo.done = done;
      todos.set(id, todo);
    },
    deleteDone: () => {
      todos.forEach((todo, id, todos) => todo.done && todos.delete(id));
    },
  };
};

const localStorageTodoService = () => ({
  load: () => {
    const storageItem = localStorage.getItem("todos");
    if (!storageItem) {
      return {};
    }
    const todos = JSON.parse(storageItem);
    return Array.from(Object.values(todos));
  },
  create: (todo: Todo) => {
    const storageItem = localStorage.getItem("todos");
    if (!storageItem) {
      return;
    }
    const todos = JSON.parse(storageItem);
    const id = Object.keys(todos).length;
    todo.id = id;
    localStorage.setItem("todos", JSON.stringify({ ...todos, [id]: todo }));
  },
  updateDone: (id: number, done: boolean) => {
    const storageItem = localStorage.getItem("todos");
    if (!storageItem) {
      return;
    }
    const todos = JSON.parse(storageItem);
    const todo = todos[id];
    if (!todo) return;
    todo.done = done;
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  deleteDone: () => {
    const storageItem = localStorage.getItem("todos");
    if (!storageItem) {
      return;
    }
    const todos = JSON.parse(storageItem);
    for (var id in todos) {
      if (todos[id].done) {
        delete todos[id];
      }
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  },
});

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
