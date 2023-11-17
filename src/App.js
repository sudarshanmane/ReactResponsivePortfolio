import { Carousel } from "react-responsive-carousel";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <div>
      <>
        <div id="header">
          {/* <Navbar></Navbar> */}
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
                  href="https://drive.google.com/file/d/1g7crRjJS1zXkeB1XW0e6GMIJgB3VDAbn/view?usp=share_link"
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
                    href="https://drive.google.com/file/d/1g7crRjJS1zXkeB1XW0e6GMIJgB3VDAbn/view?usp=share_link"
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
          <div className="header-text">
            <h1>
              {" "}
              <span>Hi,</span> I am <span>Sudarshan</span>
              <br /> Java Developer
            </h1>
          </div>

          <a
            id="resume"
            href="https://drive.google.com/file/d/1g7crRjJS1zXkeB1XW0e6GMIJgB3VDAbn/view?usp=share_link"
            target="_blank"
          >
            Download Resume
          </a>

          <Carousel>
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
          </Carousel>

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
                  <h1 className="sub-title">About Me</h1>
                  <p>
                    A self Motivated and Ambitious Java Developer.
                    Problem-solving mindset and ability to perform well in
                    collaboration. seeking a job in an organization where I can
                    learn new skills and utilize skills for the growth of myself
                    and the organization.
                  </p>
                  <div className="tab-titles">
                    <p className="tab-links active-link">Education</p>
                  </div>

                  <div className="tab-content">
                    <ul>
                      <li>
                        <span>2017- 2021</span> <br />
                        Bachelor's of Engineering. Pune University
                      </li>
                    </ul>
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
                  <img src={require("./Images/java.png")} alt="" />
                  <p>JAVA</p>
                </div>

                <div>
                  <img src="Images/sql.png" alt="" />
                  <p>MySQL</p>
                </div>

                <div>
                  <img src="Images/JDBC.png" alt="" />
                  <p>JDBC</p>
                </div>

                <div>
                  <img src="Images/Hiber.png" alt="" />
                  <p>Hibernate</p>
                </div>

                <div>
                  <img src="Images/maven.jpg" alt="" />
                  <p>Maven</p>
                </div>

                <div>
                  <img src="Images/spring.jpg" alt="" />
                  <p>Spring</p>
                </div>

                <div>
                  <img src="Images/sb.png" alt="" />
                  <p>Spring Boot</p>
                </div>

                <div>
                  <img src="Images/HTML.png" alt="" />
                  <p>HTML</p>
                </div>

                <div>
                  <img src="Images/css.png" alt="" />
                  <p>CSS</p>
                </div>

                <div>
                  <img src="Images/js.png" alt="" />
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>

          <div id="projs">
            <div className="container">
              <h1 className="sub-title">Projects</h1>
              <div className="projects-list">
                <div>
                  <video
                    controls
                    poster="Images/tender.png"
                    style={{
                      display: "flexl",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2.4%",
                    }}
                  >
                    {" "}
                    <source
                      src="Images/TenderManagement.mp4"
                      type="video/mp4"
                    />{" "}
                  </video>

                  <div id="prdetails">
                    <h1>TenderSolution</h1>
                    <h3>Tender Management System</h3>

                    <p>
                      Whenever a company requires a service/merchandise , a
                      tender is floated. Company maintains an empaneled list of
                      Vendors. The company will then select the most suitable
                      bid and places the order to that vendor.
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
                          <img src="Images/github.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emplpoyee Management System */}

                <div>
                  <img
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                    }}
                    src="https://blog.vantagecircle.com/content/images/size/w1000/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png"
                    alt=""
                  />

                  {/* <img src="Images/nyk.png" alt="">    */}

                  <div id="prdetails">
                    <h1>Employee Management System</h1>

                    <p>
                      It is an Employee Management System with the help of this
                      appliocation, you can manage the details of the employee
                      in your company.
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
                          <img src="Images/github.png" alt="" />
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
                    src="https://cdn.elearningindustry.com/wp-content/uploads/2021/02/learning-and-development-strategies.png"
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
                          <img src="Images/github.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img src="Images/nyk.png" alt="" />
                  <div id="prdetails">
                    <h1>Nykaa clone</h1>
                    <p>
                      This website is the clone of the Nykaa. which is one of
                      the famous E-commerce website in India and we tried to
                      make this website similar to the original website as much
                      as possible.
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
                          <img src="Images/github.png" alt="" />
                        </div>
                      </a>

                      <a href="https://lnkd.in/dZHGrysM" target="_blank">
                        <div>
                          <div>Link</div>
                          <img src="Images/link.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img src="Images/Wheather.png" alt="" />

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
                          <img src="Images/github.png" alt="" />
                        </div>
                      </a>

                      <a
                        href="https://resonant-narwhal-1c8386.netlify.app/"
                        target="_blank"
                      >
                        <div>
                          <div>Link</div>
                          <img src="Images/link.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img src="Images/Star.png" alt="" />
                  <div id="prdetails">
                    <h1>Star Wars search bar</h1>
                    <p>
                      You can search any characters related to the star wars. It
                      will show you the details ralated to the character with
                      his age and the gender just after putting the first letter
                      his of name.
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
                          <img src="Images/github.png" alt="" />
                        </div>
                      </a>

                      <a
                        href="https://golden-pudding-2b5ec7.netlify.app/"
                        target="_blank"
                      >
                        <div>
                          <div>Link</div>
                          <img src="Images/link.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="Images/h.png" alt="" />

                  <div id="prdetails">
                    <h1>Hotstar</h1>
                    <p>
                      You can search any movie and you will get the results
                      within 5 seconds. Which will show the movie details like
                      full movie name, published year and type.
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
                          <img src="Images/github.png" alt="" />
                        </div>
                      </a>

                      <a
                        href="https://unrivaled-cat-71c60d.netlify.app/"
                        target="_blank"
                      >
                        <div>
                          <div>Link</div>
                          <img src="Images/link.png" alt="" />
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
                    <h2>1000+</h2>
                  </div>
                  <h3>Hours</h3>
                  <p>of coading</p>
                </div>

                <div id="staData">
                  <div id="circle">
                    <h2>200+</h2>
                  </div>
                  <h3>GitHub</h3>
                  <p>Contributions</p>
                </div>

                <div id="staData">
                  <div id="circle">
                    <h2>7+</h2>
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
                      <img src="Images/in.png" alt="" />
                      <p>Likedin</p>
                    </div>
                  </a>

                  <a href="https://github.com/sudarshanmane" target="_blank">
                    <div>
                      <img src="Images/github.png" alt="" />
                      <p>GitHub</p>
                    </div>
                  </a>

                  <a href="mailto:sudarshanmane2110@gmail.com">
                    <div>
                      <img src="Images/gmail.png" alt="" />
                      <p>Email</p>
                    </div>
                  </a>

                  <a href="tel:9370105149">
                    <div>
                      <img src="Images/cont.png" alt="" />
                      <p>phone</p>
                    </div>
                  </a>
                </div>

                <h3>©2022 copyright all right reserved</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
