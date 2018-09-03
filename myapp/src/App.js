import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'Buy soi milk'},
            {id: 3, content: 'Kill the cow'}
        ]
    };
    deleteTodo = (id) => {
        let newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: newTodos
        })
    };
    addTodo = (todo) => {
       todo.id = Math.round(Math.random()*10000);
       let todos = [...this.state.todos, todo];
       this.setState({
           todos
       });
    };
    render() {
        return (
            <div className="todo-app container">
                <h4 className="center">todo</h4>
                <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
                <AddTodo addTodo = {this.addTodo}/>
            </div>
        );
    }
}

export default App;
