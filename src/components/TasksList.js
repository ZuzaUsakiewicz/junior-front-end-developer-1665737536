import React, { useState } from "react";
import LockIcon from "../assets/lockIcon.svg";
import CheckMarkIcon from "../assets/checkMarkIcon.svg";
import ArrowRightIcon from "../assets/arrowRightIcon.svg";
import "../styles/TaskListStyles.css";

const TasksList = () => {
  const [listOfTasks] = useState([
    {
      id: 0,
      title: "Application Setup",
      status: "completed",
      businessContexts: ["author", "date", "context", "title", "status"],
    },
    {
      id: 1,
      title: "Static Books List",
      status: "completed",
      businessContexts: ["author", "date", "context", "title", "status"],
    },
    {
      id: 2,
      title: "Administration Panel",
      status: "completed",
      businessContexts: ["author", "date", "context", "title", "status"],
    },
    {
      id: 3,
      title: "Connect Admin with Frontend",
      status: "active",
      businessContexts: ["author", "date", "context", "title", "status"],
    },
    {
      id: 4,
      title: "Book Review Feature",
      status: "blocked",
      businessContexts: ["author", "date", "context", "title", "status"],
    },
  ]);

  return (
    <div className="tasks-list-container">
      {listOfTasks.map((task, index) => {
        return (
          <a href="/" key={index} className={`task-container ${task.status}`}>
            <div className={`icon-wrapper ${task.status}`}>
              {task.status === "completed" ? (
                <img src={CheckMarkIcon} alt="check mark icon task done" />
              ) : task.status === "blocked" ? (
                <img src={LockIcon} alt="lock icon unavailable blocked task" />
              ) : (
                <img
                  src={ArrowRightIcon}
                  alt="arrow right icon current active task"
                />
              )}
            </div>
            <span className={`task-title ${task.status}`}>{task.title}</span>
          </a>
        );
      })}
    </div>
  );
};

export default TasksList;
