import React from "react";
import Task from "./Task";
import "./ToDoList.css";

function ToDoList({ items, completedCount, removeItem, handleCheck }) {
  return (
    <div className="todo-list">
      <div className="tasks">
        <header>
          <h2>
            {items.length} total, {completedCount} completed
          </h2>
        </header>
        {items.map((item) => (
          <Task
            key={item.id}
            item={item}
            removeItem={removeItem}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
