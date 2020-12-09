import React from "react";

const TitleBulletPointsOneColumn = ({ title, bulletPointsArray }) => {
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
              <span>{bulletPoint[0]}</span>
              {bulletPoint[1]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default TitleBulletPointsOneColumn;
