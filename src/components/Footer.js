import React from "react";
import "./../styles/Footer.css";

import githubLogo from "./../vector-images/github-logo.svg";
import darkThemeGithubLogo from "./../vector-images/dark-theme-github-logo.svg";

import mediumLogo from "./../vector-images/medium.svg";
import darkThemeMediumLogo from "./../vector-images/dark-theme-medium-logo.svg";

import dribbbleLogo from "./../vector-images/dribbble.svg";
import darkThemeDribbbleLogo from "./../vector-images/dark-theme-dribbble-logo.svg";

import linkedInLogo from "./../vector-images/linkedin.svg";
import darkThemeLinkedInLogo from "./../vector-images/dark-theme-linkedin-logo.svg";

import copyright from "./../vector-images/copyright.svg";
import darkThemeCopyright from "./../vector-images/dark-theme-copyright-symbol.svg";

class Footer extends React.Component {
  render() {
    const isDarkTheme = this.props.myDarkThemeValue.getValue() === "true";
    return (
      <div id="footer">
        <p>
          This website was{" "}
          <a href="https://github.com/NadiaIdris/portfolio2020" target="_blank">
            designed and built by Nadia Idris
          </a>
          .
        </p>
        <p>
          Clone this repo from{" "}
          <a href="https://github.com/NadiaIdris/portfolio2020" target="_blank">
            Github
          </a>
          .
        </p>
        <p>
          <img
            src={isDarkTheme ? darkThemeCopyright : copyright}
            alt="Copyright"
            className="copyright-icon"
          />
          {new Date().getFullYear()} Nadia Idris
        </p>
        <div id="footer-icons">
          <a href="https://github.com/NadiaIdris" target="_blank">
            <img
              src={isDarkTheme ? darkThemeGithubLogo : githubLogo}
              alt="Github logo"
            />
          </a>
          <a href="https://medium.com/@NadiaIdris" target="_blank">
            <img
              src={isDarkTheme ? darkThemeMediumLogo : mediumLogo}
              alt="Medium logo"
            />
          </a>
          <a href="https://dribbble.com/NadiaIdris" target="_blank">
            <img
              src={isDarkTheme ? darkThemeDribbbleLogo : dribbbleLogo}
              alt="Dribbble logo"
            />
          </a>
          <a href="www.linkedin.com/in/NadiaIdris1" target="_blank">
            <img
              src={isDarkTheme ? darkThemeLinkedInLogo : linkedInLogo}
              alt="LinkedIn logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
