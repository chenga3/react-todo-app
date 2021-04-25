import React, { useState, useEffect } from 'react';

const inMemoryTodoService = () => {
    const todos = new Map();
    return {
        load: () => Array.from(todos.values()) ?? [],
        create: (todo) => {
            todos.set(todo.id, todo);
        },
        updateDone: (id, done) => {
            const todo = todos.get(id);
            todo.done = done;
            todos.set(id, todo);
        },
        deleteDone: () => {
            todos.forEach((todo, id, todos) => todo.done && todos.delete(id));
        }
    }
}

const localStorageTodoService = () => ({
    load: () => {
        const todos = JSON.parse(localStorage.getItem('todos')) ?? {};
        return Array.from(Object.values(todos));
    },
    create: (todo) => {
        const todos = JSON.parse(localStorage.getItem('todos')) ?? {};
        const id = Object.keys(todos).length;
        todo.id = id;
        localStorage.setItem('todos', JSON.stringify({ ...todos, [id]: todo }));
    },
    updateDone: (id, done) => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        const todo = todos[id];
        if (!todo) return;
        todo.done = done;
        localStorage.setItem('todos', JSON.stringify(todos));
    },
    deleteDone: () => {
        const todos = JSON.parse(localStorage.getItem('todos')) ?? {};
        for (var id in todos) {
            if (todos[id].done) {
                delete todos[id];
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    }
})

const service = inMemoryTodoService();
//const service = localStorageTodoService();

var nextid = 0;

const Todos = () =>  {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchedTodos = service.load();
        setTodos(fetchedTodos);
    }, [])

    const handleChange = event => setInput(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        var newTodo = {
            id: nextid,
            text: input,
            done: false
        };
        nextid++;
        service.create(newTodo);
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const handleChecked = (id, done) => {
        service.updateDone(id, !done);
        const fetchedTodos = service.load();
        setTodos(fetchedTodos);
    }

    const handleDeleteDone = () => {
        service.deleteDone();
        const fetchedTodos = service.load();
        setTodos(fetchedTodos);
    }

    return(
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
            <h1 id="todo-header">Todo List</h1>
            <Checklist todos={todos} onCheck={handleChecked}/>
            <button type="button" onClick={handleDeleteDone}>Delete Done Todos</button>
        </div>
    );
}

const Checklist = ({todos, onCheck}) => 
    <ul>
        {todos.map(({id, text, done}) => (
            <li key={id}>
                <label className={done ? "done-todo" : ""}><input type='checkbox' checked={done} onChange={() => onCheck(id, done)}/>{text}</label>
            </li>
        ))}
    </ul>

export default Todos;