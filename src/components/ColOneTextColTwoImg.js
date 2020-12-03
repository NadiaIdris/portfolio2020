import React from "react";

const ColOneTextColTwoImg = ({
  title,
  paragraph,
  image,
  imageAlt,
  imageId,
}) => {
  return (
    <div className="project-page-row-component-container ">
      <div className="column-one">
        <h2>{title}</h2>
        <p className="column-text">{paragraph}</p>
      </div>
      <img src={image} id={imageId} alt={imageAlt} className="gif" />
    </div>
  );
};

export default ColOneTextColTwoImg;
