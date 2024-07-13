import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import spreadsheetAppData from "../data/spreadsheetPrototypeAppData";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import Footer from "./Footer";
import { getMoreCodingProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import MoreCodingProjects from "./MoreCodingProjects";
import { PageNames } from "../names";

class SpreadsheetPrototypeApp extends React.Component {
  render() {
    const clientSideTechSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Client-side technologies used</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Library:&nbsp;</span>
              React (CRA)
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
              <span>Web APIs:&nbsp;</span>
              Clipboard API, Drag and Drop API, Web Storage API (localStorage)
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
              <span>Storing user data in the browser:&nbsp;</span>
              localStorage
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
              src="https://www.youtube.com/embed/z7toayKRV44?si=UpfJHgXTczWqCzUf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      );
    };

    return (
      <React.Fragment>
        <Header
          projectName={spreadsheetAppData.title}
          description={spreadsheetAppData.description}
          mainImg={spreadsheetAppData.mainImage}
          mainImgAlt={spreadsheetAppData.mainImageAlt}
          buttonToApp={spreadsheetAppData.buttonToApp}
          buttonToAppText={spreadsheetAppData.buttonToAppText}
          buttonToAppLink={spreadsheetAppData.buttonToAppLink}
        />
        <AboutProject
          duration={spreadsheetAppData.aboutProjectArray[0]}
          platformArray={spreadsheetAppData.aboutProjectArray[1]}
          repo={spreadsheetAppData.aboutProjectArray[2]}
          role={spreadsheetAppData.aboutProjectArray[3]}
          contribution={spreadsheetAppData.aboutProjectArray[4]}
        />
        {videoSection()}
        <TitleBulletPointsOneColumn
          title={spreadsheetAppData.featuresTitle}
          bulletPointsArray={spreadsheetAppData.featuresArray}
        />
        {clientSideTechSection()}
        {otherTechSection()}
        <MoreCodingProjects
          codingProjectsArray={getMoreCodingProjectsArrayBy(
            PageNames.SPREADSHEET_PROTOTYPE_APP
          )}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default SpreadsheetPrototypeApp;
