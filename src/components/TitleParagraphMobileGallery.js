import React, { Component } from "react";
import previousArrow from "../vector-images/arrow-left.svg";
import nextArrow from "../vector-images/arrow-right.svg";

class TitleParagraphMobileGallery extends Component {
  componentDidMount() {}

  render() {
    return (
      <section
        id="mobile-gallery-container"
        className="project-page-column-component-container"
      >
        <h2>{this.props.title}</h2>
        <p className="space-between-paragraphs">{this.props.paragraph}</p>
        <button className="previous-button">
          <img src={previousArrow} />
        </button>
        <button className="next-button">
          <img src={nextArrow} />
        </button>
        <div id="all-mobile-gallery-images">
          {this.props.mobileGalleryImagesArray.map((image, index) => {
            return (
              <img
                src={image[0]}
                alt={image[1]}
                key={index}
                className="one-mobile-gallery-image"
              />
            );
          })}
        </div>

        {/*<button className="previous-button">*/}
        {/*  <img src={previousArrow} />*/}
        {/*</button>*/}
        {/*<button className="next-button">*/}
        {/*  <img src={nextArrow} />*/}
        {/*</button>*/}
        {/*<div id="all-mobile-images">*/}
        {/*  {.map((project, index) => {*/}
        {/*    return (*/}
        {/*        <div className="one-design-project" key={index}>*/}
        {/*          <div className="img-hover-zoom">*/}
        {/*            <img*/}
        {/*                className="design-project-img"*/}
        {/*                src={project.homepageImage}*/}
        {/*                alt={project.homepageImgAlt}*/}
        {/*            />*/}
        {/*          </div>*/}
        {/*          <div className="title-and-description-container">*/}
        {/*            <h4>{project.title}</h4>*/}
        {/*            <div className="project-description-container">*/}
        {/*              <p className="light-gray-text">{project.description}</p>*/}
        {/*              <div className="icons">*/}
        {/*                {project.icons.map((icon, index) => {*/}
        {/*                  return <img src={icon} key={index} />;*/}
        {/*                })}*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*    );*/}
        {/*  })}*/}

        {/*  /!* Empty-div class is for collapsing margins: https://www.smashingmagazine.com/2019/07/margins-in-css/*!/*/}
        {/*  <div className="empty-div"></div>*/}
        {/*</div>*/}
      </section>
    );
  }
}

export default TitleParagraphMobileGallery;
