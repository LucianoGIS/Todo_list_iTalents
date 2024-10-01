// src/App.js
import React, { useState } from 'react';
import TodoList from './components/Todo_list';
import TodoForm from './components/Todo_form';
import './App.css'; // Importando o CSS

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
