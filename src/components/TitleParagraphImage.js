import React from "react";
import closeIcon from "./../vector-images/close-icon.svg";
import { closeModal, openModal } from "../utils";

const TitleParagraphImage = ({
  title,
  paragraphArray,
  image,
  imageAlt,
  imageId,
}) => {
  // Only add paragraph(s) if it exists.
  const paragraphElement = () => {
    if (paragraphArray !== undefined) {
      const paragraphs = [];
      paragraphArray.map((paragraph, index) =>
        paragraphs.push(
          <p key={index} className="space-between-paragraphs">
            {paragraph}
          </p>
        )
      );
      return paragraphs;
    }
  };

  const imageElement = (imageId) => {
    return (
      <React.Fragment>
        <img
          src={image}
          alt={imageAlt}
          className="image-bottom-margin responsive-image"
          onClick={() => openModal(imageId)}
        />
        <div id={imageId} className="modal" onClick={() => closeModal()}>
          <span className="close cursor" onClick={() => closeModal()}>
            <img src={closeIcon} />
          </span>
          <img src={image} className="modal-content" />
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="project-page-column-component-container">
      <h2>{title}</h2>
      {paragraphElement()}
      {imageElement(imageId)}
    </div>
  );
};

export default TitleParagraphImage;
