import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";

function App() {
  const [items, setItems] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, { ...newItem, isChecked: false }]);
  };

  const removeItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );

    const newItem = items.find((item) => item.id === id);
    const newCompletedCount = newItem.isChecked
      ? completedCount - 1
      : completedCount + 1;
    setCompletedCount(newCompletedCount);
  };

  return (
    <div className="App">
      <header>
        <h1>To-do list ❀</h1>
      </header>
      <Form onAddItem={handleAddItem} />
      <ToDoList
        items={items}
        completedCount={completedCount}
        removeItem={removeItem}
        handleCheck={handleCheck}
      />
    </div>
  );
}

export default App;
