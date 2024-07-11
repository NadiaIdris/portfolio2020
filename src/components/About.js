import React from "react";
import "./../styles/About.css";
import Footer from "./Footer";
import LinkedInButton from "./LinkedInButton";
import GitHubButton from "./GitHubButton";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.headingTextWithBreak =
      "I believe engineering is in service of delivering great experiences";
    this.headingText =
      "I believe engineering is in service of delivering great experiences";
  }

  componentDidMount() {
    const heading = document.querySelector("#about-heading");

    const replaceHeadingText = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 680) {
        heading.innerHTML = this.headingText;
      } else {
        heading.innerHTML = this.headingTextWithBreak;
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
            {this.headingTextWithBreak}
          </h3>
          <LinkedInButton />
          <GitHubButton />
        </section>
      );
    };

    const designCards = () => {
      return (
        <section className="vertical-title-container container-one">
          <h5 className="h5-padding-bottom">Nadia Idris</h5>
          <ul>
            <li className="responsive-list">
              <span className="secondary-font-bold">Email: </span>
              <span className="secondary-font">nadia@fasterlap.com</span>
            </li>
            <li className="responsive-list">
              <span className="secondary-font-bold">Coding experience: </span>
              <span className="secondary-font">5 years</span>
            </li>
            <li className="responsive-list">
              <span className="secondary-font-bold">Design experience: </span>
              <span className="secondary-font">7 years</span>
            </li>
          </ul>
          <br />
          <p>
            I am a full stack software engineer with 5 years of experience
            working using React, Redux, GraphQL, JavaScript (ES6), HTML5, and
            CSS3 (Flexbox, CSS Grid, Media Queries, Modules, animations),
            PostgreSQL, Node.js, etc.
          </p>
          <br />
          <p>
            Before becoming a software engineer, I was a product designer for 7
            years. I co-founded a startup in Ireland in 2012, which I relocated
            to the SF Bay Area in 2015.
          </p>
        </section>
      );
    };

    const thingsIDo = () => {
      return (
        <section className="vertical-title-container container-two">
          <h5 className="h5-padding-bottom">Coding skills</h5>
          <ul>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>TypeScript</b>, <b>JavaScript</b>, <b>React</b>, <b>Redux</b>
                , <b>HTML5</b>, <b>Node.js</b>, Express
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>CSS3</b> (inc. CSS Modules, Media Queries, CSS Grid, Flexbox,
                etc), <b>CSS in JS</b> (styled-components), <b>Material UI</b>,{" "}
                <b>Chakra UI</b>
              </p>
            </li>

            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Client-side routing</b> (React Router)
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Back-end and API development</b> (Node.js, Express)
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Relational database</b> (PostgreSQL)
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>REST and Web APIs</b>
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Functional programming</b>, <b>OOP</b> (object-oriented
                programming)
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                npm, Webpack, ESLint, Prettier, Babel
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Git</b>, <b>GitHub</b>
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Unit testing</b> (Jest, React Resting Library, Enzyme)
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>CSS animation</b>, <b>JavaScript animation</b>
              </p>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <p className="secondary-font">
                <b>Responsive UI</b>
              </p>
            </li>
            <li className="bullet-point-container"></li>
          </ul>
          <h5 className="h5-padding-bottom h5-padding-top">Design skills</h5>
          <ul>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">Responsive web design</span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">Visual design</span>
                <span className="secondary-font">
                  &nbsp;using Figma, Photoshop
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">Interaction design</span>
                <span className="secondary-font">&nbsp;using Figma</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">
                Ideation and wireframing
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">User research</span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">Android design</span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">iOS design</span>
            </li>
          </ul>
        </section>
      );
    };

    const softSkills = () => {
      return (
        <section className="vertical-title-container container-four">
          <h5 className="h5-padding-bottom">Soft skills</h5>
          <ul>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font">
                Self-awareness and a desire to continually improve.
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font">
                Ability to communicate effectively and collaborate with
                different stakeholders (project managers, designers, software
                engineers, etc).
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font">
                Creativity, resilience, and attention to detail.
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font">
                Desire to solve hard and engaging engineering problems.
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font">
                Empathy for the users/customers, co-workers, and leadership.
              </span>
            </li>
          </ul>
        </section>
      );
    };

    const articlesIWrote = () => {
      const screenDensity =
        "https://developerlife.com/2018/07/21/designing-for-multiple-screen-densities-on-android/";
      const responsive =
        "https://developerlife.com/2019/08/25/guide-to-building-responsive-web-apps/";
      const flexboxOne =
        "https://developerlife.com/2017/11/15/flexbox-getting-started-part-1-2/";
      const flexboxTwo =
        "https://developerlife.com/2017/11/15/flexbox-building-a-navigation-bar-part-2-2/";

      return (
        <section className="vertical-title-container container-three">
          <h5 className="h5-padding-bottom">Articles I've published</h5>
          <ul>
            <li className="secondary-font">
              I share my knowledge on{" "}
              <a
                href="https://developerlife.com/category/UXE/"
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link-no-font-size"
              >
                developerlife.com
              </a>{" "}
              and{" "}
              <a
                href="https://medium.com/@NadiaIdris"
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link-no-font-size"
              >
                Medium
              </a>
              .
            </li>
            <br />
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
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
              <span className="dash-regular-weight secondary-font">-</span>
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
              <span className="dash-regular-weight secondary-font">-</span>
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
              <span className="dash-regular-weight secondary-font">-</span>
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
        <div className="design-cards-container remove-padding-bottom">
          {designCards()}
          {thingsIDo()}
          {softSkills()}
          {articlesIWrote()}
        </div>
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default About;
