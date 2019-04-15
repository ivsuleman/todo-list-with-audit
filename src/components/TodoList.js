import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    };

    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span onClick={() => this.props.deleteTodo(todo.id)}>
              <a className="btn-floating btn-small waves-effect waves-light red">
                <i className="material-icons">delete_forever</i>
              </a>
            </span>
            <span>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={todo.completed}
                  onChange={() => this.props.toggleTodo(todo.id)}
                />
                <span />
              </label>
            </span>
            <span>{todo.date}</span>
            {todo.editMode ? (
              <div>
                <input type="text" defaultValue={todo.name} />
                <input type="text" defaultValue={todo.description} />
              </div>
            ) : (
              <div
                onDoubleClick={() => this.props.editTodo(todo.id)}
                style={todo.completed ? completedStyle : null}
              >
                <span>{` ${todo.name} | `}</span>
                <span>{todo.description}</span>
              </div>
            )}
          </div>
        );
      })
    ) : (
      <p className="center">You have No ToDos left, Boom!</p>
    );
    return <div className="todoList collection">{todoList}</div>;
  }
}

export default TodoList;
