import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from './../data/designProjectsData';
import truckX from "../data/truckXData";

class DesignProjects extends React.Component {

    render() {
        return (
            <section className="design-projects-container">
                <h2>Designs</h2>
                <div className="all-design-projects">
                    {arrayOfDesignProjects.map((project, index) => {
                        return (
                            <div className="one-design-project" key={index}>
                                <div className="img-hover-zoom">
                                    <img className="design-project-img"
                                         src={project.homepageImage}
                                         alt={project.homepageImgAlt}/>
                                </div>
                                <div className="design-project-info">
                                    <h4>{project.title}</h4>
                                    <div
                                        className="design-project-description-container">
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