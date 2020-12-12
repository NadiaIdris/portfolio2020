import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import TitleParagraphImage from "./TitleParagraphImage";
import ColOneTextColTwoImg from "./ColOneTextColTwoImg";
import TitleParagraphMobileGallery from "./TitleParagraphMobileGallery";
import DesignProjects from "./DesignProjects";
import truckXData from "../data/truckXData";
import { getMoreDesignProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import inmusikData from "../data/inmusikData";
import Footer from "./Footer";
import TitleParagraphWebGallery from "./TitleParagraphWebGallery";
import abbeyRoadStudiosData from "../data/abbeyRoadStudiosData";

const Inmusik = () => {
  return (
    <React.Fragment>
      <Header
        projectName={inmusikData.title}
        description={inmusikData.description}
        mainImg={inmusikData.mainImage}
        mainImgAlt={inmusikData.mainImageAlt}
      />
      <AboutProject
        duration={inmusikData.aboutProjectArray[0]}
        platformArray={inmusikData.aboutProjectArray[1]}
        screens={inmusikData.aboutProjectArray[2]}
        role={inmusikData.aboutProjectArray[3]}
        contribution={inmusikData.aboutProjectArray[4]}
      />
      <TitleParagraph
        title={inmusikData.aboutTitle}
        paragraphArray={inmusikData.aboutArray}
      />
      <TitleBulletPointsOneColumn
        title={inmusikData.featuresTitle}
        bulletPointsArray={inmusikData.featuresArray}
      />

      <TitleParagraphImage
        title={inmusikData.userStoriesTitle}
        paragraphArray={inmusikData.userStoriesArray}
        image={inmusikData.userStoriesImage}
        imageAlt={inmusikData.userStoriesAlt}
        imageId={inmusikData.userStoriesId}
      />

      <TitleParagraphWebGallery
        title={uampData.webGalleryTitle}
        paragraph={uampData.webGalleryParagraph}
        webGalleryImagesArray={uampData.webGalleryImagesArray}
        webGalleryModalId={uampData.webGalleryModalId}
      />
      {/*<ColOneTextColTwoImg*/}
      {/*  title={inmusikData.highFiTitle}*/}
      {/*  paragraph={inmusikData.highFiParagraph}*/}
      {/*  image={inmusikData.highFiImage}*/}
      {/*  imageAlt={inmusikData.highFiImageAlt}*/}
      {/*  imageId={inmusikData.highFiId}*/}
      {/*/>*/}
      {/*<DesignProjects*/}
      {/*  title={truckXData.moreDesignProjectsTitle}*/}
      {/*  designProjectsArray={getMoreDesignProjectsArrayBy(*/}
      {/*    "UniversalAndroidMusicPlayer"*/}
      {/*  )}*/}
      {/*/>*/}
      <Footer />
    </React.Fragment>
  );
};

export default Inmusik;
