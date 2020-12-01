import React from "react";

const AboutProject = ({
  duration,
  platformArray,
  screens,
  role,
  contribution,
}) => {
  const platforms = [];

  for (let i = 0; i < platformArray.length; i++) {
    if (platformArray.length > 1 && i !== platformArray.length - 1) {
      platforms.push(
        <a
          href={platformArray[i][1]}
          target="_blank"
          rel="noreferrer"
          key={platformArray[i]}
          className="platform-link"
        >
          {platformArray[i][0]}
        </a>
      );
      platforms.push(
        <span key={i} className="regular-font">
          ,&nbsp;
        </span>
      );
    } else {
      platforms.push(
        <a
          href={platformArray[i][1]}
          target="_blank"
          rel="noreferrer"
          key={platformArray[i]}
          className="platform-link"
        >
          {platformArray[i][0]}
        </a>
      );
    }
  }

  return (
    <div className="project-page-component-container">
      <h2>About project</h2>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>Project duration:&nbsp;</span>
          {duration}
        </p>
      </div>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p className="platforms">
          <span>Platform:&nbsp;</span>
          {platforms}
        </p>
      </div>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>Final screens designed:&nbsp;</span>
          {screens}
        </p>
      </div>

      <br />

      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>My role:&nbsp;</span>
          {role}
        </p>
      </div>
      <div className="bullet-point-container">
        <p className="dash">-</p>
        <p>
          <span>My direct contribution:&nbsp;</span>
          {contribution}
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
