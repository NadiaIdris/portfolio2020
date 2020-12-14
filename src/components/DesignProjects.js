import React from "react";
import "./../styles/DesignProjects.css";
import nextArrow from "./../vector-images/arrow-right.svg";
import previousArrow from "./../vector-images/arrow-left.svg";
import { getValueOfCSSVariable, scrollToTop } from "../utils";
import { getPageName } from "../pageConstants";

class DesignProjects extends React.Component {
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
  }

  initializeVariables = () => {
    this.sectionContainer = document.querySelector(
      "#design-projects-container"
    );
    this.projectsContainer = document.querySelector("#all-projects");
    this.lastDesignProject = document.querySelector(
      "#all-projects"
    ).lastElementChild;
    this.firstDesignProject = document.querySelector(
      "#all-projects"
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
    if (this.props.designProjectsArray.length === this.imageLoadedCounter) {
      // Only do this after all the images have been loaded.
      this.doCalculationsAfterAllImagesHaveLoaded();
    }
  }

  hideNextButton = () => {
    const rightOfLastDesignProject = this.lastDesignProject.getBoundingClientRect()
      .right;
    const rightOfProjectsContainer = this.projectsContainer.getBoundingClientRect()
      .right;
    if (rightOfLastDesignProject === rightOfProjectsContainer)
      this.nextButton.style.opacity = "0";
  };

  showNextButton = () => {
    const rightOfLastDesignProject = this.lastDesignProject.getBoundingClientRect()
      .right;
    const rightOfProjectsContainer = this.projectsContainer.getBoundingClientRect()
      .right;
    if (rightOfLastDesignProject > rightOfProjectsContainer)
      this.nextButton.style.opacity = "1";
  };

  // If DesignProjects component is 600px or smaller, then remove 16px from
  // left of firstDesignProject. That 16px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfViewportSmallerThan601Px = () => {
    const paddingSmall = getValueOfCSSVariable(
      document.body,
      "--small-page-padding"
    );
    const leftOfFirstDesignProject =
      this.firstDesignProject.getBoundingClientRect().left - paddingSmall;
    const leftOfProjectsContainer = this.projectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstDesignProject === leftOfProjectsContainer)
      this.previousButton.style.opacity = "0";
  };

  // If DesignProjects component is between 601px and 1280px, then remove 31px from
  // left of firstDesignProject. That 31px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfViewport601To1280Px = () => {
    const paddingDefault = getValueOfCSSVariable(
      document.body,
      "--default-page-padding"
    );
    const leftOfFirstDesignProject =
      this.firstDesignProject.getBoundingClientRect().left - paddingDefault;
    const leftOfProjectsContainer = this.projectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstDesignProject === leftOfProjectsContainer)
      this.previousButton.style.opacity = "0";
  };

  hidePreviousButtonIfViewportLargerThan1280Px = () => {
    const leftOfFirstDesignProject = this.firstDesignProject.getBoundingClientRect()
      .left;
    const leftOfProjectsContainer = this.projectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstDesignProject === leftOfProjectsContainer)
      this.previousButton.style.opacity = "0";
  };

  showPreviousButton = () => {
    const leftOfFirstDesignProject = this.firstDesignProject.getBoundingClientRect()
      .left;
    const leftOfProjectsContainer = this.projectsContainer.getBoundingClientRect()
      .left;

    if (leftOfFirstDesignProject < leftOfProjectsContainer)
      this.previousButton.style.opacity = "1";
  };

  // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
  moveSliderToRight = () => {
    this.projectsContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(this.hideNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    setTimeout(this.showPreviousButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  moveSliderToLeft = () => {
    this.projectsContainer.scrollBy({
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

  addMarginTopIfProjectPageComponent = () => {
    // Check if component title is not "Design projects", then add class
    // design-project-container-margin-top
    if (this.props.title !== "Design projects") {
      return "design-project-container-margin-top";
    }
  };

  render() {
    return (
      <section
        id="design-projects-container"
        className={this.addMarginTopIfProjectPageComponent()}
      >
        <h2>{this.props.title}</h2>
        <button className="previous-button">
          <img src={previousArrow} />
        </button>
        <button className="next-button">
          <img src={nextArrow} />
        </button>
        <div id="all-projects">
          {this.props.designProjectsArray.map((project, index) => {
            console.log(
              "this.props.designProjectsArray",
              this.props.designProjectsArray
            );
            console.log("project", project);
            return (
              <div className="one-design-project" key={index}>
                <a href={getPageName(project.title)}>
                  <div className="img-hover-zoom">
                    <img
                      className="design-project-img"
                      src={project.homepageImage}
                      alt={project.homepageImgAlt}
                      onLoad={() => {
                        this.imageLoaded();
                      }}
                    />
                  </div>
                </a>
                <a href={getPageName(project.title)}>
                  <div className="title-and-description-container">
                    <h4>{project.title}</h4>
                    <div className="project-description-container">
                      <p className="light-gray-text">{project.description}</p>
                      <div className="icons">
                        {project.icons.map((icon, index) => {
                          return <img src={icon} key={index} />;
                        })}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}

          {/* Empty-div class is for collapsing margins: https://www.smashingmagazine.com/2019/07/margins-in-css/*/}
          <section className="empty-div"></section>
        </div>
      </section>
    );
  }
}

export default DesignProjects;
