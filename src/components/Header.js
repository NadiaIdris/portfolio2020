import React from "react";

const Header = ({ projectName, description, mainImg, mainImgAlt }) => {
  return (
    <div id="project-head">
      <h1>{projectName}</h1>
      <p>{description}</p>
      <img src={mainImg} alt={mainImgAlt} />
    </div>
  );
};

export default Header;
