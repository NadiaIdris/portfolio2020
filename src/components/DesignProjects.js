import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from '../data/projectsData';

class DesignProjects extends React.Component {
    componentDidMount() {
        const projectsContainer = document.querySelector(".all-projects");

        const projectsContainerSizeScrollWidth = projectsContainer.scrollWidth;
        console.log("projectsContainerSizeScrollWidth " + projectsContainerSizeScrollWidth);

        const projectsContainerOffsetWidth = projectsContainer.offsetWidth;
        console.log("projectsContainerOffsetWidth " + projectsContainerOffsetWidth);

        const projectsContainerGetBoundingClientRect = projectsContainer.getBoundingClientRect().right;
        console.log("projectsContainerGetBoundingClientRect " + projectsContainerGetBoundingClientRect);

        // TODO: get how much has been scrolled (scrollX?)

        // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
        const moveSliderToRight = () => {
            const projectsContainer = document.querySelector(".all-projects");
            projectsContainer.scrollBy({
                top: 0,
                left: +378,
                behavior: 'smooth'
            });

            if (projectsContainerSizeScrollWidth) {
                const nextButton = document.querySelector(".next-button");
                nextButton.style.opacity = "0";
            }
            console.log("projectsContainerGetBoundingClientRect " + projectsContainerGetBoundingClientRect);

        };

        const moveSliderToLeft = () => {
            const projectsContainer = document.querySelector(".all-projects");
            projectsContainer.scrollBy({
                top: 0,
                left: -378,
                behavior: 'smooth'
            });
        };

        const nextButton = document.querySelector(".next-button");
        nextButton.addEventListener("click", moveSliderToRight);
        const previousButton = document.querySelector(".previous-button");
        previousButton.addEventListener("click", moveSliderToLeft);
    }

    render() {
        return (
            <section className="projects-container">
                <h2>Designs</h2>
                <button className="previous-button">Left</button>
                <button className="next-button">Right</button>
                <div className="all-projects">
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