// src/components/Todo_form.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
