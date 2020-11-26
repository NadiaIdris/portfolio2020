import React from "react";

const TitleParagraph = ({ title, paragraphArray }) => {
  // If component has more than one paragraph, add space between paragraphs.
  const paragraphs = [];

  for (let i = 0; i < paragraphArray.length; i++) {
    if (paragraphArray.length === 1) {
      paragraphs.push(<p key={paragraphArray[i]}>{paragraphArray[i]}</p>);
    } else if (paragraphArray.length > 1 && paragraphArray.length - 1 === i) {
      paragraphs.push(<p key={paragraphArray[i]}>{paragraphArray[i]}</p>);
    } else {
      paragraphs.push(
        <p key={paragraphArray[i]} className="space-between-paragraphs">
          {paragraphArray[i]}
        </p>
      );
    }
  }

  return (
    <div className="project-page-component-container">
      <h2>{title}</h2>
      {paragraphs}
    </div>
  );
};

export default TitleParagraph;
