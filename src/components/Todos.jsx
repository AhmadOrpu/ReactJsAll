import React, { useState } from "react";
import { moreTasks, tasks } from "../data/tasks";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    setTodos(tasks);
  };

  const handleMoreTodo = () => {
    setTodos([...todos, ...moreTasks]);
  };

  const handleEditTodo = () => {};

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} - <button onClick={handleEditTodo}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={handleTodo}>Load</button>
      <button onClick={handleMoreTodo}>LoadMore...</button>
    </div>
  );
};

export default Todos;
