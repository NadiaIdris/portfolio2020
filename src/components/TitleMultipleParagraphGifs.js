import React from "react";
import { closeModal, openModal } from "../utils";

const TitleMultipleParagraphGifs = ({ title, paragraphGifsArray }) => {
  const paragraphGif = (oneParagraphGifArray, index) => {
    if (oneParagraphGifArray[1] !== undefined) {
      const paragraphs = [];
      // If first element of the paragraphGifsArray, then don't add padding-top
      // to the paragraph.
      if (oneParagraphGifArray === paragraphGifsArray[0]) {
        paragraphs.push(
          <div key={index}>
            <p className="space-between-paragraphs">
              {oneParagraphGifArray[0]}
            </p>
            <img
              src={oneParagraphGifArray[1]}
              alt={oneParagraphGifArray[2]}
              onClick={() => openModal(oneParagraphGifArray[3])}
              className="image-bottom-margin responsive-image"
            />
            <div
              id={oneParagraphGifArray[3]}
              className="modal"
              onClick={() => closeModal(oneParagraphGifArray[3])}
            >
              <span
                className="close cursor"
                onClick={() => closeModal(oneParagraphGifArray[3])}
              >
                <div></div>
              </span>
              <img
                src={oneParagraphGifArray[1]}
                alt={oneParagraphGifArray[2]}
                className="modal-content"
              />
            </div>
          </div>
        );
      } else {
        paragraphs.push(
          <div key={index}>
            <p className="space-between-paragraphs added-padding-top">
              {oneParagraphGifArray[0]}
            </p>
            <img
              src={oneParagraphGifArray[1]}
              alt={oneParagraphGifArray[2]}
              onClick={() => openModal(oneParagraphGifArray[3])}
              className="image-bottom-margin responsive-image"
            />
            <div
              id={oneParagraphGifArray[3]}
              className="modal"
              onClick={() => closeModal(oneParagraphGifArray[3])}
            >
              <span
                className="close cursor"
                onClick={() => closeModal(oneParagraphGifArray[3])}
              >
                <div></div>
              </span>
              <img
                src={oneParagraphGifArray[1]}
                alt={oneParagraphGifArray[2]}
                className="modal-content"
              />
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
