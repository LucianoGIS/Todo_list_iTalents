// src/components/Todo_list.js
import React from 'react';
import TodoItem from './Todo_item';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
