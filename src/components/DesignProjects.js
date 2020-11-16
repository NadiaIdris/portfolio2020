import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from '../data/projectsData';
import nextArrow from './../vector-images/arrow-right.svg';
import previousArrow from './../vector-images/arrow-left.svg';

class DesignProjects extends React.Component {
    componentDidMount() {
        const nextButtonTransition = "right .5s, opacity .5s";
        const previousButtonTransition = "left .5s, opacity .5s";

        const projectsContainer = document.querySelector("#all-projects");

        const hideNextButton = () => {
            const lastDesignProject = document.querySelector("#all-projects").lastElementChild;
            lastDesignProject.style.marginRight = "0";
            let rightOfLastDesignProject = lastDesignProject.getBoundingClientRect().right;
            const rightOfProjectsContainer = projectsContainer.getBoundingClientRect().right;

            if (rightOfLastDesignProject === rightOfProjectsContainer) {
                const nextButton = document.querySelector(".next-button");
                nextButton.style.opacity = "0";
                // nextButton.style.right = "0";
                // nextButton.style.transition = nextButtonTransition;
            }
        };

        const showNextButton = () => {
            const lastDesignProject = document.querySelector("#all-projects").lastElementChild;
            let rightOfLastDesignProject = lastDesignProject.getBoundingClientRect().right;
            const rightOfProjectsContainer = projectsContainer.getBoundingClientRect().right;

            if (rightOfLastDesignProject > rightOfProjectsContainer) {
                const nextButton = document.querySelector(".next-button");
                nextButton.style.opacity = "1";
                nextButton.style.right = "100px";
                nextButton.style.transition = nextButtonTransition;
            }
        };

        const hidePreviousButton = () => {
            const firstDesignProject = document.querySelector("#all-projects").firstElementChild;
            let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect().left;
            const leftOfProjectsContainer = projectsContainer.getBoundingClientRect().left;

            if (leftOfFirstDesignProject === leftOfProjectsContainer) {
                const previousButton = document.querySelector(".previous-button");
                previousButton.style.opacity = "0";
                // previousButton.style.left = "0";
                // previousButton.style.transition = previousButtonTransition;
            }
        };

        const showPreviousButton = () => {
            const firstDesignProject = document.querySelector("#all-projects").firstElementChild;
            let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect().left;
            const leftOfProjectsContainer = projectsContainer.getBoundingClientRect().left;

            if (leftOfFirstDesignProject < leftOfProjectsContainer) {
                const previousButton = document.querySelector(".previous-button");
                previousButton.style.opacity = "1";
                previousButton.style.left = "100px";
                previousButton.style.transition = previousButtonTransition;
            }
        };

        // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
        const moveSliderToRight = () => {
            const projectsContainer = document.querySelector("#all-projects");
            projectsContainer.scrollBy({
                top: 0,
                left: +378,
                behavior: 'smooth'
            });
            setTimeout(hideNextButton, 400);
            setTimeout(showPreviousButton, 400);
        };

        const moveSliderToLeft = () => {
            const projectsContainer = document.querySelector("#all-projects");
            projectsContainer.scrollBy({
                top: 0,
                left: -378,
                behavior: 'smooth'
            });
            setTimeout(hidePreviousButton, 400);
            setTimeout(showNextButton, 400);
        };

        // Hide previous button on page load.
        hidePreviousButton();
        // showPreviousButton();
        const nextButton = document.querySelector(".next-button");
        nextButton.addEventListener("click", moveSliderToRight);
        const previousButton = document.querySelector(".previous-button");
        previousButton.addEventListener("click", moveSliderToLeft);

        // Animate button appearance on hover.
        const animateInNextButton = () => {
            // if at the end of scrolling, do early return.
            const lastDesignProject = document.querySelector("#all-projects").lastElementChild;
            let rightOfLastDesignProject = lastDesignProject.getBoundingClientRect().right;
            const rightOfProjectsContainer = projectsContainer.getBoundingClientRect().right;
            if (rightOfLastDesignProject === rightOfProjectsContainer) return;

            const nextButton = document.querySelector(".next-button");
            nextButton.style.opacity = "1";
            nextButton.style.right = "100px";
            nextButton.style.transition = nextButtonTransition;
        }

        const animateInPreviousButton = () => {
            // if at the start of scrolling, do an early return.
            const firstDesignProject = document.querySelector("#all-projects").firstElementChild;
            let leftOfFirstDesignProject = firstDesignProject.getBoundingClientRect().left;
            const leftOfProjectsContainer = projectsContainer.getBoundingClientRect().left;
            if (leftOfFirstDesignProject === leftOfProjectsContainer) return;

            const previousButton = document.querySelector(".previous-button");
            previousButton.style.opacity = "1";
            previousButton.style.left = "100px";
            previousButton.style.transition = previousButtonTransition;
        };

        const animateOutNextAndPreviousButtons = () => {
            const nextButton = document.querySelector(".next-button");
            nextButton.style.opacity = "0";
            nextButton.style.right = "0";
            nextButton.style.transition = nextButtonTransition;

            const previousButton = document.querySelector(".previous-button");
            previousButton.style.opacity = "0";
            previousButton.style.left = "0";
            previousButton.style.transition = previousButtonTransition;
        };

        projectsContainer.addEventListener("mouseenter", animateInNextButton);
        projectsContainer.addEventListener("mouseenter", animateInPreviousButton);
        projectsContainer.addEventListener("mouseleave", animateOutNextAndPreviousButtons);

        nextButton.addEventListener("mouseenter", animateInNextButton);
        nextButton.addEventListener("mouseenter", animateInPreviousButton);

        previousButton.addEventListener("mouseenter", animateInNextButton);
        previousButton.addEventListener("mouseenter", animateInPreviousButton);
    }

    render() {
        return (
            <section className="projects-container">
                <h2>Designs</h2>
                <button className="previous-button"><img src={previousArrow}/></button>
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
};

export default DesignProjects;