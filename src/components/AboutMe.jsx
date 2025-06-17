import { Tabs } from "antd";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img
              id="myImage"
              src={require("./../Images/sudarshan_1.png")}
              alt=""
            />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title" id="aboute_me_title">
              About Me
            </h1>
            <p style={{ marginTop: "-25px" }}>
              MERN Stack Developer with over 2.6 years of experience building
              scalable, responsive, and user-centric web applications. Skilled
              in both frontend and backend development using technologies such
              as React.js, Node.js, Express.js, and MongoDB. Adept at building
              full-stack solutions from scratch, integrating third-party APIs,
              and optimizing application performance.
            </p>

            <div className="tab-content" style={{ marginTop: "3%" }}>
              <Tabs
                type="card"
                items={[
                  {
                    label: <span>Education</span>,
                    key: 1,
                    children: (
                      <ul style={{ paddingLeft: "10%" }}>
                        <li>
                          Bachelor's of Engineering. Pune University - 07/2017-
                          07/2021
                        </li>
                      </ul>
                    ),
                  },
                  {
                    label: <span>Certification</span>,
                    key: 2,
                    children: (
                      <>
                        <ul style={{ paddingLeft: "10%" }}>
                          <li>
                            Masai School: Full Stack Web Development - 02/2022 -
                            11/2022
                          </li>
                        </ul>
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
