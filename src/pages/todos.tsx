import React, { useState, useEffect } from "react";

import Button from "../core/Button";
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

  useEffect(() => {
    const fetchedTodos = service.load();
    setTodos(fetchedTodos);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const handleSubmit = (event: React.FormEvent) => {
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

  const handleChecked = (id: number, done: boolean) => {
    service.updateDone(id, !done);
    const fetchedTodos = service.load();
    setTodos(fetchedTodos);
  };

  const handleDeleteDone = () => {
    service.deleteDone();
    const fetchedTodos: Array<Todo> = service.load();
    setTodos(fetchedTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div className="bg-yellow-light">
        <TodoList todos={todos} onCheck={handleChecked} />
        <div>
          <h1 className="text-3xl">Add Todo</h1>
          <form>
            <input className="border-2" value={input} onChange={handleChange} />
            <br />
            <Button label="Add" onClick={handleSubmit} />
          </form>
        </div>
        <Button label="Delete All Done" onClick={handleDeleteDone} />
      </div>
    </div>
  );
};

export default Todos;
