import React from "react";

const AboutProject = ({ duration, platform, screens, role, contribution }) => {
  return (
    <div className="project-page-component-container">
      <h2>About project</h2>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>Project duration: </span> {duration}
        </p>
      </div>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>Platform:</span> {platform}
        </p>
      </div>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>Final screens designed:</span> {screens}
        </p>
      </div>

      <br />

      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>My role:</span> {role}
        </p>
      </div>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>My direct contribution:</span> {contribution}
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
