import React from "react";
import truckXData from "./../data/truckXData";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
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
        platform={truckXData.aboutProjectArray[1]}
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
    </React.Fragment>
  );
};

export default TruckX;
