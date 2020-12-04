import React from "react";
import closeIcon from "../vector-images/close-icon.svg";
import { closeModal, openModal } from "../utils";

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
      <img
        src={image}
        alt={imageAlt}
        className="gif image-bottom-margin responsive-image"
        onClick={() => openModal(imageId)}
      />
      <div id={imageId} className="modal" onClick={() => closeModal()}>
        <span className="close cursor" onClick={() => closeModal()}>
          <img src={closeIcon} />
        </span>
        <img src={image} className="modal-content" />
      </div>
    </div>
  );
};

export default ColOneTextColTwoImg;
