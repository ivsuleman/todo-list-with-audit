import React, { Component } from "react";
import "../styles/list.css";

class TodoList extends Component {
  state = {
    name: "",
    description: ""
  };

  handleChange = e => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.props.editTodo(this.state, id);
  };

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    };

    const deleteButton = (
      <a className="btn-floating btn-small waves-effect waves-light red">
        <i className="material-icons">delete_forever</i>
      </a>
    );

    const editButton = (
      <a className="btn-floating btn-small waves-effect waves-light orange">
        <i className="material-icons">edit</i>
      </a>
    );

    const submitEditButton = (
      <button
        className="btn-floating btn-small waves-effect waves-light green"
        type="submit"
        name="action"
      >
        <i className="material-icons right">done</i>
      </button>
    );

    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span
              className="deleteButton"
              onClick={() => this.props.deleteTodo(todo.id)}
            >
              {deleteButton}
            </span>
            <span onClick={() => this.props.togleTodoEdit(todo.id)}>
              {editButton}
            </span>

            {todo.editMode ? (
              <div>
                <form onSubmit={() => this.handleSubmit(event, todo.id)}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    defaultValue={`${todo.name}`}
                  />

                  <label>Description:</label>
                  <input
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    defaultValue={`${todo.description}`}
                  />
                  <button
                    className="btn-floating btn-small waves-effect waves-light green"
                    type="submit"
                    name="action"
                  >
                    <i className="material-icons right">done</i>
                  </button>
                </form>
              </div>
            ) : (
              <span style={todo.completed ? completedStyle : null}>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in valign-wrapper"
                    checked={todo.completed}
                    onChange={() => this.props.toggleTodoCompleted(todo.id)}
                  />
                  <span />
                </label>

                {`${todo.date} | ${todo.name} | ${todo.description}`}
              </span>
            )}
          </div>
        );
      })
    ) : (
      <p className="center">You have No ToDos left, Boom!</p>
    );
    return (
      <div className="todo-list collection">
        <h5 className="center blue-text">ToDo List</h5>
        {todoList}
      </div>
    );
  }
}

export default TodoList;
