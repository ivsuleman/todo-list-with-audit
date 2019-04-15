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
            <span onClick={() => this.props.editTodo(todo.id)}>
              <a className="btn-floating btn-small waves-effect waves-light orange">
                <i className="material-icons">edit</i>
              </a>
            </span>

            {todo.editMode ? (
              <span>
                <span>{todo.date}</span>
                <input type="text" defaultValue={` | ${todo.name} | `} />
                <input type="text" defaultValue={todo.description} />
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
              </span>
            ) : (
              <span style={todo.completed ? completedStyle : null}>
                <span>{todo.date}</span>
                <span>{` | ${todo.name} | `}</span>
                <span>{todo.description}</span>
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
              </span>
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
