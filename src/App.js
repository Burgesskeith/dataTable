import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

function App() {
  const [dashboard, setDashboard] = useState(true);
  const [row, setRow] = useState({});

  const toggleDash = () => {
    setDashboard(!dashboard);
  };

  const changeRow = (row) => {
    setRow(row);
  };

  return (
    <div className="App">
      {dashboard ? (
        <TodoList
          isDash={dashboard}
          toggleDash={toggleDash}
          changeRow={changeRow}
        />
      ) : (
        <TodoDetails isDash={dashboard} toggleDash={toggleDash} row={row} />
      )}
    </div>
  );
}

export default App;
