import React from "react";
import "./../styles/Footer.css";
import githubLogo from "./../vector-images/github-logo.svg";
import mediumLogo from "./../vector-images/medium.svg";
import dribbbleLogo from "./../vector-images/dribbble.svg";
import linkedInLogo from "./../vector-images/linkedin.svg";
import copyright from "./../vector-images/copyright.svg";

const Footer = () => {
  return (
    <div id="footer">
      <p>
        This website was{" "}
        <a href="https://github.com/MaretIdris/portfolio2020" target="_blank">
          designed and built by Maret Idris
        </a>
        .
      </p>
      <p>
        Clone this repo from{" "}
        <a href="https://github.com/MaretIdris/portfolio2020" target="_blank">
          Github
        </a>
        .
      </p>
      <p>
        <img src={copyright} alt="Copyright" className="copyright-icon" />
        2020 Maret Idris
      </p>
      <div id="footer-icons">
        <a href="https://github.com/MaretIdris" target="_blank">
          <img src={githubLogo} alt="Github logo" />
        </a>
        <a href="https://medium.com/@maret.idris" target="_blank">
          <img src={mediumLogo} alt="Medium logo" />
        </a>
        <a href="https://dribbble.com/maretidris" target="_blank">
          <img src={dribbbleLogo} alt="Dribbble logo" />
        </a>
        <a href="https://www.linkedin.com/in/maretidris/" target="_blank">
          <img src={linkedInLogo} alt="LinkedIn logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
