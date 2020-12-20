import React from "react";
import "./../styles/About.css";
import maretIdris from "./../vector-images/maret-idris.png";
import Footer from "./Footer";

class About extends React.Component {
  componentDidMount() {
    const heading = document.querySelector("#about-heading");

    const replaceHeadingText = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 680) {
        heading.innerHTML = "Welcome to my design and code portfolio!";
      } else {
        heading.innerHTML = "Welcome to my design and <br />code portfolio!";
      }
    };
    window.addEventListener("resize", replaceHeadingText);

    replaceHeadingText();
  }

  render() {
    const heading = () => {
      return (
        <section className="banner">
          <h3 id="about-heading" className="h3-padding about-title">
            Welcome to my design and <br />
            code portfolio!
          </h3>
          <button className="try-app-button">Download resume</button>
        </section>
      );
    };

    const designCards = () => {
      return (
        <section className="design-cards-container">
          <div className="design-card card-with-text">
            <h5 className="h5-padding">Maret Idris</h5>
            <ul className="card-text">
              <li>
                <span className="secondary-font-bold">
                  Work authorisation:{" "}
                </span>
                <span className="secondary-font">🇺🇸 Yes.</span>
              </li>
              <li>
                <span className="secondary-font-bold">Design experience: </span>
                <span className="secondary-font">7 years.</span>
              </li>
              <li>
                <span className="secondary-font-bold">Coding experience: </span>
                <span className="secondary-font">2 years.</span>
              </li>
              <br />
              <li>
                <span className="secondary-font-bold">Strengths: </span>
                <ul>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">UI/visual design.</span>
                  </li>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">End-to-end design.</span>
                  </li>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">
                      Prototyping (JavaScript, HTML, CSS) in code using real
                      data.
                    </span>
                  </li>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">
                      Attention to details.
                    </span>
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <span className="secondary-font-bold last-line">
                  Weakness:{" "}
                </span>
                <span className="secondary-font last-line">
                  In-depth user research.
                </span>
              </li>
            </ul>
          </div>
          <img
            src={maretIdris}
            alt="Maret Idris"
            className="design-card-image"
          />
        </section>
      );
    };

    const thingsIDo = () => {
      return (
        <section className="vertical-title-container">
          <h5 className="h5-padding">Things I do</h5>
          <ul>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <div>
                <span className="secondary-font-bold">Mobile design</span>
                <span className="secondary-font">&nbsp;(Android, iOS)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <div>
                <span className="secondary-font-bold">Visual design</span>
                <span className="secondary-font">
                  &nbsp;using Figma, Sketch, Photoshop
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <div>
                <span className="secondary-font-bold">Interaction design</span>
                <span className="secondary-font">
                  &nbsp;using Figma, Sketch
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <div>
                <span className="secondary-font-bold">
                  Prototyping using code{" "}
                </span>
                <span className="secondary-font">
                  (JavaScript, HTML, CSS, React, npm, Webpack)
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <div>
                <span className="secondary-font-bold">
                  Prototyping using tools
                </span>
                <span className="secondary-font">&nbsp;(Invision, Sketch)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <span className="secondary-font-bold">
                Ideation and wireframing
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <span className="secondary-font-bold">User research</span>
            </li>
          </ul>
        </section>
      );
    };

    const articlesIWrote = () => {
      const screenDensity =
        "https://blog.prototypr.io/designing-for-multiple-screen-densities-on-android-5fba8afe7ead";
      const responsive =
        "https://blog.prototypr.io/a-pragmatic-guide-to-designing-and-building-responsive-web-applications-ff625dd2f206";
      const flexboxOne =
        "https://developerlife.com/2017/11/15/flexbox-getting-started-part-1-2/";
      const flexboxTwo =
        "https://developerlife.com/2017/11/15/flexbox-building-a-navigation-bar-part-2-2/";

      return (
        <section className="vertical-title-container">
          <h5 className="h5-padding">Articles I've published</h5>
          <ul>
            <li className="secondary-font">
              I publish on{" "}
              <a
                href="https://developerlife.com/category/UXE/"
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link-no-font-size"
              >
                developerlife.com
              </a>{" "}
              and on{" "}
              <a
                href="https://medium.com/@maret.idris"
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link-no-font-size"
              >
                Medium
              </a>{" "}
              (Prototypr and codeburst).
            </li>
            <br />
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <a
                href={screenDensity}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                Designing for multiple screen densities on Android
              </a>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <a
                href={responsive}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                A pragmatic guide to designing and building responsive web
                applications
              </a>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <a
                href={flexboxOne}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                Flexbox: Getting started (Part 1/2)
              </a>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight">-</span>
              <a
                href={flexboxTwo}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                Flexbox: Building a navigation bar (Part 2/2)
              </a>
            </li>
          </ul>
        </section>
      );
    };

    return (
      <React.Fragment>
        {heading()}
        {designCards()}
        <div className="design-cards-container remove-padding-bottom">
          {thingsIDo()}
          {articlesIWrote()}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
