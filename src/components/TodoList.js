import React, { Component } from "react";

const TodoList = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">delete_forever</i>
            </a>
          </span>
          <span>{todo.name}</span>
          <span>{" | "}</span>
          <span>{todo.description}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have ToDo left, Boom!</p>
  );

  return <div className="todoList collection">{todoList}</div>;
};

export default TodoList;
