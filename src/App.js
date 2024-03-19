import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const removeItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  console.log(items);

  return (
    <div className="App">
      <header>
        <h1>To-do list ❀</h1>
      </header>
      <Form onAddItem={handleAddItem} />
      <ToDoList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
