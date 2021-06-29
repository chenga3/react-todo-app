import { Todo } from "../types";

export const inMemoryTodoService = () => {
  const todos = new Map();
  return {
    load: () => Array.from(todos.values()) ?? [],
    create: (todo: Todo) => {
      todos.set(todo._id, todo);
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

export const localStorageTodoService = () => ({
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
    todo._id = id;
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
