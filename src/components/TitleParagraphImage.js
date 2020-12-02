import React from "react";

const TitleParagraphImage = ({ title, paragraphArray, image, imageAlt }) => {
  // Only add paragraph(s) if it exists.
  const paragraphElement = () => {
    if (paragraphArray !== undefined) {
      paragraphArray.map((paragraph, index) => {
        return (
          <p key={index} className="space-between-paragraphs">
            {paragraph}
          </p>
        );
      });
    }
  };

  // Only add image if it exists.
  const imageElement = () => {
    if (image !== undefined) {
      return (
        <img
          src={image}
          alt={imageAlt}
          className="image-bottom-margin responsive-image"
          onClick={() => openImageInNewWindow(image)}
        />
      );
    }
  };

  const openImageInNewWindow = (image) => {
    window.open(image, "_blank");
  };

  return (
    <div className="project-page-component-container">
      <h2>{title}</h2>
      {paragraphElement()}
      {imageElement()}
    </div>
  );
};

export default TitleParagraphImage;
