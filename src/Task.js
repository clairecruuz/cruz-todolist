import React from "react";
import "./Task.css";
import { FaCheck, FaTrash } from "react-icons/fa";

function Task({ item, removeItem, handleCheck }) {
  const handleClick = () => {
    handleCheck(item.id);
  };

  return (
    <div className={`task ${item.isChecked ? "completed" : ""}`}>
      <div className="task-info">
        <span className="task-name">{item.name}</span>
        <span className="due-date">{item.dueDate}</span>
      </div>
      <div className="task-actions">
        <button className="complete-btn" onClick={handleClick}>
          <FaCheck />
        </button>
        <button className="delete-btn" onClick={() => removeItem(item.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Task;
