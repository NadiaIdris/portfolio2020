import React from "react";

class Header extends React.Component {
  componentDidMount() {
    if (this.props.buttonToApp) {
      const headerDescriptionParagraph = document.querySelector(
        "#header-description"
      );
      headerDescriptionParagraph.style.padding = "0 0 20px 0";
    }
  }

  render() {
    const {
      projectName,
      description,
      mainImg,
      mainImgAlt,
      buttonToApp,
      buttonToAppText,
      buttonToAppLink,
    } = this.props;

    const addButton = () => {
      if (buttonToApp) {
        return (
          <button
            className="try-app-button"
            onClick={() => window.open(buttonToAppLink, "_blank")}
          >
            {buttonToAppText}
          </button>
        );
      }
    };

    return (
      <div id="project-head">
        <h1>{projectName}</h1>
        <p id="header-description">{description}</p>
        {addButton(buttonToApp, buttonToAppText)}
        <img src={mainImg} alt={mainImgAlt} />
      </div>
    );
  }
}

export default Header;
