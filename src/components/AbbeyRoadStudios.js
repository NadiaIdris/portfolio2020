import React from "react";
import abbeyRoadStudiosData from "../data/abbeyRoadStudiosData";
import "./../styles/TitleParagraphWebGallery.css";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import TitleParagraphImage from "./TitleParagraphImage";
import TitleParagraphWebGallery from "./TitleParagraphWebGallery";
import DesignProjects from "./DesignProjects";
import Footer from "./Footer";
import truckXData from "../data/truckXData";
import uampData from "../data/uampData";
import inmusikData from "../data/inmusikData";
import wholeWorldBandData from "../data/wholeWorldBandData";
import { getMoreDesignProjectsArrayBy } from "../data/designAndCodingProjectsArrays";

const AbbeyRoadStudios = () => {
  return (
    <React.Fragment>
      <Header
        projectName={abbeyRoadStudiosData.title}
        description={abbeyRoadStudiosData.description}
        mainImg={abbeyRoadStudiosData.mainImage}
        mainImgAlt={abbeyRoadStudiosData.mainImageAlt}
      />
      <AboutProject
        duration={abbeyRoadStudiosData.aboutProjectArray[0]}
        platformArray={abbeyRoadStudiosData.aboutProjectArray[1]}
        screens={abbeyRoadStudiosData.aboutProjectArray[2]}
        role={abbeyRoadStudiosData.aboutProjectArray[3]}
        contribution={abbeyRoadStudiosData.aboutProjectArray[4]}
      />
      <TitleParagraph
        title={abbeyRoadStudiosData.aboutTitle}
        paragraphArray={abbeyRoadStudiosData.aboutArray}
      />
      <TitleBulletPointsOneColumn
        title={abbeyRoadStudiosData.featuresTitle}
        bulletPointsArray={abbeyRoadStudiosData.featuresArray}
      />
      <TitleParagraphImage
        title={abbeyRoadStudiosData.personasTitle}
        paragraphArray={abbeyRoadStudiosData.personasParagraphArray}
        image={abbeyRoadStudiosData.personasImage}
        imageAlt={abbeyRoadStudiosData.personasImageAlt}
        imageId={abbeyRoadStudiosData.personasImageId}
      />
      <div className="project-page-column-component-container">
        <h2>Requirements</h2>
        <div className="requirements-columns-container">
          <div className="col-one">
            <div className="bullet-point-container space-between-paragraphs">
              <p className="dash">-</p>
              <p>
                Blend information and internal ads into the experience of
                customers browsing the website
              </p>
            </div>
            <div className="bullet-point-container space-between-paragraphs">
              <p className="dash">-</p>
              <p>
                Tell the story of each individual studio (Studio One, Studio Two
                etc)
              </p>
            </div>
            <div className="bullet-point-container space-between-paragraphs">
              <p className="dash">-</p>
              <p>
                Create a better user experience for emerging and hobbyist
                musicians to purchase online products and services
              </p>
            </div>
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                Create a new RED incubator program section for music technology
                start-ups and researchers.
              </p>
            </div>
          </div>
          <div className="col-two">
            <div className="bullet-point-container">
              <p className="dash">-</p>
              <p>
                300k people visit the famous crosswalk outside of the studio
                where The Beatles album “Abbey Road” cover was shot. Notify and
                guide people to visit the new souvenir store from the website’s
                crossing cam page. Integrate crossing cam’s old technology into
                the new designs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TitleParagraphImage
        title={abbeyRoadStudiosData.oldSiteTitle}
        paragraphArray={abbeyRoadStudiosData.oldSiteParagraphArray}
        image={abbeyRoadStudiosData.oldSiteImage}
        imageAlt={abbeyRoadStudiosData.oldSiteImageAlt}
        imageId={abbeyRoadStudiosData.oldSiteId}
      />
      <TitleParagraphImage
        title={abbeyRoadStudiosData.sitemapTitle}
        paragraphArray={abbeyRoadStudiosData.sitemapParagraphArray}
        image={abbeyRoadStudiosData.sitemapImage}
        imageAlt={abbeyRoadStudiosData.sitemapImageAlt}
        imageId={abbeyRoadStudiosData.sitemapImageId}
      />
      <TitleParagraphImage
        title={abbeyRoadStudiosData.typographyTitle}
        paragraphArray={abbeyRoadStudiosData.typographyParagraphArray}
        image={abbeyRoadStudiosData.typographyImage}
        imageAlt={abbeyRoadStudiosData.typographyImageAlt}
        imageId={abbeyRoadStudiosData.typographyImageId}
      />
      <TitleParagraphImage
        title={abbeyRoadStudiosData.interactionTitle}
        paragraphArray={abbeyRoadStudiosData.interactionParagraphArray}
        image={abbeyRoadStudiosData.interactionImage}
        imageAlt={abbeyRoadStudiosData.interactionImageAlt}
        imageId={abbeyRoadStudiosData.interactionId}
      />
      <TitleParagraphWebGallery
        title={abbeyRoadStudiosData.webGalleryTitle}
        paragraph={abbeyRoadStudiosData.webGalleryParagraph}
        webGalleryImagesArray={abbeyRoadStudiosData.webGalleryImagesArray}
        webGalleryModalId={abbeyRoadStudiosData.webGalleryModalId}
      />
      <DesignProjects
        title={abbeyRoadStudiosData.moreDesignProjectsTitle}
        designProjectsArray={getMoreDesignProjectsArrayBy("AbbeyRoadStudios")}
      />
      <Footer />
    </React.Fragment>
  );
};

export default AbbeyRoadStudios;
