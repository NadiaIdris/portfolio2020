import React from "react";
import "./../styles/CodingProjects.css";
// import './../styles/DesignProjects.css'
import { arrayOfCodingProjects } from "../data/projectsData";
import previousArrow from "../vector-images/arrow-left.svg";
import nextArrow from "../vector-images/arrow-right.svg";
import { getValueOfCSSVariable } from "../utils";

class CodingProjects extends React.Component {
  componentDidMount() {
    const MOVE_SLIDER_TO_RIGHT_ON_CODING_PROJECTS = +466;
    const MOVE_SLIDER_TO_LEFT_ON_CODING_PROJECTS = -466;
    const HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
    const DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON = "50px";

    const sectionContainer = document.querySelector(
      "#coding-projects-container"
    );
    const codingProjectsContainer = document.querySelector(
      "#all-coding-projects"
    );
    const lastCodingProject = document.querySelector("#all-coding-projects")
      .lastElementChild;
    const firstCodingProject = document.querySelector("#all-coding-projects")
      .firstElementChild;
    const nextButton = sectionContainer.querySelector(".next-button");
    const previousButton = sectionContainer.querySelector(".previous-button");

    const hideNextButton = () => {
      lastCodingProject.style.marginRight = "0";
      const rightOfLastCodingProject = lastCodingProject.getBoundingClientRect()
        .right;
      const rightOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect()
        .right;
      if (rightOfLastCodingProject === rightOfCodingProjectsContainer)
        nextButton.style.opacity = "0";
    };

    const showNextButton = () => {
      const rightOfLastCodingProject = lastCodingProject.getBoundingClientRect()
        .right;
      const rightOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect()
        .right;
      if (rightOfLastCodingProject > rightOfCodingProjectsContainer)
        nextButton.style.opacity = "1";
    };

    // const hidePreviousButton = () => {
    //     const leftOfFirstCodingProject = firstCodingProject.getBoundingClientRect().left;
    //     const leftOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().left;
    //     if (leftOfFirstCodingProject === leftOfCodingProjectsContainer) previousButton.style.opacity = "0";
    // };

    // If DesignProjects component is 600px or smaller, then remove 16px from
    // left of firstDesignProject. That 16px is a margin that getBoundingClientRect()
    // doesn't include.
    const hidePreviousButtonIfMarginLeftIsSmall = () => {
      let leftOfFirstDesignProject =
        firstCodingProject.getBoundingClientRect().left -
        getValueOfCSSVariable(document.body, "--page-padding-small");
      const leftOfProjectsContainer = codingProjectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstDesignProject === leftOfProjectsContainer)
        previousButton.style.opacity = "0";
    };

    // If DesignProjects component is between 601px and 1280px, then remove 31px from
    // left of firstDesignProject. That 31px is a margin that getBoundingClientRect()
    // doesn't include.
    const hidePreviousButtonIfMarginLeftIsDefault = () => {
      let leftOfFirstDesignProject =
        firstCodingProject.getBoundingClientRect().left -
        getValueOfCSSVariable(document.body, "--default-page-padding");
      const leftOfProjectsContainer = codingProjectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstDesignProject === leftOfProjectsContainer)
        previousButton.style.opacity = "0";
    };

    const showPreviousButton = () => {
      const leftOfFirstCodingProject = firstCodingProject.getBoundingClientRect()
        .left;
      const leftOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstCodingProject < leftOfCodingProjectsContainer)
        previousButton.style.opacity = "1";
    };

    // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
    const moveSliderToRight = () => {
      codingProjectsContainer.scrollBy({
        top: 0,
        left: MOVE_SLIDER_TO_RIGHT_ON_CODING_PROJECTS,
        behavior: "smooth",
      });
      setTimeout(hideNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
      setTimeout(showPreviousButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    };

    const moveSliderToLeft = () => {
      codingProjectsContainer.scrollBy({
        top: 0,
        left: MOVE_SLIDER_TO_LEFT_ON_CODING_PROJECTS,
        behavior: "smooth",
      });
      setTimeout(
        hidePreviousButtonIfMarginLeftIsSmall,
        HIDE_AND_SHOW_BUTTONS_TIMEOUT
      );
      setTimeout(
        hidePreviousButtonIfMarginLeftIsDefault,
        HIDE_AND_SHOW_BUTTONS_TIMEOUT
      );
      setTimeout(showNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    };

    // Hide previous button on page load.
    hidePreviousButtonIfMarginLeftIsSmall();
    hidePreviousButtonIfMarginLeftIsDefault();
    showNextButton();
    nextButton.addEventListener("click", moveSliderToRight);
    previousButton.addEventListener("click", moveSliderToLeft);

    const addOrHideButtons = () => {
      const windowSize = window.innerWidth;
      const maxAppWidth = getValueOfCSSVariable(
        document.body,
        "--max-app-width"
      );
      if (windowSize < maxAppWidth) {
        // Show next and previous buttons
        // If haven't scrolled yet, hide previous button and show next button
        const leftOfFirstCodingProject = firstCodingProject.getBoundingClientRect()
          .left;
        const leftOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect()
          .left;
        if (leftOfFirstCodingProject === leftOfCodingProjectsContainer)
          previousButton.style.opacity = "0";

        const rightOfLastCodingProject = lastCodingProject.getBoundingClientRect()
          .right;
        const rightOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect()
          .right;
        if (rightOfLastCodingProject > rightOfCodingProjectsContainer)
          nextButton.style.opacity = "1";

        // If have scrolled, show previous button.
        if (leftOfFirstCodingProject < leftOfCodingProjectsContainer)
          previousButton.style.opacity = "1";
        // If at the end of the carousel, hide next button.
        if (rightOfLastCodingProject === rightOfCodingProjectsContainer)
          nextButton.style.opacity = "0";
      } else {
        // Hide next and previous buttons
        hideNextButton();
        hidePreviousButtonIfMarginLeftIsDefault();
        hidePreviousButtonIfMarginLeftIsSmall();
      }
    };
    window.addEventListener("resize", addOrHideButtons);

    // If #all-coding-projects overflow-x is scroll (means that viewport is
    // smaller than 500px), then
    // Change coding-project-img width to 354px. Add display: block;
    // Remove img-hover-zoom height
    //
  }

  render() {
    return (
      <section id="coding-projects-container">
        <h2>Coding projects</h2>
        <button className="previous-button">
          <img src={previousArrow} />
        </button>
        <button className="next-button">
          <img src={nextArrow} />
        </button>
        <div id="all-coding-projects">
          {arrayOfCodingProjects.map((project, index) => {
            return (
              <div className="one-coding-project" key={index}>
                <div className="coding-img-zoom">
                  <img
                    className="coding-project-img"
                    src={project.homepageImage}
                    alt={project.homepageImgAlt}
                  />
                </div>
                <div className="title-and-description-container">
                  <h4>{project.title}</h4>
                  <div className="coding-project-description-container">
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

export default CodingProjects;
