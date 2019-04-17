import React, { Component } from "react";

import Audit from "../components/Audit";
import TodoList from "../components/TodoList";
import Todoform from "../components/TodoForm";
import AuditList from "../components/AuditList";

class App extends Component {
  state = {
    auditMode: false,

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

    if (this.state.auditMode === true) {
      this.addToAudit(todo, "add", new Date());
    }

    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    });
  };

  deleteTodo = id => {
    const todo = this.state.todos.filter(todo => {
      return todo.id === id;
    });

    if (this.state.auditMode === true) {
      console.log(todo[0]);
      this.addToAudit(todo[0], "delete", new Date());
    }

    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  editTodo = (editedTodo, id) => {
    this.addTodo(editedTodo);
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

  toggleAuditRecord = () => {
    console.log(this.state.auditMode);
    this.state.auditMode = !this.state.auditMode;
    console.log(this.state.auditMode);
  };

  addToAudit = (todo, action, date) => {
    todo.action = action;
    todo.actionTimestamp = date;
    let audit = [...this.state.audit, todo];
    this.setState({
      audit: audit
    });
  };

  playAudit = () => {
    console.log("play audit");
  };

  clearAudit = () => {
    console.log("clearing audit");
    let audit = [];

    this.setState({
      audit: audit
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo List with Auditing</h1>
        <Todoform addTodo={this.addTodo} />

        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodoCompleted={this.toggleTodoCompleted}
          togleTodoEdit={this.togleTodoEdit}
          addTodo={this.addTodo}
          editTodo={this.editTodo}
        />
        <Audit
          auditMode={this.state.auditMode}
          toggleAuditRecord={this.toggleAuditRecord}
          clearAudit={this.clearAudit}
        />
        <AuditList audit={this.state.audit} />
      </div>
    );
  }
}
export default App;
