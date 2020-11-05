import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from './../data/designProjectsData';
import truckX from "../data/truckXData";

class DesignProjects extends React.Component {

    componentDidMount() {
        const designProjectElements = document.getElementsByClassName("one-design-project");

        // When hovering over design project, add/remove opacity to pseudo element .one-design-project:after
        // https://stackoverflow.com/questions/21032481/change-the-style-of-before-and-after-pseudo-elements
        const addHoverEffect = (element) => {
            element.style.backgroundColor = "red";
        }
        const removeHoverEffect = (element) => {
            element.style.backgroundColor = "white";
        };

        Array.from(designProjectElements).forEach((element, index) => {
            element.addEventListener('mouseenter', () => {
                addHoverEffect(element);
            });
            element.addEventListener('mouseleave', () => {
                removeHoverEffect(element)
            });
        })
    }

    render() {
        return (
            <section className="design-projects-container">
                <h2>Design projects</h2>
                <div className="all-design-projects">
                    {arrayOfDesignProjects.map((project, index) => {
                        return <div className="one-design-project" key={index}>
                            <img className="design-project-img"
                                 src={project.homepageImage}
                                 alt={project.homepageImgAlt}/>
                            <div className="design-project-info">
                                <h4>{project.title}</h4>
                                <div
                                    className="design-project-description-container">
                                    <p className="light-gray-text">{project.description}</p>
                                    <div className="icons">
                                        {project.icons.map((icon, index) => {
                                            return <img src={icon} key={index}/>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className="one-design-project">
                        <img className="design-project-img"
                             src={truckX.homepageImage}
                             alt={truckX.homepageImgAlt}/>
                        <div className="design-project-info">
                            <h4>{truckX.title}</h4>
                            <div
                                className="design-project-description-container">
                                <p className="light-gray-text">{truckX.description}</p>
                                <div className="icons">
                                    <img src={truckX.icons[0]}/>
                                    <img src={truckX.icons[1]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
};

export default DesignProjects;