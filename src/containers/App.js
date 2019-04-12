import React, { Component } from "react";
import TodoList from "../components/TodoList";

class App extends Component {
  state = {
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

  deleteTodo = id => {
    console.log(id);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo List</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
