import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleClearList = () => {
    setItems([]);
    setCompletedCount(0);
  };

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, { ...newItem, isChecked: false }]);
  };

  const removeItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
    const completedItem = items.find((item) => item.id === id);
    if (completedItem.isChecked) {
      setCompletedCount((count) => count - 1);
    }
  };

  const handleCheck = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      );

      if (updatedItems.find((item) => item.id === id).isChecked) {
        return [
          ...updatedItems.filter((item) => !item.isChecked),
          ...updatedItems.filter((item) => item.isChecked),
        ];
      }

      return updatedItems;
    });

    setCompletedCount(
      (prevCount) =>
        prevCount + (items.find((item) => item.id === id).isChecked ? -1 : 1),
    );
  };

  return (
    <div className="App">
      <header>
        <h1>To-do list ❀</h1>
      </header>
      <Form onAddItem={handleAddItem} />
      <ToDoList
        items={items}
        removeItem={removeItem}
        handleCheck={handleCheck}
      />
      <Footer
        items={items}
        completedCount={completedCount}
        handleClearList={handleClearList}
      />
    </div>
  );
}

export default App;
