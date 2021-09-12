import React from "react";

const TitleBulletPointsOneColumnWithLinks = ({ title, bulletPointsArray }) => {
  return (
    <div className="project-page-column-component-container">
      <h2>{title}</h2>
      {bulletPointsArray.map((bulletPoint, index) => {
        return (
          <div
            className="bullet-point-container space-between-paragraphs"
            key={index}
          >
            <p className="dash">-</p>
            <p>
              <a href={bulletPoint[1]} target="_blank" rel="noreferrer">
                {bulletPoint[0]}
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TitleBulletPointsOneColumnWithLinks;
