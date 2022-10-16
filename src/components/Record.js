import React, { useState } from "react";
import "../styles/Record.css";

const Record = ({ item }) => {
  const [activate, setActivate] = useState(false);
  const toggleActive = () => {
    setActivate((prev) => !prev);
  };

  return (
    <div
      className={`record-container ${item.isNew ? "new-task" : null} ${
        activate ? "active" : null
      } `}
      onClick={() => toggleActive()}
    >
      <div className="record-info">
        {item.isNew ? <span className="new">new</span> : null}
        <p>{item.author}</p>
        <span className="dot">&#183;</span> <p>{item.created_at}</p>
      </div>
      <p className={`record-title ${item.isNew ? "new-message" : null}`}>
        {item.title}
      </p>
      <p className="record-message">{item.content.slice(0, 100)}...</p>
    </div>
  );
};

export default Record;
