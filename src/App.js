import { Carousel } from "react-responsive-carousel";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GitHubCalendar from "react-github-calendar";
import "./style.scss";
import Typewriter from "typewriter-effect";
import { Divider, Tabs } from "antd";

function App() {
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
        <div className="header-text" id="header-text">
          <div>
            <h1>
              <span>Hi,</span> I am <span>Sudarshan</span>
              <br /> Full Stack Web Developer
              <br />
              <Typewriter
                className="typewriter"
                options={{
                  strings: [
                    `<div class="wrapper">
                <b>
                  Exploring DSA as a stepping  stone into the world Software development. 
                  <br /> 
                </b>
              </div>`,
                  ],
                  autoStart: true,
                  loop: true,
                  changeDelay: 20,
                  delay: 20,
                }}
              />
            </h1>
            <a
              id="resume"
              href="https://drive.google.com/file/d/1CeFeYERC1zHX5j9SYKypBHHn15wqRZmt/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div>
            <img src={require("./Images/anim1.gif")} alt="Animated GIF" />
          </div>
        </div>

        {/* <Carousel>
            <div>
              <img
                style={{ width: "50px" }}
                src={require("./Images/newLogo.png")}
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img
                style={{ width: "50px" }}
                src={require("./Images/newLogo.png")}
              />{" "}
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img
                style={{ width: "400px" }}
                src={require("./Images/Sudarshan_Mane_NB.png")}
              />{" "}
              <p className="legend">Legend 3</p>
            </div>
          </Carousel> */}

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
                          <>
                            <ul style={{ paddingLeft: "10%" }}>
                              <li>
                                Bachelor's of Engineering. Pune University -
                                07/2017- 07/2021
                              </li>
                            </ul>
                          </>
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
          <div className="container">
            <h1 className="sub-title">Skills</h1>
            <div className="skills-list">
              <div>
                <img src={require("./Images/HTML.png")} alt="" />
                <p>HTML5</p>
              </div>

              <div>
                <img src={require("./Images/css.png")} alt="" />
                <p>CSS3</p>
              </div>

              <div>
                <img src={require("./Images/bootstrap.jpg")} alt="" />
                <p>Bootstrap 5</p>
              </div>
              <div>
                <img src={require("./Images/tailwind.png")} alt="" />
                <p>Tailwind CSS</p>
              </div>

              <div>
                <img src={require("./Images/js.png")} alt="" />
                <p>JavaScript</p>
              </div>

              <div>
                <img src={require("./Images/reactJs.png")} alt="" />
                <p>ReactJs</p>
              </div>

              <div>
                <img src={require("./Images/Redux.jpeg")} alt="" />
                <p>Redux</p>
              </div>

              <div>
                <img src={require("./Images/reduxSaga.jpg")} alt="" />
                <p>Redux-Saga</p>
              </div>

              <div>
                <img src={require("./Images/router.png")} alt="" />
                <p>Redux Router</p>
              </div>

              <div>
                <img src={require("./Images/Antd.png")} alt="" />
                <p>Ant Design</p>
              </div>

              <div>
                <img src={require("./Images/java.png")} alt="" />
                <p>JAVA</p>
              </div>

              <div>
                <img src={require("./Images/sql.png")} alt="" />
                <p>MySQL</p>
              </div>

              <div>
                <img src={require("./Images/JDBC.png")} alt="" />
                <p>JDBC</p>
              </div>

              <div>
                <img src={require("./Images/Hiber.png")} alt="" />
                <p>Hibernate</p>
              </div>

              <div>
                <img src={require("./Images/maven.jpg")} alt="" />
                <p>Maven</p>
              </div>
              <div>
                <img src={require("./Images/spring.jpg")} alt="" />
                <p>Spring</p>
              </div>
              <div>
                <img src={require("./Images/sb.png")} alt="" />
                <p>Spring Boot</p>
              </div>
            </div>
          </div>
        </div>

        <div id="projs">
          <div className="container">
            <h1 className="sub-title">Projects</h1>
            <div className="projects-list">
              <div>
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={require("./Images/FMS.png")}
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
                      paddingRight: "10%",
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
                        <img src={require("./Images/github.png")} alt="" />
                      </div>
                    </a>
                    <a
                      href="https://quiz-app-six-ruby.vercel.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <img src={require("./Images/link.png")} alt="" />
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
                        <img src={require("./Images/github.png")} alt="" />
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
                        <img src={require("./Images/github.png")} alt="" />
                      </div>
                    </a>

                    <a
                      href="https://resonant-narwhal-1c8386.netlify.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <img src={require("./Images/link.png")} alt="" />
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
                        <img src={require("./Images/github.png")} alt="" />
                      </div>
                    </a>

                    <a
                      href="https://golden-pudding-2b5ec7.netlify.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <img src={require("./Images/link.png")} alt="" />
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
                        <img src={require("./Images/github.png")} alt="" />
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
                        <img src={require("./Images/github.png")} alt="" />
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
                        <img src={require("./Images/github.png")} alt="" />

                        <img src="Images/github.png" alt="" />
                      </div>
                    </a>

                    <a
                      href="https://unrivaled-cat-71c60d.netlify.app/"
                      target="_blank"
                    >
                      <div>
                        <div>Link</div>
                        <img src={require("./Images/link.png")} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <video
                  controls
                  poster={require("./Images/tender.png")}
                  style={{
                    display: "flexl",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2.4%",
                    width: "100%",
                  }}
                >
                  {" "}
                  <source
                    src="Images/TenderManagement.mp4"
                    type="video/mp4"
                  />{" "}
                </video>

                <div id="prdetails">
                  <h1>Tender Management System</h1>
                  <p>
                    Whenever a company requires a service/merchandise , a tender
                    is floated. Company maintains an empaneled list of Vendors.
                    The company will then select the most suitable bid and
                    places the order to that vendor.
                  </p>

                  <h3 style={{ marginTop: 7 }}>Features:</h3>

                  <ul
                    type="circle"
                    style={{ fontWeight: "lighter", marginLeft: 17 }}
                  >
                    <li>Login/Signup system</li>
                    <li> Creating the tenders </li>
                    <li> Assigning the tender to the vendor</li>
                  </ul>

                  <h4 style={{ marginTop: 7 }}>
                    A mini project, built within 5 days
                  </h4>
                  <h4 style={{ marginTop: 7 }}>
                    Java | MySQL | JDBC | Spring Boot{" "}
                  </h4>

                  <div id="details">
                    <a
                      href="https://github.com/sudarshanmane/Tender_Management_System"
                      target="_blank"
                    >
                      <div>
                        <div>Code</div>
                        <img src={require("./Images/github.png")} alt="" />
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
        <div className="github-calender">
          <strong className="github-title">My GitHub Calender</strong>
          <div
            className="github-calender__github-calender"
            style={{ border: "1px solid yellow", background: "white" }}
          >
            <GitHubCalendar className="calender" username="sudarshanmane" />
          </div>
        </div>

        {/* contact */}

        <div id="Projects">
          <div className="container">
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
                    <p>Likedin</p>
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
