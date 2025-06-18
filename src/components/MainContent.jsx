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
      {/* <div style={{ marginBottom: "5px" }}></div> */}

      {/* <div
        style={{
          color: "rgb(74, 5, 74)",
          fontWeight: "bolder",
        }}
        className="profile-description"
      >
        MERN Stack Developer with over 2.6 years of experience building
        scalable, responsive, and user-centric web applications. Skilled in both
        frontend and backend development using technologies such as React.js,
        Node.js, Express.js, and MongoDB. Adept at building full-stack solutions
        from scratch, integrating third-party APIs, and optimizing application
        performance.
      </div> */}
      <div style={{ marginBottom: "10px" }}></div>
      <a
        href={
          "https://drive.google.com/file/d/1YJp-baXFsTrbQFnxpoocjvR31WQ5Zi13/view?usp=sharing"
        }
        target="_blank"
      >
        <Button style={{ background: "rgb(0, 5, 78)", color: "white" }}>
          Resume
        </Button>
      </a>
      <span style={{ marginLeft: "10px" }}></span>

      <a href={"https://github.com/sudarshanmane"} target="_blank">
        <Button style={{ background: "rgb(0, 5, 78)", color: "white" }}>
          ⭐ Star Me On Github
        </Button>
      </a>
    </div>
  );
};

export default MainContent;
