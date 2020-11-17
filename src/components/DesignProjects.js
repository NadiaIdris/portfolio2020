import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from '../data/projectsData';
import nextArrow from './../vector-images/arrow-right.svg';
import previousArrow from './../vector-images/arrow-left.svg';

class DesignProjects extends React.Component {
    componentDidMount() {
        const nextButtonTransition = "right .2s ease-out, opacity .2s ease-out";
        const previousButtonTransition = "left .2s ease-out, opacity .2s ease-out";
        const MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS = +378;
        const MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS = -378;
        const HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
        const DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON = "50px";

        const sectionContainer = document.querySelector("#design-projects-container");
        const projectsContainer = document.querySelector("#all-projects");
        const lastDesignProject = document.querySelector("#all-projects").lastElementChild;
        const firstDesignProject = document.querySelector("#all-projects").firstElementChild;
        const nextButton = sectionContainer.querySelector(".next-button");
        const previousButton = sectionContainer.querySelector(".previous-button");

        const hideNextButton = () => {
            lastDesignProject.style.marginRight = "0";
            const rightOfLastDesignProject = lastDesignProject.getBoundingClientRect().right;
            const rightOfProjectsContainer = projectsContainer.getBoundingClientRect().right;
            if (rightOfLastDesignProject === rightOfProjectsContainer) {
                nextButton.style.opacity = "0";
            }
        };

        const showNextButton = () => {
            const rightOfLastDesignProject = lastDesignProject.getBoundingClientRect().right;
            const rightOfProjectsContainer = projectsContainer.getBoundingClientRect().right;
            if (rightOfLastDesignProject > rightOfProjectsContainer) {
                nextButton.style.opacity = "1";
                nextButton.style.right = DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON;
                nextButton.style.transition = nextButtonTransition;
            }
        };

        const hidePreviousButton = () => {
            let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect().left;
            const leftOfProjectsContainer = projectsContainer.getBoundingClientRect().left;
            if (leftOfFirstDesignProject === leftOfProjectsContainer) previousButton.style.opacity = "0";
        };

        const showPreviousButton = () => {
            let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect().left;
            const leftOfProjectsContainer = projectsContainer.getBoundingClientRect().left;

            if (leftOfFirstDesignProject < leftOfProjectsContainer) {
                previousButton.style.opacity = "1";
                previousButton.style.left = DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON;
                previousButton.style.transition = previousButtonTransition;
            }
        };

        // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
        const moveSliderToRight = () => {
            projectsContainer.scrollBy({
                top: 0,
                left: MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS,
                behavior: 'smooth'
            });
            setTimeout(hideNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
            setTimeout(showPreviousButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
        };

        const moveSliderToLeft = () => {
            projectsContainer.scrollBy({
                top: 0,
                left: MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS,
                behavior: 'smooth'
            });
            setTimeout(hidePreviousButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
            setTimeout(showNextButton, HIDE_AND_SHOW_BUTTONS_TIMEOUT);
        };

        const animateInNextButton = () => {
            // if at the end of scrolling, do early return.
            let rightOfLastDesignProject = lastDesignProject.getBoundingClientRect().right;
            const rightOfProjectsContainer = projectsContainer.getBoundingClientRect().right;
            if (rightOfLastDesignProject === rightOfProjectsContainer) return;

            nextButton.style.opacity = "1";
            nextButton.style.right = DISTANCE_TO_MOVE_NEXT_AND_PREVIOUS_BUTTON;
            nextButton.style.transition = nextButtonTransition;
        }

        // Hide previous button on page load.
        hidePreviousButton();
        animateInNextButton();
        nextButton.addEventListener("click", moveSliderToRight);
        previousButton.addEventListener("click", moveSliderToLeft);
    }

    render() {
        return (
            <section id="design-projects-container">
                <h2>Design projects</h2>
                <button className="previous-button"><img src={previousArrow}/>
                </button>
                <button className="next-button"><img src={nextArrow}/></button>
                <div id="all-projects">
                    {arrayOfDesignProjects.map((project, index) => {
                        return (
                            <div className="one-design-project" key={index}>
                                <div className="design-img-hover-zoom">
                                    <img className="design-project-img"
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
}

export default DesignProjects;