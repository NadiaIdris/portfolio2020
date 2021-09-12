import React from "react";
import { closeModal, openModal } from "../utils";

const TitleMultipleParagraphGifs = ({ title, paragraphGifsArray }) => {
  const paragraphGif = (oneParagraphGifArray, index) => {
    const image = oneParagraphGifArray[1];
    const paragraphText = oneParagraphGifArray[0];
    const imageAlt = oneParagraphGifArray[2];
    const imageModalId = oneParagraphGifArray[3];
    if (image !== undefined) {
      const paragraphs = [];
      // If first element of the paragraphGifsArray, then don't add padding-top
      // to the paragraph.
      if (oneParagraphGifArray === paragraphGifsArray[0]) {
        paragraphs.push(
          <div key={index}>
            <p className="space-between-paragraphs">{paragraphText}</p>
            <img
              src={image}
              alt={imageAlt}
              onClick={() => openModal(imageModalId)}
              className="image-bottom-margin responsive-image"
            />
            <div
              id={imageModalId}
              className="modal"
              onClick={() => closeModal(imageModalId)}
            >
              <span
                className="close cursor"
                onClick={() => closeModal(imageModalId)}
              >
                <div></div>
              </span>
              <img src={image} alt={imageAlt} className="modal-content" />
            </div>
          </div>
        );
      } else {
        paragraphs.push(
          <div key={index}>
            <p className="space-between-paragraphs added-padding-top">
              {paragraphText}
            </p>
            <img
              src={image}
              alt={imageAlt}
              onClick={() => openModal(imageModalId)}
              className="image-bottom-margin responsive-image"
            />
            <div
              id={imageModalId}
              className="modal"
              onClick={() => closeModal(imageModalId)}
            >
              <span
                className="close cursor"
                onClick={() => closeModal(imageModalId)}
              >
                <div></div>
              </span>
              <img src={image} alt={imageAlt} className="modal-content" />
            </div>
          </div>
        );
      }

      return paragraphs;
    }
  };

  return (
    <div className="project-page-column-component-container">
      <h2>{title}</h2>
      {paragraphGifsArray.map((oneParagraphGifArray, index) => {
        return paragraphGif(oneParagraphGifArray, index);
      })}
    </div>
  );
};

export default TitleMultipleParagraphGifs;
