import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GitHubCalendar from "react-github-calendar";
import "./style.scss";
import { Button } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import Marquee from "react-fast-marquee";
import "./sectionContainer.css";
import NewSection from "./NewSection";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MainContent from "./components/MainContent.jsx";
import AboutMe from "./components/AboutMe";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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

  const backedn = [
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./Images/nodejs.png")}
          />
          <h1 className="text-center font-semibold">Node.js</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./Images/express.png")}
          />
          <h1 className="text-center font-semibold">Express.js</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("./Images/mongodb.png")}
          />
          <h1 className="text-center font-semibold">Mongo DB</h1>
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
      <div id="header" data-aos="fade-down">
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
            {/* <li>
              <a href="#blogs">Blogs</a>
            </li> */}
            <li>
              <a href="#contact-details">Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1YJp-baXFsTrbQFnxpoocjvR31WQ5Zi13/view?usp=sharing"
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
                  href="https://drive.google.com/file/d/1YJp-baXFsTrbQFnxpoocjvR31WQ5Zi13/view?usp=sharing"
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
          <MainContent></MainContent>
          <div
            data-aos={"fade-left"}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={require("./Images/seatedImage.png")} alt="" />
          </div>
        </div>
        {/* -----------about---------  */}
        <AboutMe></AboutMe>
        {/* Skills */}

        <div id="skills" style={{ marginTop: "-60px" }}>
          <NewSection
            img={<img src={require("./images_1/skill.png")} alt=""></img>}
            title="Skills"
            desc="Versatile with modern technology tools for frontend and backend development."
          ></NewSection>
          <div style={{ marginBottom: "70px", marginTop: "-40px" }}>
            <div className="skills-header" data-aos="flip-left">
              Front End Skills
            </div>
            <div
              data-aos="fade-left"
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
                direction="right"
                autoFill={true}
              >
                {skillsDataFrontend.map((skill, id) => (
                  <div
                    className={`${
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
            <div
              className="skills-header another-skill-header"
              data-aos="flip-right"
            >
              Backend Skills
            </div>
            <div
              data-aos="fade-left"
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
                direction="left"
                autoFill={true}
              >
                {backedn.map((skill, id) => (
                  <div
                    className={`p-2 rounded-lg ml-3 
                    ${skill?.transparent ? "bg-transparent" : "bg-orange-300"}`}
                    id="marque-image-container"
                    key="1"
                  >
                    {skill.img}
                  </div>
                ))}
              </Marquee>
            </div>

            <div
              className="skills-header another-skill-header"
              data-aos="flip-left"
            >
              Tools
            </div>
            <div
              data-aos="fade-right"
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
                    className={`p-2 rounded-lg ml-3 bg-black
                    ${skill?.transparent ? "bg-transparent" : "bg-orange-300"}`}
                    id="marque-image-container"
                    key="1"
                  >
                    {skill.img}
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <div id="experience" style={{}}>
            <NewSection
              img={
                <img
                  src={require("./images_1/experience-image.png")}
                  alt=""
                ></img>
              }
              title="Experience"
              desc="Experience working with startups as a MERN Stack Developer, delivering responsive and scalable web applications from frontend to backend."
            ></NewSection>
          </div>

          <div
            style={{
              width: "100%",
              overflow: "auto",
              zIndex: "0",
              paddingTop: "-300px",
            }}
          >
            <VerticalTimeline>
              <VerticalTimelineElement
                className=" "
                contentStyle={{
                  // background: "rgb(33, 150, 243)",
                  color: "#330066",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Aug 2024 - Present"
                iconStyle={{
                  background: "rgb(193, 215, 234)",
                  color: "#fff",
                }}
                icon={<div />}
              >
                <h3 className="vertical-timeline-element-title text-2xl ">
                  Shaleemar IT Solutions Private Limited
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg text-teal-950">
                  Mern Stack Developer
                </h4>

                <div
                  className="text-sm text-blue-800"
                  style={{ marginTop: "10px", paddingLeft: "15px" }}
                >
                  <ul className="text-sm">
                    <li>
                      {" "}
                      Independently led the complete full-stack development of
                      the Digital Lost & Found System for Maha Kumbh Mela 2025
                    </li>
                    <li>
                      Integrated multilingual text-to-speech and AI
                      face-matching APIs
                    </li>
                    <li>
                      <ol>
                        Contributed to performance tuning and edge case handling
                        in production
                      </ol>
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  // background: "rgb(33, 150, 243)",
                  color: "#330066",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Feb 2023 - Aug 2024"
                iconStyle={{
                  background: "rgb(193, 215, 234)",
                  color: "#fff",
                }}
                icon={<div />}
              >
                <h3 className="vertical-timeline-element-title text-2xl ">
                  Metamind System Private Limited
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg text-teal-950">
                  Mern Stack Developer
                </h4>

                <div
                  className="text-sm text-blue-800"
                  style={{ marginTop: "10px", paddingLeft: "15px" }}
                >
                  <ul className="text-sm">
                    <li>
                      {" "}
                      Designed admin and operator dashboards for large-scale map
                      data digitization
                    </li>
                    <li>
                      Built multi-step workflows (Upload → Digitize → QC → Shape
                      files)
                    </li>
                    <li>
                      <ol>
                        Also led the deployment of the company’s website with
                        responsive and SEO-friendly design
                      </ol>
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>

        <div id="projs" style={{ width: "100%", paddingTop: "150px" }}>
          <NewSection
            img={<img src={require("./images_1/projects.png")} alt=""></img>}
            title="Projects"
            desc="In my projects, I utilize a broad range of state-of-the-art technology tools for both frontend and backend development. I specialize in creating and deploying web and mobile view applications."
          ></NewSection>

          <div className="container proj-container">
            <div className="projects-list">
              <div data-aos="fade-right">
                <PhotoProvider>
                  <PhotoView src={require("./Images/fmsImage1.png")}>
                    <img src={require("./Images/fmsImage1.png")} alt="" />
                  </PhotoView>
                </PhotoProvider>
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  alt=""
                />
                <div id="prdetails">
                  <h1>
                    File Management System
                    <br />
                  </h1>
                  <div
                    className="project-organization"
                    style={{
                      fontSize: "17px",
                      textAlign: "end",
                      width: "100%",
                      color: "violet",
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
                  <h3
                    className="pixel16"
                    style={{ marginTop: 7 }}
                    className="pixel16"
                  >
                    Responsibilities:
                  </h3>
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
                  <h4 className="pixel16" style={{ marginTop: 7 }}>
                    Project Duration: Feb 2023- present
                  </h4>
                  <h4 className="pixel16" style={{ marginTop: 7 }}>
                    ReactJs | React Router | Redux | Redux Saga | Ant Design |
                    HTML | CSS | JavaScript | NPM | Github
                  </h4>
                </div>
              </div>

              <div data-aos="fade-left">
                <PhotoProvider>
                  <PhotoView
                    src={require("./images_1/Screenshot 2024-06-17 154948.png")}
                  >
                    <img
                      src={require("./images_1/Screenshot 2024-06-17 154948.png")}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
                <div id="prdetails">
                  <h1>
                    Metamind System Website
                    <br />
                  </h1>
                  <div
                    className="project-organization"
                    style={{
                      fontSize: "17px",
                      textAlign: "end",
                      width: "100%",
                      color: "violet",
                    }}
                  >
                    Organization: Metamind System
                  </div>
                  <p>
                    Crafted a standalone website for MetaMind System Pvt. Ltd.
                    using React.js, focusing on user engagement and responsive
                    design. Delivered a polished digital platform to boost
                    MetaMind's online presence.
                  </p>
                  <h3
                    className="pixel16"
                    style={{ marginTop: 7 }}
                    className="pixel16"
                  >
                    Responsibilities:
                  </h3>
                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>
                      Led the design and development process for the MetaMind
                      System Pvt. Ltd. website.
                    </li>
                    <li>
                      Designed the user interface and user experience to ensure
                      optimal engagement and ease of navigation.
                    </li>
                    <li>
                      Developed frontend components and features using React.js
                      to create a dynamic and interactive website.
                    </li>
                    <li>
                      Ensured responsiveness across various devices and screen
                      sizes.
                    </li>
                  </ul>
                  <h4 className="pixel16" style={{ marginTop: 7 }}>
                    Project Duration: Aug 2024 - Jul 2024
                  </h4>
                  <h4 className="pixel16" style={{ marginTop: 7 }}>
                    ReactJs | React Router | Redux | Redux Saga | Ant Design |
                    HTML | CSS | JavaScript | NPM | Github
                  </h4>
                </div>
                <div id="details">
                  <a
                    href="https://www.metamindsystem.com/home/main"
                    target="_blank"
                  >
                    <div>
                      <div>Link</div>
                      <LinkOutlined />{" "}
                    </div>
                  </a>
                </div>
              </div>

              <div data-aos="fade-right">
                <PhotoProvider>
                  <PhotoView src={require("./Images/lostandfound.png")}>
                    <img src={require("./Images/lostandfound.png")} alt="" />
                  </PhotoView>
                </PhotoProvider>
                <div id="prdetails">
                  <h1>Digital Lost And Found System</h1>
                  <div
                    className="project-organization"
                    style={{
                      fontSize: "17px",
                      textAlign: "end",
                      width: "100%",
                      color: "violet",
                    }}
                  >
                    Organization: Shaleemar IT Solutions
                  </div>
                  <p>
                    The Digital Lost and Found System developed for the
                    Prayagraj Maha Kumbh Mela 2025 is a robust, full-stack web
                    application designed to address the challenges of reuniting
                    lost individuals and items in a large-scale event setting.
                  </p>
                  <h3
                    className="pixel16"
                    style={{ marginTop: 7 }}
                    className="pixel16"
                  >
                    Responsibilities:
                  </h3>
                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>
                      Independently led the complete full-stack development of
                      the Digital Lost & Found System for Maha Kumbh Mela 2025
                    </li>
                    <li>
                      Integrated multilingual text-to-speech and AI
                      face-matching APIs
                    </li>
                    <li>
                      •Contributed to performance tuning and edge case handling
                      in production
                    </li>
                  </ul>

                  <h4 className="pixel16" style={{ marginTop: 7 }}>
                    Project Duration: Aug2024 - Present
                  </h4>

                  <h4>
                    React.js | Redux| Tailwind CSS | Node.js | Express.js |
                    MongoDB
                  </h4>
                </div>
              </div>

              <div data-aos="fade-left">
                {/* <PhotoProvider>
                  <PhotoView>
                    <img
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto",
                      }}
                      alt=""
                    />{" "}
                  </PhotoView>
                </PhotoProvider> */}

                <PhotoProvider>
                  <PhotoView src={require("./Images/QuizzApp.png")}>
                    <img src={require("./Images/QuizzApp.png")} alt="" />
                  </PhotoView>
                </PhotoProvider>

                <div id="prdetails">
                  <h1>
                    Quiz App
                    <br />
                  </h1>
                  <p>It is a quiz application</p>
                  <h3
                    className="pixel16"
                    style={{ marginTop: 7 }}
                    className="pixel16"
                  >
                    Responsibilities:
                  </h3>

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

                  <h4 className="pixel16" style={{ marginTop: 7 }}>
                    Project Duration: One Day
                  </h4>
                  <h4 className="pixel16" style={{ marginTop: 7 }}>
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

              {/* Emplpoyee Management System */}
              <div data-aos="fade-right">
                <PhotoProvider>
                  <PhotoView src={require("./Images/Wheather.png")}>
                    <img src={require("./Images/Wheather.png")} alt="" />
                  </PhotoView>
                </PhotoProvider>

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
              {/* <div>
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
              </div> */}

              {/* Student Management System */}
              {/* <div>
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

                  <h3 className="pixel16" style={{ marginTop: 7 }}>Features:</h3>

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

                  <h4 className="pixel16" style={{ marginTop: 7 }}>
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
              </div> */}
              {/* <div>
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
              </div> */}
            </div>
          </div>
        </div>
        {/* Ṣtatistics */}
        {/* <div id="Statistics">
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
        </div> */}
        <div
          className="github-calender"
          id="Statistics"
          style={{ paddingTop: "100px" }}
        >
          <strong className="github-title" data-aos="fade-down">
            My GitHub Calender
          </strong>
          <div
            data-aos="fade-up"
            className="github-calender__github-calender"
            style={{ border: "1px solid yellow", background: "white" }}
          >
            <GitHubCalendar colorScheme="light" username="sudarshanmane" />
          </div>
        </div>

        <div id="Projects" style={{ marginBottom: "-70px" }}>
          <div id="blogs" style={{ paddingTop: "80px" }}>
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

          <div
            style={{ marginTop: "-300px", paddingTop: "200px" }}
            id="contact-details"
          >
            <div className="container">
              <h1 className="sub-title" data-aos="flip-left">
                Contact
              </h1>
              <div id="contact" data-aos="fade-up">
                <h2 className="cursive">Get In Touch</h2>
                <h2 className="" style={{ fontFamily: "cursive" }}>
                  Sudarshan Mane
                </h2>
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
                      <p>Phone</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
