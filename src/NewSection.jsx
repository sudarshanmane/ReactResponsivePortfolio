import React from "react";
import "./sectionContainer.css";

const NewSection = ({ img, title, desc }) => {
  return (
    <div className="section_container">
      <div>
        <h1 className="sub-title" data-aos="flip-left">
          {title}
        </h1>
        <h3 data-aos="fade-up">{desc}</h3>
      </div>
      <div data-aos="fade-left">{img} </div>
    </div>
  );
};

export default NewSection;
