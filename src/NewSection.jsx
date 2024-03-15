import React from "react";
import "./sectionContainer.css";

const NewSection = ({ img, title, desc }) => {
  return (
    <div className="section_container">
      <div>
        <h1 className="sub-title">{title}</h1>
        <h3>{desc}</h3>
      </div>
      <div>{img} </div>
    </div>
  );
};

export default NewSection;
