import React from "react";
import truckXData from "./../data/truckXData";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import TitleParagraphImage from "./TitleParagraphImage";
import "./../styles/Header.css";
import "./../styles/ProjectPageGenericStyles.css";

const TruckX = () => {
  return (
    <React.Fragment>
      <Header
        projectName={truckXData.title}
        description={truckXData.description}
        mainImg={truckXData.mainImage}
        mainImgAlt={truckXData.mainImageAlt}
      />
      <AboutProject
        duration={truckXData.aboutProjectArray[0]}
        platformArray={truckXData.aboutProjectArray[1]}
        screens={truckXData.aboutProjectArray[2]}
        role={truckXData.aboutProjectArray[3]}
        contribution={truckXData.aboutProjectArray[4]}
      />
      <TitleParagraph
        title={truckXData.aboutTruckXTitle}
        paragraphArray={truckXData.aboutTruckXArray}
      />
      <TitleBulletPointsOneColumn
        title={truckXData.featuresTitle}
        bulletPointsArray={truckXData.featuresArray}
      />
      <TitleParagraph
        title={truckXData.userStoriesTitle}
        paragraphArray={truckXData.userStoriesArray}
      />
      <div className="project-page-component-container">
        <h2>Requirements</h2>
        <div className="requirements-columns-container">
          <div className="col-one">
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                The design must be fully compliant with FMCSA and DOT
                regulations.
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>It must be easy to use by truck drivers.</p>
            </div>
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                It has to organize a large amount of data effectively on a small
                phone screen.
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                Allow drivers to plan their trips and add stops in their
                favorable locations ahead of time.
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                Allow drivers to add upcoming loads and see all the previous
                loads with relevant data they have completed.
              </p>
            </div>
          </div>
          <div className="col-two">
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                It has to improve on the experience of using a physical logbook
                by putting together:
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="nested-dash">·</p>
              <p>
                Data from an external OBD-II device connected to the truck which
                measures telemetry data (fuel consumption, distance traveled,
                time and duration of the truck’s movement).
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="nested-dash">·</p>
              <p>
                The smartphone’s GPS information (location and time) with the
                telemetry data.
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="nested-dash">·</p>
              <p>Google Maps API to search and add stops easily.</p>
            </div>
          </div>
        </div>
      </div>
      <TitleParagraphImage
        title={truckXData.logbookTitle}
        image={truckXData.logbookImage}
        imageAlt={truckXData.logbookImgAlt}
      />
    </React.Fragment>
  );
};

export default TruckX;
