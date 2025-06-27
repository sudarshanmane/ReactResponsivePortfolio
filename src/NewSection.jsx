import React from "react";
import "./sectionContainer.css";

const NewSection = ({ img, title, desc }) => {
  return (
    <div className="section_container">
      <div className="section_container_content" data-aos="fade-right">
        <h1 className="sub-title" data-aos="flip-left">
          {title}
        </h1>
        <h3 data-aos="fade-up">{desc}</h3>
      </div>
      <div className="" data-aos="fade-left">
        {img}{" "}
      </div>
    </div>
  );
};

export default NewSection;
