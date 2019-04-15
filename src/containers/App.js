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
        description: "buy 1 gallon full fat milk",
        completed: true,
        editMode: false
      },
      {
        id: 2,
        date: "02/02/2002",
        name: "football",
        description: "watch lfc vs chelsea on sunday 2pm",
        completed: false,
        editMode: false
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

  toggleTodo = id => {
    let todos = [...this.state.todos];

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    console.log("clicked toggle", id);

    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = this.generateUniqueId();
    todo.date = new Date().toLocaleDateString("en-GB");
    todo.completed = false;
    todo.editMode = false;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  editTodo = id => {
    let todos = [...this.state.todos];

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.editMode = true;
        todo.completed = false;
      }
      return todo;
    });

    console.log(todos);

    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo List with Auditing</h1>
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
          editTodo={this.editTodo}
        />
        <Todoform addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
