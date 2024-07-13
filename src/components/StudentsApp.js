import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import studentsAppData from "../data/studentsAppData";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import Footer from "./Footer";
import { getMoreCodingProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import MoreCodingProjects from "./MoreCodingProjects";
import { PageNames } from "../names";

class StudentsApp extends React.Component {
  render() {
    const clientSideTechSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Client-side technologies used</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>React:&nbsp;</span>
              <div className="bullet-point-container margin-top">
                <p className="dash">-</p>
                <p>Context API (for state management), hooks</p>
              </div>
              <div className="bullet-point-container margin-top">
                <p className="dash">-</p>
                <p>
                  <span>React Router&nbsp;</span>
                  (for client-side routing)
                </p>
              </div>
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Language:&nbsp;</span>
              TypeScript (ES6)
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Styling and layouts:&nbsp;</span>
              styled-components (CSS in JS), CSS
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Custom reusable components:&nbsp;</span>
              Custom reusable components are written from scratch (Button,
              TextInput, Modal, Dropdown, etc)
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Axios:&nbsp;</span>
              Axios (for making HTTP requests)
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Testing:&nbsp;</span>
              Unit tests using Jest and React Testing Library
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Responsive UI:&nbsp;</span>
              The whole app is responsive using CSS Grid, Flexbox, and media
              queries
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Form validation:&nbsp;</span>
              Joi for client-side form validation
            </p>
          </div>
        </div>
      );
    };

    const serverSideTechSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Server-side technologies used</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Runtime:&nbsp;</span>
              Node.js
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Language:&nbsp;</span>
              JavaScript (ES6)
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Server:&nbsp;</span>
              Express.js
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Relational database:&nbsp;</span>
              PostgreSQL
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Deployment:&nbsp;</span>
              AWS EC2, nginx
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Authentication:&nbsp;</span>
              Authentication using JWT tokens. JWT tokens are stored in the
              browser's local storage. The token is sent in the header of each
              request to the server
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Password hashing:&nbsp;</span>
              Bcrypt
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Cross-origin requests:&nbsp;</span>
              CORS
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Form validation:&nbsp;</span>
              Joi for server-side form validation
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Testing:&nbsp;</span>
              Unit tests using Jest
            </p>
          </div>
        </div>
      );
    };

    const otherTechSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Other technologies used</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Version control:&nbsp;</span>
              Git
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Remote code storage:&nbsp;</span>
              GitHub
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Project management:&nbsp;</span>
              GitHub issues
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Product design tool:&nbsp;</span>
              Figma
            </p>
          </div>
        </div>
      );
    };

    const apiDesign = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>API design</h2>
          <h4 style={{ marginBottom: "10px", marginTop: "-10px" }}>Registered user routes</h4>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>POST /api/v1/user/signup</code>
              &nbsp;- Register a user
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>POST /api/v1/user/login</code>
              &nbsp;- Log in a user
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>DELETE /api/v1/:userId/delete</code>
              &nbsp;- Delete a user account
            </p>
          </div>
          <h4 style={{ marginBottom: "10px", marginTop: "-10px" }}>Student routes</h4>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>GET /api/v1/students</code>
              &nbsp;- Get all students
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>GET /api/v1/students/:uid</code>
              &nbsp;- Get one student
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>POST /api/v1/students/add-student</code>
              &nbsp;- Add a student
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>PUT /api/v1/students/:uid</code>
              &nbsp;- Update a student
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <code>DELETE /api/v1/students/:uid</code>
              &nbsp;- Delete a student
            </p>
          </div>
        </div>
      );
    };

    const videoSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Video</h2>
          <div
            className="video-container"
            style={{ width: "100%", height: "100%", aspectRatio: "16/9" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tCMTtNJYRdc?si=IBdMdlr7xE4eJ239"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      );
    };

    return (
      <React.Fragment>
        <Header
          projectName={studentsAppData.title}
          description={studentsAppData.description}
          mainImg={studentsAppData.mainImage}
          mainImgAlt={studentsAppData.mainImageAlt}
          buttonToApp={studentsAppData.buttonToApp}
          buttonToAppText={studentsAppData.buttonToAppText}
          buttonToAppLink={studentsAppData.buttonToAppLink}
        />
        <AboutProject
          duration={studentsAppData.aboutProjectArray[0]}
          platformArray={studentsAppData.aboutProjectArray[1]}
          repo={studentsAppData.aboutProjectArray[2]}
          role={studentsAppData.aboutProjectArray[3]}
          contribution={studentsAppData.aboutProjectArray[4]}
        />
        {videoSection()}
        <TitleBulletPointsOneColumn
          title={studentsAppData.featuresTitle}
          bulletPointsArray={studentsAppData.featuresArray}
        />
        {clientSideTechSection()}
        {serverSideTechSection()}
        {otherTechSection()}
        {apiDesign()}
        <MoreCodingProjects
          codingProjectsArray={getMoreCodingProjectsArrayBy(PageNames.STUDENTS_APP)}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default StudentsApp;
