import React from 'react';

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.input],
            input: ''
        });
    }

    render() {
        return(
            <div>
                <h1>Add Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
                <h1 id="todo-header">Todo List</h1>
                <Checklist items={this.state.todos}/>
            </div>
        );
    }
};


const Checklist = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item}>
                    <label><input type='checkbox' value={item}/>{item}</label>
                </li>
            ))}
        </ul>
    );
};

export default Todos;