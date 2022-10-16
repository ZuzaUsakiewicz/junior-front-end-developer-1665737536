import React, { useState } from "react";
import CompassIcon from "../assets/compasIcon.svg";
import "../styles/BusinessContextsTabStyles.css";
import Record from "./Record";

const BusinessContextsTab = () => {
  const options = {
    month: "short",
    day: "numeric",
  };
  const [records] = useState([
    {
      id: 0,
      isNew: true,
      title: "some title",
      author: "Ed",
      created_at: `${new Date("10/15/2022").toLocaleDateString(
        "en-US",
        options
      )}`,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolore. Veritatis culpa quasi sit voluptas.",
    },
    {
      id: 1,
      isNew: false,
      title: "some title2",
      author: "Martha",
      created_at: `${new Date("10/14/2022").toLocaleDateString(
        "en-US",
        options
      )}`,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolore. Veritatis culpa quasi sit voluptas.",
    },
    {
      id: 2,
      isNew: false,
      title: "some title3",
      author: "Bob",
      created_at: `${new Date("10/13/2022").toLocaleDateString(
        "en-US",
        options
      )}`,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolore. Veritatis culpa quasi sit voluptas.",
    },
  ]);

  return (
    <section className="section-container right-tab">
      <div className="section-title right-title">
        <img src={CompassIcon} alt="compass icon" />
        <span>Business Context</span>
      </div>
      <div className="content-container">
        <div className="context-menu">
          {records.map((item, index) => (
            <Record key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessContextsTab;
