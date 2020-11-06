import React from 'react';
import './../styles/CodingProjects.css';
import './../styles/DesignProjects.css'
import {arrayOfCodingProjects} from "../data/projectsData";

const CodingProjects = () => {
    return (
        <section className="projects-container">
            <h2>Code</h2>
            <div className="all-projects">
                {arrayOfCodingProjects.map((project, index) => {
                    return (
                        <div className="one-coding-project" key={index}>
                            <div className="coding-img-hover-zoom">
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
};

export default CodingProjects;