import { Button } from "antd";
import React from "react";

const MainContent = () => {
  return (
    <div data-aos="fade-right">
      <b>
        <div>
          <h2>
            Hi
            <img
              src={require("./../Images/HiImage.gif")}
              style={{
                width: "35px",
                marginTop: "10px",
                marginRight: "5px",
              }}
              alt=""
            />
            <br></br> I'm Sudarshan
          </h2>
        </div>
        <div
          style={{
            color: "rgb(74, 5, 74)",
            fontFamily: "cursive",
            fontSize: "40px",
          }}
        >
          MERN Stack Developer
          <br />
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            style={{ width: "250px" }}
            src={require("./../Images/mernn.png")}
            alt=""
          />
        </div>
      </b>
      <div style={{ marginBottom: "10px" }}></div>
      <a
        href="https://drive.google.com/file/d/1-4CWsixeZoY4lfimOuxTIfLLCPuXnR64/view?usp=sharing"
        target="_blank"
      >
        <Button style={{ background: "rgb(0, 5, 78)", color: "white" }}>
          Resume
        </Button>
      </a>
      <span style={{ marginLeft: "10px" }}></span>

      <a href={"https://github.com/sudarshanmane"} rel="noopener noreferrer">
        <Button style={{ background: "rgb(0, 5, 78)", color: "white" }}>
          ⭐ Star Me On Github
        </Button>
      </a>
    </div>
  );
};

export default MainContent;
