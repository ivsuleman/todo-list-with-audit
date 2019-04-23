import React, { Component } from "react";

import AuditBar from "../components/AuditBar";
import TodoList from "../components/TodoList";
import Todoform from "../components/TodoForm";
import AuditList from "../components/AuditList";

import "../styles/app.css";

class App extends Component {
  state = {
    record: false,
    play: false,

    audit: [],

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

  addTodo = todo => {
    todo.id = this.generateUniqueId();
    todo.date = new Date().toLocaleDateString("en-GB");
    todo.completed = false;
    todo.editMode = false;

    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    });

    if (this.state.record === true) {
      this.addToAudit(todo, "ADDED", new Date());
    }
  };

  deleteTodo = id => {
    const todo = this.state.todos.filter(todo => {
      return todo.id === id;
    });

    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    });

    if (this.state.record === true) {
      this.addToAudit(todo[0], "DELETED", new Date());
    }
  };

  editTodo = (editedTodoId, editedTodo) => {
    let todos = [...this.state.todos];

    const editedTodos = this.state.todos.map(todo => {
      if (todo.id === editedTodoId) {
        if (editedTodo.name !== "") {
          todo.name = editedTodo.name;
        }
        if (editedTodo.description !== "") {
          todo.description = editedTodo.description;
        }
        todo.date = new Date().toLocaleDateString("en-GB");
        todo.editMode = false;
      }
      return todo;
    });

    this.setState({
      todos: editedTodos
    });

    const todo = this.state.todos.filter(todo => {
      return todo.id === editedTodoId;
    });

    if (this.state.record === true) {
      this.addToAudit(todo[0], "EDITED", new Date());
    }
  };

  toggleTodoCompleted = id => {
    let todos = [...this.state.todos];

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos
    });
  };

  togleTodoEdit = id => {
    let todos = [...this.state.todos];

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.editMode = !todo.editMode;
      }
      return todo;
    });

    this.setState({
      todos
    });
  };

  toggleRecord = () => {
    this.setState({
      record: !this.state.record
    });
  };

  addToAudit = (todo, action, date) => {
    todo.action = action;
    todo.actionTimestamp = date;
    let audit = [...this.state.audit, todo];
    this.setState({
      audit: audit
    });
  };

  togglePlay = () => {
    this.setState({
      play: !this.state.play
    });
  };

  clearAudit = () => {
    let audit = [];

    this.setState({
      audit: audit
    });
  };

  render() {
    const isPLayMode = this.state.play;
    return (
      <div className="todo-app container">
        <h1 className="center white-text">ToDo List with Auditing</h1>
        <AuditBar
          record={this.state.record}
          playMode={this.state.play}
          togglePlay={this.togglePlay}
          toggleRecord={this.toggleRecord}
          clearAudit={this.clearAudit}
        />
        {isPLayMode ? <AuditList audit={this.state.audit} /> : null}
        <Todoform addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodoCompleted={this.toggleTodoCompleted}
          togleTodoEdit={this.togleTodoEdit}
          addTodo={this.addTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}
export default App;
