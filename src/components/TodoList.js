import React, { Component } from "react";

const TodoList = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
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
