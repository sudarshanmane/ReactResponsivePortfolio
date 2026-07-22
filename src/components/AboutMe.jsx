import { Tabs } from "antd";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" data-aos="fade-down">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img
              id="myImage"
              src={require("./../images_1/sudarshan.jpeg")}
              alt=""
            />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title" id="aboute_me_title">
              About Me
            </h1>
            <p style={{ marginTop: "-25px", fontWeight: "600" }}>
              <ul>
                <li>
                  MERN Stack Developer with 3 years of full-time experience
                  delivering enterprise-grade and government-scale digital
                  platforms across marketing technology & public-sector systems.
                </li>
                <li>
                  Proven track record in full-stack ownership, with secure API
                  development, performance optimization, real-time data workflow
                  across React, Node.js, and MongoDB ecosystems.
                </li>{" "}
                <li>
                  Recognized for executing mission-critical systems like the
                  Digital Lost and Found Platform for Maha Kumbh Mela 2025,
                  backing large-scale public operations & real-world outcomes.
                </li>
                <li>
                  Strong collaborator in Agile environments, combining technical
                  depth with structured communication across engineering,
                  product, and design teams.
                </li>
              </ul>
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
