import React from "react";
import "./../styles/DesignProjects.css";
import { arrayOfDesignProjects } from "../data/projectsData";
import nextArrow from "./../vector-images/arrow-right.svg";
import previousArrow from "./../vector-images/arrow-left.svg";
import { getValueOfCSSVariable } from "../utils";

class DesignProjects extends React.Component {
  componentDidMount() {
    const MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS = +379;
    const MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS = -379;
    const HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
    // const DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON = "50px";

    const sectionContainer = document.querySelector(
      "#design-projects-container"
    );
    const projectsContainer = document.querySelector("#all-projects");
    const lastDesignProject = document.querySelector("#all-projects")
      .lastElementChild;
    const firstDesignProject = document.querySelector("#all-projects")
      .firstElementChild;
    const nextButton = sectionContainer.querySelector(".next-button");
    const previousButton = sectionContainer.querySelector(".previous-button");

    const hideNextButton = () => {
      // lastDesignProject.style.marginRight = "0";
      const rightOfLastDesignProject = lastDesignProject.getBoundingClientRect()
        .right;
      const rightOfProjectsContainer = projectsContainer.getBoundingClientRect()
        .right;
      if (rightOfLastDesignProject === rightOfProjectsContainer)
        nextButton.style.opacity = "0";
    };

    const showNextButton = () => {
      const rightOfLastDesignProject = lastDesignProject.getBoundingClientRect()
        .right;
      const rightOfProjectsContainer = projectsContainer.getBoundingClientRect()
        .right;
      if (rightOfLastDesignProject > rightOfProjectsContainer)
        nextButton.style.opacity = "1";
    };

    // If DesignProjects component is 600px or smaller, then remove 16px from
    // left of firstDesignProject. That 16px is a margin that getBoundingClientRect()
    // doesn't include.
    const hidePreviousButtonIfViewportSmallerThan601Px = () => {
      let leftOfFirstDesignProject =
        firstDesignProject.getBoundingClientRect().left -
        getValueOfCSSVariable(document.body, "--page-padding-small");
      const leftOfProjectsContainer = projectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstDesignProject === leftOfProjectsContainer)
        previousButton.style.opacity = "0";
    };

    // If DesignProjects component is between 601px and 1280px, then remove 31px from
    // left of firstDesignProject. That 31px is a margin that getBoundingClientRect()
    // doesn't include.
    const hidePreviousButtonIfViewport601To1280Px = () => {
      let leftOfFirstDesignProject =
        firstDesignProject.getBoundingClientRect().left -
        getValueOfCSSVariable(document.body, "--default-page-padding");
      const leftOfProjectsContainer = projectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstDesignProject === leftOfProjectsContainer)
        previousButton.style.opacity = "0";
    };

    const hidePreviousButtonIfViewportLargerThan1280Px = () => {
      let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect()
        .left;
      const leftOfProjectsContainer = projectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstDesignProject === leftOfProjectsContainer)
        previousButton.style.opacity = "0";
    };

    const showPreviousButton = () => {
      let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect()
        .left;
      const leftOfProjectsContainer = projectsContainer.getBoundingClientRect()
        .left;

      if (leftOfFirstDesignProject < leftOfProjectsContainer)
        previousButton.style.opacity = "1";
    };

    // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
    const moveSliderToRight = () => {
      projectsContainer.scrollBy({
        top: 0,
        left: MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS,
        behavior: "smooth",
      });
      setTimeout(hideNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
      setTimeout(showPreviousButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    };

    const moveSliderToLeft = () => {
      projectsContainer.scrollBy({
        top: 0,
        left: MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS,
        behavior: "smooth",
      });
      setTimeout(
        hidePreviousButtonIfViewportLargerThan1280Px,
        HIDE_AND_SHOW_BUTTONS_TIMEOUT
      );
      setTimeout(
        hidePreviousButtonIfViewportSmallerThan601Px,
        HIDE_AND_SHOW_BUTTONS_TIMEOUT
      );
      setTimeout(
        hidePreviousButtonIfViewport601To1280Px,
        HIDE_AND_SHOW_BUTTONS_TIMEOUT
      );
      setTimeout(showNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    };

    // Hide previous button on page load.
    hidePreviousButtonIfViewportLargerThan1280Px();
    hidePreviousButtonIfViewportSmallerThan601Px();
    hidePreviousButtonIfViewport601To1280Px();
    showNextButton();
    nextButton.addEventListener("click", moveSliderToRight);
    previousButton.addEventListener("click", moveSliderToLeft);
  }

  render() {
    return (
      <section id="design-projects-container">
        <h2>Design projects</h2>
        <button className="previous-button">
          <img src={previousArrow} />
        </button>
        <button className="next-button">
          <img src={nextArrow} />
        </button>
        <div id="all-projects">
          {arrayOfDesignProjects.map((project, index) => {
            return (
              <div className="one-design-project" key={index}>
                <div className="img-hover-zoom">
                  <img
                    className="design-project-img"
                    src={project.homepageImage}
                    alt={project.homepageImgAlt}
                  />
                </div>
                <div>
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
              </div>
            );
          })}
          {/* Empty-div class is for collapsing margins: https://www.smashingmagazine.com/2019/07/margins-in-css/*/}
          <div className="empty-div"></div>
        </div>
      </section>
    );
  }
}

export default DesignProjects;
