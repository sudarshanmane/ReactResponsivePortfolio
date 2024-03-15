import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GitHubCalendar from "react-github-calendar";
import "./style.scss";
import { Tabs, Button } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import Marquee from "react-fast-marquee";
import "./sectionContainer.css";
import NewSection from "./NewSection";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function App() {
  const skillsDataFrontend = [
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/html.png")}
          />
          <h1 className="text-center font-semibold">HTML</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/css.png")}
          />
          <h1 className="text-center font-semibold">CSS</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/bootstrap.png")}
          />
          <h1 className="text-center font-semibold">Bootstrap</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/tailwind.png")}
          />
          <h1 className="text-center font-semibold">Tailwind</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/javaScript.png")}
          />
          <h1 className="text-center font-semibold">JavaScript</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/react.png")}
          />
          <h1 className="text-center font-semibold">React</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/redux.png")}
          />
          <h1 className="text-center font-semibold">Redux</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/react-router.png")}
          />
          <h1 className="text-center font-semibold">React Router</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/antd_.png")}
          />
          <h1 className="text-center font-semibold">Ant Design</h1>
        </>
      ),
    },
    {
      img: <div className="h-24 w-28 bg-transparent" />,
      transparent: true,
    },
  ];

  const tools = [
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/vscode.png")}
          />
          <h1 className="text-center font-semibold">vs code</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/github.png")}
          />
          <h1 className="text-center font-semibold">GitHub</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./images_1/npm.png")}
          />
          <h1 className="text-center font-semibold">NPM</h1>
        </>
      ),
    },
    {
      img: <div className="h-24 w-28 bg-transparent" />,
      transparent: true,
    },
  ];
  return (
    <div>
      <div id="header">
        <nav>
          <div className="logo">
            <img src={require("./Images/newLogo.png")} alt="" />
          </div>

          <ul>
            <li>
              <a href="#b">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projs">Projects</a>
            </li>
            <li>
              <a href="#Statistics">Statistics</a>
            </li>
            <li>
              <a href="#Projects">Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1CeFeYERC1zHX5j9SYKypBHHn15wqRZmt/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="navbar">
            <div className="dropdown">
              <button className="dropbtn">
                <img src={require("./Images/manu.png")} alt="" />
              </button>
              <div className="dropdown-content">
                <a href="#b">Home</a>
                <a href="#about">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projs">Projects</a>
                <a href="#Statistics">Statistics</a>
                <a href="#Projects">Contact</a>
                <a
                  href="https://drive.google.com/file/d/1CeFeYERC1zHX5j9SYKypBHHn15wqRZmt/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div id="b">
        <div className="header-text" id="header-text" style={{}}>
          <div>
            <h1>
              Hi{" "}
              <img
                src={require("./Images/HiImage.gif")}
                style={{
                  width: "35px",
                  marginTop: "10px",
                  marginRight: "5px",
                }}
                alt=""
              />
              <br></br> I'm Sudarshan
            </h1>
            <div style={{ color: "rgb(74, 5, 74)", fontFamily: "cursive" }}>
              Full Stack Web Developer
            </div>
            <div style={{ marginBottom: "5px" }}></div>

            <div
              style={{
                color: "rgb(74, 5, 74)",
                fontWeight: "bolder",
              }}
              className="profile-description"
            >
              Results-oriented Full Stack Developer with a year of expertise
              crafting impactful and innovative web applications. Proficient in
              React.js and modern front-end technologies, I am dedicated to
              optimizing applications for speed, and functionality. My focus
              lies in creating seamless and responsive interfaces.
            </div>
            <div style={{ marginBottom: "10px" }}></div>
            <a
              href={
                "https://drive.google.com/file/d/1CeFeYERC1zHX5j9SYKypBHHn15wqRZmt/view"
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={require("./Images/seatedImage.png")} alt="" />
          </div>
        </div>
        {/* -----------about---------  */}
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img
                  id="myImage"
                  src={require("./Images/Sudarshan_Mane_NB.png")}
                  alt=""
                />
              </div>
              <div className="about-col-2">
                <h1 className="sub-title" id="aboute_me_title">
                  About Me
                </h1>
                <p>
                  Self-motivated ReactJS Developer with over One years of
                  experience, showcasing proven problem-solving skills and a
                  strong aptitude for collaborative work. Actively seeking a
                  position in an organization to leverage my ReactJS expertise,
                  enhance skills, and contribute to both personal and
                  organizational growth through innovative solutions and
                  efficient development practices.
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
                              Bachelor's of Engineering. Pune University -
                              07/2017- 07/2021
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
                                Masai School: Full Stack Web Development -
                                02/2022 - 11/2022
                              </li>
                            </ul>
                          </>
                        ),
                      },
                      {
                        label: <span>Organizations</span>,
                        key: 3,
                        children: (
                          <>
                            <ul style={{ paddingLeft: "10%" }}>
                              <li>
                                Metamind System Private Limited - 02/2023 -
                                11/2023
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
        {/* Skills */}

        <div id="skills">
          <NewSection
            img={<img src={require("./images_1/skill.png")} alt=""></img>}
            title="Skills"
            desc="Versatile with modern technology tools for frontend and backend development."
          ></NewSection>
          <div className="skills-header">Front End Skills</div>
          <div
            style={{
              width: "90%",
              margin: "auto",
            }}
          >
            <Marquee
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              autoFill={true}
            >
              {skillsDataFrontend.map((skill, id) => (
                <div
                  className={`p-2 rounded-lg ml-3 ${
                    skill?.transparent ? "bg-transparent" : "bg-yellow-500"
                  }`}
                  id="marque-image-container"
                  key="1"
                >
                  {skill.img}
                </div>
              ))}
            </Marquee>
          </div>
          <div className="skills-header another-skill-header">Tools</div>
          <div
            style={{
              width: "90%",
              margin: "auto",
              overflow: "auto",
            }}
          >
            <Marquee
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
              autoFill={true}
            >
              {tools.map((skill, id) => (
                <div
                  className={`p-2 rounded-lg ml-3 ${
                    skill?.transparent ? "bg-transparent" : "bg-orange-300"
                  }`}
                  id="marque-image-container"
                  key="1"
                >
                  {skill.img}
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div id="experience">
          <NewSection
            img={
              <img
                src={require("./images_1/experience-image.png")}
                alt=""
              ></img>
            }
            title="Experience"
            desc="I have worked with startup as Frontend Developer."
          ></NewSection>
        </div>

        <div
          style={{
            width: "100%",
            overflow: "auto",
            zIndex: "0",
            marginTop: "-120px",
          }}
        >
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#330066",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="02/2023 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<div />}
            >
              <h3 className="vertical-timeline-element-title text-2xl ">
                Metamind System Private Limited
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg text-teal-950">
                Software Developer
              </h4>

              <h3
                className="text-lgm text-blue-800"
                style={{ marginTop: "10px" }}
              >
                Led end-to-end development of a React JS-based File Management
                System, optimizing map data digitization. Solely managed
                project, delivering user-friendly system, enhancing
                accessibility, and meeting all deadlines.
              </h3>
              <div style={{ marginTop: "10px" }}>
                <span className="text-lg font-semibold"> Skills: </span>
                <span
                  className="text-md font-semibold"
                  style={{ marginTop: "10px" }}
                >
                  HTML5 · CSS · Bootstrap · JavaScript · ReactJs · React-Router
                  · Redux.js · Redux-Saga · GitHub · Ant Design
                </span>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div style={{ height: "50px" }}></div>
        <div id="projs" style={{ width: "100%" }}>
          <NewSection
            img={<img src={require("./images_1/projects.png")} alt=""></img>}
            title="Projects"
            desc="In my projects, I utilize a broad range of state-of-the-art technology tools for both frontend and backend development. I specialize in creating and deploying web and mobile view applications."
          ></NewSection>
          <div className="container">
            <div className="projects-list">
              <div>
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={require("./Images/fmsImage1.png")}
                  alt=""
                />
                <div id="prdetails">
                  <h1>
                    File Management System
                    <br />
                  </h1>
                  <div
                    style={{
                      fontSize: "17px",
                      textAlign: "end",
                      width: "100%",
                      color: "lightyellow",
                    }}
                  >
                    Organization: Metamind System
                  </div>
                  <p>
                    Led the end-to-end development of a comprehensive File
                    Management System using React JS, focused on streamlining
                    and digitizing map data. Solely responsible for the project,
                    demonstrating strong individual initiative and technical
                    expertise.
                  </p>
                  <h3 style={{ marginTop: 7 }}>Responsibilities:</h3>
                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>
                      Developed and maintained a React JS frontend for a file
                      management system used to digitize maps independently
                    </li>
                    <li>
                      Implemented features to allow super admins to upload
                      files, assign them to agencies, and then to employees
                    </li>
                    <li>
                      Developed functionality for users to work on files and
                      send them for digitization
                    </li>
                    <li>
                      Added support for PDF creation, Excel file generation, and
                      barcode reading
                    </li>
                  </ul>
                  <h4 style={{ marginTop: 7 }}>
                    Project Duration: 08/2023 - present
                  </h4>
                  <h4 style={{ marginTop: 7 }}>
                    ReactJs | React Router | Redux | Redux Saga | Ant Design |
                    HTML | CSS | JavaScript | NPM | Github
                  </h4>
                </div>
              </div>
              <div>
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={require("./Images/QuizzApp.png")}
                  alt=""
                />
                <div id="prdetails">
                  <h1>
                    Quiz App
                    <br />
                  </h1>
                  <p>It is a quiz application</p>
                  <h3 style={{ marginTop: 7 }}>Responsibilities:</h3>

                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>
                      Student can select the answers until there answer will not
                      come true.
                    </li>
                    <li>
                      If selected wrong answer then he will get notified by red
                      color.
                    </li>
                    <li>
                      If selected Correct answer then he will get notified by
                      green color.
                    </li>
                    <li>They can show the total score.</li>
                    <li>After Finishing the quiz they can restart the quiz.</li>
                  </ul>

                  <h4 style={{ marginTop: 7 }}>Project Duration: One Day</h4>
                  <h4 style={{ marginTop: 7 }}>
                    HTML | CSS | JavaScript | Github
                  </h4>

                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/QuizApp"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />{" "}
                      </div>
                    </a>
                    <a
                      href="https://quiz-app-six-ruby.vercel.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <LinkOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img src={require("./Images/nyk.png")} alt="" />
                <div id="prdetails">
                  <h1>Nykaa clone</h1>
                  <p>
                    This website is the clone of the Nykaa. which is one of the
                    famous E-commerce website in India and we tried to make this
                    website similar to the original website as much as possible.
                  </p>
                  <p>
                    A collaborative project, built in 6 days by a team of 6
                    members.
                  </p>
                  <p>HTML | CSS | JavaScript </p>
                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/NykaaClone"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Emplpoyee Management System */}
              <div>
                <img src={require("./Images/Wheather.png")} alt="" />

                <div id="prdetails">
                  <h1>Weather App</h1>
                  <p>
                    You can search weather condition at your city just by
                    submitting the name of your city. Which will show you the
                    temprature of your city, max temprature, min temprature,
                    humidity, etc. and the map of your city also.{" "}
                  </p>
                  <p>A mini project, built within 4 days</p>
                  <p>HTML | CSS | JavaScript </p>
                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/Wheather-app"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />{" "}
                      </div>
                    </a>

                    <a
                      href="https://resonant-narwhal-1c8386.netlify.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <LinkOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img src={require("./Images/Star.png")} alt="" />
                <div id="prdetails">
                  <h1>Star Wars search bar</h1>
                  <p>
                    You can search any characters related to the star wars. It
                    will show you the details ralated to the character with his
                    age and the gender just after putting the first letter his
                    of name.
                  </p>

                  <p>A mini project, build within 3 days</p>
                  <p>HTML | CSS | JavaScript </p>

                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/Star-Wars"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />{" "}
                      </div>
                    </a>

                    <a
                      href="https://golden-pudding-2b5ec7.netlify.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <LinkOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={require("./Images/employeeManament.jpg")}
                  alt=""
                />

                {/* <img src="Images/nyk.png" alt="">    */}

                <div id="prdetails">
                  <h1>Employee Management System</h1>

                  <p>
                    It is an Employee Management System with the help of this
                    appliocation, you can manage the details of the employee in
                    your company.
                  </p>

                  <h3 style={{ marginTop: 7 }}>Features:</h3>

                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>Registration of employees</li>
                    <li>Deleting employee</li>
                    <li>Updating details of employee</li>
                    <li>Getting the details of employee</li>
                    <li>Data Validation</li>
                    <li>Exception Handling</li>
                  </ul>

                  <h4 style={{ marginTop: 7 }}>
                    A mini project, built within 5 days
                  </h4>
                  <h4 style={{ marginTop: 7 }}>
                    Java | MySQL | Hibernate | Spring | Spring Boot | Swagger
                  </h4>

                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/Tender_Management_System"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Student Management System */}
              <div>
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={require("./Images/studentMangement.webp")}
                  alt=""
                />

                <div id="prdetails">
                  <h1>Student Management System</h1>

                  <p>
                    It is an Student Management System with the help of this
                    application, you can manage the details of the Student in
                    your organization.
                  </p>

                  <h3 style={{ marginTop: 7 }}>Features:</h3>

                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>Registration of student</li>
                    <li>Deleting Student details</li>
                    <li>Updating details of student</li>
                    <li>Getting the details of student</li>
                    <li>Data Validation</li>
                    <li>Exception Handling</li>
                  </ul>

                  <h4 style={{ marginTop: 7 }}>
                    Java | MySQL | Hibernate | Spring | Spring Boot | Swagger
                  </h4>

                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/Student_Managemet_System_A_Spring_Boot_Project"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img src={require("./Images/h.png")} alt="" />
                <div id="prdetails">
                  <h1>Hotstar</h1>
                  <p>
                    You can search any movie and you will get the results within
                    5 seconds. Which will show the movie details like full movie
                    name, published year and type.
                  </p>

                  <p>A mini project, built within 3 days</p>
                  <p>HTML | CSS | JavaScript </p>

                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/Hotstar"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <GithubOutlined />
                      </div>
                    </a>

                    <a
                      href="https://unrivaled-cat-71c60d.netlify.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <LinkOutlined />{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ṣtatistics */}
        <div id="Statistics">
          <div className="container">
            <h1 className="sub-title">Statistics</h1>
            <div id="adjSta">
              <div id="staData">
                <div id="circle">
                  <h2>7000+</h2>
                </div>
                <h3>Hours</h3>
                <p>of coading</p>
              </div>

              <div id="staData">
                <div id="circle">
                  <h2>400+</h2>
                </div>
                <h3>GitHub</h3>
                <p>Contributions</p>
              </div>

              <div id="staData">
                <div id="circle">
                  <h2>9+</h2>
                </div>
                <h3>Projects</h3>
                <p>Completed</p>
              </div>

              <div id="staData">
                <div id="circle">
                  <h2>100+</h2>
                </div>
                <h3>Hours</h3>
                <p>of soft skills </p>
              </div>
            </div>
          </div>
        </div>
        <div className="github-calender" style={{ marginTop: "80px" }}>
          <strong className="github-title">My GitHub Calender</strong>
          <div
            className="github-calender__github-calender"
            style={{ border: "1px solid yellow", background: "white" }}
          >
            <GitHubCalendar className="calender" username="sudarshanmane" />
          </div>
        </div>

        <div id="Projects" style={{ marginTop: "80px", marginBottom: "-70px" }}>
          <div>
            <NewSection
              img={<img src={require("./images_1/blogs.png")} alt=""></img>}
              desc={
                <>
                  🌟 Explore the latest insights and tutorials on ReactJS on my
                  Medium blog! 📚 Dive into the world of web development with
                  expert tips and tricks. Click here to visit:
                  <div style={{ marginTop: "10px" }}>
                    <a
                      href={"https://medium.com/@sudarshanmane2110"}
                      target="_blank"
                    >
                      <Button
                        style={{ background: "rgb(0, 5, 78)", color: "white" }}
                      >
                        Visit My Blogs Site
                      </Button>
                    </a>
                  </div>
                </>
              }
              title={"Blogs"}
            ></NewSection>
          </div>
          <div style={{ marginTop: "-80px" }} className="container">
            <h1 className="sub-title">Contact</h1>
            <div id="contact">
              <h2>Get In Touch</h2>
              <h2>Sudarshan Mane</h2>
              <div>
                <a
                  href="https://www.linkedin.com/in/sudarshan-mane-065823236/"
                  target="_blank"
                >
                  <div>
                    <img src={require("./Images/in.png")} alt="" />
                    <p>Linkedin</p>
                  </div>
                </a>

                <a href="https://github.com/sudarshanmane" target="_blank">
                  <div>
                    <img src={require("./Images/github.png")} alt="" />
                    <p>GitHub</p>
                  </div>
                </a>

                <a href="mailto:sudarshanmane2110@gmail.com">
                  <div>
                    <img src={require("./Images/gmail.png")} alt="" />
                    <p>Email</p>
                  </div>
                </a>

                <a href="tel:9370105149">
                  <div>
                    <img src={require("./Images/cont.png")} alt="" />
                    <p>phone</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
