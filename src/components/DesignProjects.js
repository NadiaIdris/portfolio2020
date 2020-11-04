import React from 'react';
import './../styles/DesignProjects.css';
import {arrayOfDesignProjects} from './../data/designProjectsData';
import truckX from "../data/truckXData";

// Function to add :after on .design-project-img-container on hover.

const DesignProjects = () => {
    return (
        <section className="design-projects-container">
            <h2>Design Projects</h2>
            <div className="all-design-projects">
                <div className="one-design-project">
                    <img className="design-project-img"
                         src={truckX.homepageImage}
                         alt={truckX.homepageImgAlt}/>
                    <div className="design-project-info">
                        <h4>{truckX.title}</h4>
                        <div className="design-project-description-container">
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
};

export default DesignProjects;