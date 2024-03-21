import React, { useState } from "react";

function Footer({ items, completedCount, handleClearList }) {
  const [popup, setPopup] = useState(null);

  const openPopup = () => {
    const newPopup = window.open(
      "",
      "Clear List",
      "width=400,height=300,resizable=yes",
    );
    newPopup.document.body.innerHTML = `
      <div>
        <p>Are you sure you want to clear?</p>
        <form id="clearForm">
          <button type="submit" id="confirmBtn">Yes</button>
          <button type="button" id="cancelBtn">No</button>
        </form>
      </div>
    `;
    newPopup.document
      .getElementById("clearForm")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        handleClearList();
        newPopup.close();
      });
    newPopup.document
      .getElementById("cancelBtn")
      .addEventListener("click", () => {
        newPopup.close();
      });
    setPopup(newPopup);
  };

  const closePopup = () => {
    if (popup) {
      popup.close();
      setPopup(null);
    }
  };

  return (
    <div className="footer">
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Times New Roman",
            fontSize: "16px",
            color: "saddlebrown",
          }}
        >
          You have {items.length} items in your list.
        </p>
        <p
          style={{
            fontFamily: "Times New Roman",
            fontSize: "16px",
            color: "saddlebrown",
          }}
        >
          You have completed {completedCount} out of {items.length} tasks (
          {((completedCount / items.length) * 100).toFixed(2)}%).
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={openPopup} className="clear-task-button">
          Clear List
        </button>
      </div>
    </div>
  );
}

export default Footer;
