import React from 'react';
import './../styles/CodingProjects.css';
// import './../styles/DesignProjects.css'
import {arrayOfCodingProjects} from "../data/projectsData";
import previousArrow from "../vector-images/arrow-left.svg";
import nextArrow from "../vector-images/arrow-right.svg";
import {getValueOfCSSVariable} from "../utils";

class CodingProjects extends React.Component {
    componentDidMount() {
        const nextButtonTransition = "right .2s ease-out, opacity .2s ease-out";
        const previousButtonTransition = "left .2s ease-out, opacity .2s ease-out";
        const MOVE_SLIDER_TO_RIGHT_ON_CODING_PROJECTS = +466;
        const MOVE_SLIDER_TO_LEFT_ON_CODING_PROJECTS = -466;
        const HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
        const DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON = "50px";

        const sectionContainer = document.querySelector("#coding-projects-container");
        const codingProjectsContainer = document.querySelector("#all-coding-projects");
        const lastCodingProject = document.querySelector("#all-coding-projects").lastElementChild;
        const firstCodingProject = document.querySelector("#all-coding-projects").firstElementChild;
        const nextButton = sectionContainer.querySelector(".next-button");
        const previousButton = sectionContainer.querySelector(".previous-button");

        const hideNextButton = () => {
            lastCodingProject.style.marginRight = "0";
            const rightOfLastCodingProject = lastCodingProject.getBoundingClientRect().right;
            const rightOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().right;
            if (rightOfLastCodingProject === rightOfCodingProjectsContainer) nextButton.style.opacity = "0";
        };

        const showNextButton = () => {
            const rightOfLastCodingProject = lastCodingProject.getBoundingClientRect().right;
            const rightOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().right;
            if (rightOfLastCodingProject > rightOfCodingProjectsContainer) nextButton.style.opacity = "1";
        };

        const hidePreviousButton = () => {
            const leftOfFirstCodingProject = firstCodingProject.getBoundingClientRect().left;
            const leftOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().left;
            if (leftOfFirstCodingProject === leftOfCodingProjectsContainer) previousButton.style.opacity = "0";
        };

        const showPreviousButton = () => {
            const leftOfFirstCodingProject = firstCodingProject.getBoundingClientRect().left;
            const leftOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().left;
            if (leftOfFirstCodingProject < leftOfCodingProjectsContainer) previousButton.style.opacity = "1";
        };

        // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
        const moveSliderToRight = () => {
            codingProjectsContainer.scrollBy({
                top: 0,
                left: MOVE_SLIDER_TO_RIGHT_ON_CODING_PROJECTS,
                behavior: 'smooth'
            });
            setTimeout(hideNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
            setTimeout(showPreviousButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
        };

        const moveSliderToLeft = () => {
            codingProjectsContainer.scrollBy({
                top: 0,
                left: MOVE_SLIDER_TO_LEFT_ON_CODING_PROJECTS,
                behavior: 'smooth'
            });
            setTimeout(hidePreviousButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
            setTimeout(showNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
        };

        // Hide previous button on page load.
        hidePreviousButton();
        showNextButton();
        nextButton.addEventListener("click", moveSliderToRight);
        previousButton.addEventListener("click", moveSliderToLeft);

        const addOrHideButtons = () => {
            const windowSize = window.innerWidth;
            const maxAppWidth = getValueOfCSSVariable(document.body, '--max-app-width');
            if (windowSize < maxAppWidth) {
                // Show next and previous buttons
                // If haven't scrolled yet, hide previous button and show next button
                const leftOfFirstCodingProject = firstCodingProject.getBoundingClientRect().left;
                const leftOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().left;
                if (leftOfFirstCodingProject === leftOfCodingProjectsContainer) previousButton.style.opacity = "0";

                const rightOfLastCodingProject = lastCodingProject.getBoundingClientRect().right;
                const rightOfCodingProjectsContainer = codingProjectsContainer.getBoundingClientRect().right;
                if (rightOfLastCodingProject > rightOfCodingProjectsContainer) nextButton.style.opacity = "1";

                // If have scrolled, show previous button.
                if (leftOfFirstCodingProject < leftOfCodingProjectsContainer) previousButton.style.opacity = "1";
                // If at the end of the carousel, hide next button.
                if (rightOfLastCodingProject === rightOfCodingProjectsContainer) nextButton.style.opacity = "0";
            } else {
                // Hide next and previous buttons
                hideNextButton();
                hidePreviousButton();
            }
        };
        window.addEventListener("resize", addOrHideButtons);
    }

    render() {
        return (
            <section id="coding-projects-container">
                <h2>Coding projects</h2>
                <button className="previous-button"><img src={previousArrow}/>
                </button>
                <button className="next-button"><img src={nextArrow}/></button>
                <div id="all-coding-projects">
                    {arrayOfCodingProjects.map((project, index) => {
                        return (
                            <div className="one-coding-project" key={index}>
                                <div className="img-hover-zoom">
                                    <img className="coding-project-img"
                                         src={project.homepageImage}
                                         alt={project.homepageImgAlt}/>
                                </div>
                                <div>
                                    <h4>{project.title}</h4>
                                    <div
                                        className="project-description-container">
                                        <p className="light-gray-text">{project.description}</p>
                                        <div className="icons">
                                            {project.icons.map((icon, index) => {
                                                return <img src={icon}
                                                            key={index}/>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </section>
        );
    }

};

export default CodingProjects;