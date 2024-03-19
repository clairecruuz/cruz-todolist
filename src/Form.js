import React, { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, dueDate, id: Date.now(), isChecked: false };
    onAddItem(newItem);
    setName("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Enter task"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="task-input"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="task-input"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
