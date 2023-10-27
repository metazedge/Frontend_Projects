// import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="todo" id="app">
      <h1 className="title">Todo List with Redux Toolkit</h1>

      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
