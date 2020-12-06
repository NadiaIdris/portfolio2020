import React, { Component } from "react";
import previousArrow from "../vector-images/arrow-left.svg";
import nextArrow from "../vector-images/arrow-right.svg";
import { getValueOfCSSVariable } from "../utils";

class TitleParagraphMobileGallery extends Component {
  constructor(props) {
    super(props);
    this.MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS = +379;
    this.MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS = -379;
    this.HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
    this.imageLoadedCounter = 0;
  }

  componentDidMount() {
    this.initializeVariables();
    this.nextButton.addEventListener("click", this.moveSliderToRight);
    this.previousButton.addEventListener("click", this.moveSliderToLeft);
    console.log("Component did mount complete.");
  }

  initializeVariables = () => {
    this.sectionContainer = document.querySelector("#mobile-gallery-container");
    this.mobileGalleryImagesContainer = document.querySelector(
      "#all-mobile-gallery-images"
    );
    this.lastImage = document.querySelector(
      "#all-mobile-gallery-images"
    ).lastElementChild;
    this.firstImage = document.querySelector(
      "#all-mobile-gallery-images"
    ).firstElementChild;
    this.nextButton = this.sectionContainer.querySelector(".next-button");
    this.previousButton = this.sectionContainer.querySelector(
      ".previous-button"
    );
  };

  doCalculationsAfterAllImagesHaveLoaded = () => {
    // Hide previous button on page load.
    this.hidePreviousButtonIfViewportLargerThan1280Px();
    this.hidePreviousButtonIfViewportSmallerThan601Px();
    this.hidePreviousButtonIfViewport601To1280Px();
    this.showNextButton();
  };

  /** This gets called after each images is loaded. */
  imageLoaded() {
    this.imageLoadedCounter++;
    console.log("An image has loaded.");
    if (this.props.mobileGalleryImagesArray.length == this.imageLoadedCounter) {
      // Only do this after all the images have been loaded.
      console.log("Do calculations after all images have loaded.");
      this.doCalculationsAfterAllImagesHaveLoaded();
    }
  }

  hideNextButton = () => {
    const rightOfLastImage = this.lastImage.getBoundingClientRect().right;
    const rightOfMobileGalleryImagesContainer = this.mobileGalleryImagesContainer.getBoundingClientRect()
      .right;
    console.log("rightOfLastImage", rightOfLastImage);
    console.log(
      "rightOfMobileGalleryImagesContainer",
      rightOfMobileGalleryImagesContainer
    );
    if (rightOfLastImage === rightOfMobileGalleryImagesContainer)
      this.nextButton.style.opacity = "0";
  };

  showNextButton = () => {
    const rightOfLastImage = this.lastImage.getBoundingClientRect().right;
    const rightOfMobileGalleryImagesContainer = this.mobileGalleryImagesContainer.getBoundingClientRect()
      .right;
    if (rightOfLastImage > rightOfMobileGalleryImagesContainer)
      this.nextButton.style.opacity = "1";
  };

  // If DesignProjects component is 600px or smaller, then remove 16px from
  // left of firstDesignProject. That 16px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfViewportSmallerThan601Px = () => {
    let leftOfFirstImage =
      this.firstImage.getBoundingClientRect().left -
      getValueOfCSSVariable(document.body, "--small-page-padding");
    console.log("leftOfFirstImage " + leftOfFirstImage);
    const leftOfFirstImageWithoutAddedPadding = this.firstImage.getBoundingClientRect()
      .left;
    console.log(
      "leftOfFirstImageWithoutAddedPadding " +
        leftOfFirstImageWithoutAddedPadding
    );
    const leftOfMobileGalleryImagesContainer = this.mobileGalleryImagesContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstImage === leftOfMobileGalleryImagesContainer)
      this.previousButton.style.opacity = "0";
  };

  // If DesignProjects component is between 601px and 1280px, then remove 31px from
  // left of firstDesignProject. That 31px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfViewport601To1280Px = () => {
    let leftOfFirstImage =
      this.firstImage.getBoundingClientRect().left -
      getValueOfCSSVariable(document.body, "--default-page-padding");
    const leftOfMobileGalleryImagesContainer = this.mobileGalleryImagesContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstImage === leftOfMobileGalleryImagesContainer)
      this.previousButton.style.opacity = "0";
  };

  hidePreviousButtonIfViewportLargerThan1280Px = () => {
    let leftOfFirstImage = this.firstImage.getBoundingClientRect().left;
    const leftOfMobileGalleryImagesContainer = this.mobileGalleryImagesContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstImage === leftOfMobileGalleryImagesContainer)
      this.previousButton.style.opacity = "0";
  };

  showPreviousButton = () => {
    let leftOfFirstImage = this.firstImage.getBoundingClientRect().left;
    const leftOfMobileGalleryImagesContainer = this.mobileGalleryImagesContainer.getBoundingClientRect()
      .left;

    if (leftOfFirstImage < leftOfMobileGalleryImagesContainer)
      this.previousButton.style.opacity = "1";
  };

  // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
  moveSliderToRight = () => {
    this.mobileGalleryImagesContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(this.hideNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    setTimeout(this.showPreviousButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  moveSliderToLeft = () => {
    this.mobileGalleryImagesContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(
      this.hidePreviousButtonIfViewportLargerThan1280Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(
      this.hidePreviousButtonIfViewportSmallerThan601Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(
      this.hidePreviousButtonIfViewport601To1280Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(this.showNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  render() {
    return (
      <section
        id="mobile-gallery-container"
        className="project-page-column-component-container"
      >
        <h2>{this.props.title}</h2>
        <p className="space-between-paragraphs">{this.props.paragraph}</p>
        <button className="previous-button mobile-gallery-button">
          <img src={previousArrow} />
        </button>
        <button className="next-button mobile-gallery-button">
          <img src={nextArrow} />
        </button>
        <div id="all-mobile-gallery-images">
          {this.props.mobileGalleryImagesArray.map((image, index) => {
            return (
              <img
                src={image[0]}
                alt={image[1]}
                key={index}
                className="one-mobile-gallery-image image-bottom-margin"
                onLoad={() => {
                  this.imageLoaded();
                }}
              />
            );
          })}
          {/* Empty-div class is for collapsing margins: https://www.smashingmagazine.com/2019/07/margins-in-css/*/}
          <div className="empty-div-project-page"></div>
        </div>
      </section>
    );
  }
}

export default TitleParagraphMobileGallery;
