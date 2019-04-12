import React, { Component } from "react";

import TodoList from "../components/TodoList";
import Todoform from "../components/TodoForm";

class App extends Component {
  state = {
    idprefix: "todo",
    todos: [
      {
        id: 1,
        date: "01/01/2001",
        name: "milk",
        description: "buy 1 gallon full fat milk"
      },
      {
        id: 2,
        date: "02/02/2002",
        name: "football",
        description: "watch lfc vs chelsea on sunday 2pm"
      }
    ]
  };

  generateUniqueId = () => {
    return `${this.state.idprefix}_${Date.now()}`;
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = this.generateUniqueId();
    todo.date = Date.now();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo List with Auditing</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Todoform addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
