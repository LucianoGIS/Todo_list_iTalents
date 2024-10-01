// src/components/Todo_item.js
import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={removeTodo}>Remover</button>
    </li>
  );
};

export default TodoItem;
