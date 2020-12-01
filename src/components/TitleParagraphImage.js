import React from "react";

const TitleParagraphImage = ({ title, paragraphArray, image, imageAlt }) => {
  const imageElement = () => {
    if (image !== undefined) {
      return <img alt={imageAlt} />;
    }
  };

  return (
    <div className="project-page-component-container">
      <h2>{title}</h2>
      {paragraphArray.map((paragraph, index) => {
        return (
          <p key={index} className="space-between-paragraphs">
            {paragraph}
          </p>
        );
      })}

      <img alt={imageAlt} />
    </div>
  );
};

export default TitleParagraphImage;
