import React from "react";
import "./Task.css";
import { FaCheck, FaTrash } from "react-icons/fa";

function Task({ item, removeItem }) {
  const handleCheck = () => {
    removeItem(item.id);
  };

  return (
    <div className="task-container">
      <div className="task">
        <div className="task-info">
          <span className="task-name">{item.name}</span>
          <span className="due-date">{item.dueDate}</span>
        </div>
        <div className="task-actions">
          <button className="complete-btn" onClick={handleCheck}>
            <FaCheck />
          </button>
          <button className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
