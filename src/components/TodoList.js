import React, { Component } from "react";

const TodoList = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodo(todo.id)}>
            <a className="btn-floating btn-small waves-effect waves-light red">
              <i className="material-icons">delete_forever</i>
            </a>
          </span>
          <span>{todo.name}</span>
          <span>{" | "}</span>
          <span>{todo.description}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have No ToDos left, Boom!</p>
  );

  return <div className="todoList collection">{todoList}</div>;
};

export default TodoList;
