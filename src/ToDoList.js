import React from "react";
import Task from "./Task";
import "./ToDoList.css";

function ToDoList({ items, removeItem }) {
  return (
    <div className="todo-list">
      <div className="tasks">
        {items.map((item) => (
          <Task key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
