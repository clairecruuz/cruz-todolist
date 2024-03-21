import React, { useState } from "react";
import Task from "./Task";
import "./ToDoList.css";

function ToDoList({ items, removeItem, handleCheck }) {
  const [sortOption, setSortOption] = useState("alphabetical");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  let sortedItems;
  if (sortOption === "alphabetical") {
    sortedItems = items.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else {
    sortedItems = items.slice().sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
  }

  const completedTasks = sortedItems.filter((item) => item.isChecked);
  const incompleteTasks = sortedItems.filter((item) => !item.isChecked);
  const sortedTasks = incompleteTasks.concat(completedTasks);

  return (
    <div className="todo-list">
      <div className="dropdown">
        <label className="dropdown-label" htmlFor="sort-by">
          Sort By:
        </label>
        <select
          id="sort-by"
          value={sortOption}
          onChange={handleSortChange}
          className="dropdown-select"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="date">Date</option>
        </select>
      </div>
      {sortedTasks.map((item) => (
        <Task
          key={item.id}
          item={item}
          removeItem={removeItem}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
}

export default ToDoList;
