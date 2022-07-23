import React from "react";
import TodoList from "./components/TodoList";
import { Routes, Route } from "react-router-dom";
import TodoDetails from "./components/TodoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/details" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
