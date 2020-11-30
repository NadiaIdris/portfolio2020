import React from "react";

const TitleBulletPointsTwoColumns = ({ title, bulletPointsArray }) => {
  // Divide

  return (
    <div className="project-page-component-container">
      <h2>{title}</h2>
      {bulletPointsArray.map((bulletPoint) => {
        return (
          <div className="bullet-point-container">
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

export default TitleBulletPointsTwoColumns;
