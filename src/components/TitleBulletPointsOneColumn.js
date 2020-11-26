import React from "react";

const TitleBulletPointsOneColumn = ({ title, bulletPointsArray }) => {
  // If component has more than one paragraph, add space between paragraphs.
  // const bulletPoints = [];
  //
  // for (let i = 0; i < bulletPointsArray.length; i++) {
  //
  // }

  return (
    <div className="project-page-component-container">
      <h2>{title}</h2>
      {bulletPointsArray.map((bulletPoint) => {
        return (
          <div className="bullet-point-container">
            <p className="dash">-</p>
            <p>{bulletPoint}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TitleBulletPointsOneColumn;
