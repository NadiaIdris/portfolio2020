import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from '../data/projectsData';

class DesignProjects extends React.Component {

    render() {
        return (
            <section className="projects-container">
                <h2>Designs</h2>
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