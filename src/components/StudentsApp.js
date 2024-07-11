import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import studentsAppData from "../data/studentsAppData"; 
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import Footer from "./Footer";
import TitleMultipleParagraphGifs from "./TitleMultipleParagraphGifs";
import { getMoreCodingProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import MoreCodingProjects from "./MoreCodingProjects";

class StudentsApp extends React.Component {
  render() {
    const techSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Technologies</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Code:&nbsp;</span>
              JavaScript (ES 6, asynchronous programming), HTML, CSS.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Tools:&nbsp;</span>
              Webpack, Babel
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>APIs:&nbsp;</span>
              <a
                href="https://darksky.net/dev"
                target="_blank"
                rel="noreferrer"
                className="platform-link"
              >
                Dark Sky API
              </a>{" "}
              for the weather data and{" "}
              <a
                href="https://community.algolia.com/places/documentation.html#license"
                target="_blank"
                rel="noreferrer"
                className="platform-link"
              >
                Algolio Places API
              </a>{" "}
              to be able to search for a location.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Server:&nbsp;</span>
              In order to get around the CORS issue with Dark Sky API, I used
              Heroku Proxy server,{" "}
              <a
                href="https://github.com/gcollazo/easy-cors-proxy"
                target="_blank"
                rel="noreferrer"
                className="platform-link"
              >
                easy-cors-proxy
              </a>
              .
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Hosting:&nbsp;</span>
              Github pages.
            </p>
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
        <TitleMultipleParagraphGifs
          title={studentsAppData.endResultTitle}
          paragraphGifsArray={studentsAppData.endResultParagraphGifArray}
        />
        <TitleBulletPointsOneColumn
          title={studentsAppData.featuresTitle}
          bulletPointsArray={studentsAppData.featuresArray}
        />

        {techSection()}
        <MoreCodingProjects
          codingProjectsArray={getMoreCodingProjectsArrayBy("WeatherApp")}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default StudentsApp;
