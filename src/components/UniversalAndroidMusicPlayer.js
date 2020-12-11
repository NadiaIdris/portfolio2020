import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import uampData from "../data/uampData";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";

const UniversalAndroidMusicPlayer = () => {
  return (
    <React.Fragment>
      <Header
        projectName={uampData.title}
        description={uampData.description}
        mainImg={uampData.mainImage}
        mainImgAlt={uampData.mainImageAlt}
      />
      <AboutProject
        duration={uampData.aboutProjectArray[0]}
        platformArray={uampData.aboutProjectArray[1]}
        screens={uampData.aboutProjectArray[2]}
        role={uampData.aboutProjectArray[3]}
        contribution={uampData.aboutProjectArray[4]}
      />
      <TitleParagraph
        title={uampData.aboutTitle}
        paragraphArray={uampData.aboutArray}
      />
      <TitleBulletPointsOneColumn
        title={uampData.featuresTitle}
        bulletPointsArray={uampData.featuresArray}
      />
    </React.Fragment>
  );
};

export default UniversalAndroidMusicPlayer;
