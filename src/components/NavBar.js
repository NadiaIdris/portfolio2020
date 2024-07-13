import React from "react";

import darkThemeLogo from "./../vector-images/dark-theme-logo.svg";
import logo from "./../vector-images/logo.svg";

import darkThemeGithub from "./../vector-images/dark-theme-github-logo.svg";
import github from "./../vector-images/github-logo.svg";

import iosLogo from "./../vector-images/ios-logo.svg";
import androidLogo from "./../vector-images/android-logo.svg";
import webLogo from "./../vector-images/web-logo.svg";
import reactLogo from "./../vector-images/react-logo.svg";
import tsLogo from "./../vector-images/ts-logo.svg";
import nodeLogo from "./../vector-images/node-logo.svg";
import jsLogo from "./../vector-images/js-logo.svg";
import htmlLogo from "./../vector-images/html-logo.svg";
import cssLogo from "./../vector-images/css-logo.svg";

import { PageNames, PageNamesWithSpaces } from "../names";
import "./../styles/NavBar.css";
import { sharedObject } from "./SharedContext";

class Logo extends React.Component {
  render() {
    const isDarkTheme = this.props.myDarkThemeValue.getValue() === "true";
    return (
      <a
        id="link-for-logo"
        onClick={() => sharedObject.onNavigationClicked(PageNames.HOME)}
        title="Nadia Idris home page"
      >
        <img
          className="logo"
          src={isDarkTheme ? darkThemeLogo : logo}
          alt="Logo"
        />
      </a>
    );
  }
}

// Should the toggle id go to parent (label) or child (span)
// https://stackoverflow.com/a/25264860/10029397
// How to add attributes conditionally in jsx: https://stackoverflow.com/a/31164090/10029397
class DarkThemeChooser extends React.Component {
  render() {
    const isChecked = this.props.myDarkThemeValue.getValue() === "true";
    const changeThemeOnClickLambda = this.props.changeThemeOnClickLambda;
    return (
      <label className="switch">
        <input
          id="dark-theme-checkbox"
          type="checkbox"
          readOnly
          checked={isChecked}
          onClick={changeThemeOnClickLambda}
        />
        <span id="dark-theme-button" className="slider"></span>
      </label>
    );
  }
}

class GitHub extends React.Component {
  render() {
    const isDarkTheme = this.props.myDarkThemeValue.getValue() === "true";
    return (
      <a
        href="https://github.com/NadiaIdris/portfolio2020"
        target="_blank"
        rel="noreferrer"
        title="Nadia Idris Github page"
        id="github-logo-on-nav-bar"
      >
        <img
          className="github-logo"
          src={isDarkTheme ? darkThemeGithub : github}
          alt="Github logo"
        />
      </a>
    );
  }
}

const createHomeOrAboutComponent = (props, pageName) => {
  const isActive = (pageName) => {
    if (props.currentDestination === pageName) return "nav-selected";
  };
  return (
    <a
      className={isActive(pageName)}
      onClick={() => sharedObject.onNavigationClicked(pageName)}
    >
      {pageName}
    </a>
  );
};

const getIconsForDropdown = (name) => {
  const webAlt = "Web icon";
  const iOSAlt = "iOS icon";
  const androidAlt = "Android icon";
  const reactAlt = "React icon";
  const tsAlt = "TypeScript icon";
  const nodeAlt = "Node.js icon";
  const jsAlt = "JavaScript icon";
  const htmlAlt = "HTML icon";
  const cssAlt = "CSS icon";

  const iosIcon = iosLogo;
  const androidIcon = androidLogo;
  const webIcon = webLogo;
  const reactIcon = reactLogo;
  const tsIcon = tsLogo;
  const nodeIcon = nodeLogo;
  const jsIcon = jsLogo;
  const htmlIcon = htmlLogo;
  const cssIcon = cssLogo;

  switch (name) {
    case PageNames.TRUCKX:
      return (
        <React.Fragment>
          <img src={iosIcon} alt={iOSAlt} />
          <img src={androidIcon} alt={androidAlt} />
        </React.Fragment>
      );
    case PageNames.ABBEY_ROAD_STUDIOS:
      return <img src={webIcon} alt={webAlt} />;
    case PageNames.UAMP:
      return <img src={androidIcon} alt={androidAlt} />;
    case PageNames.INMUSIK:
      return (
        <React.Fragment>
          <img src={webIcon} alt={webAlt} />
          <img src={iosIcon} alt={iOSAlt} />
        </React.Fragment>
      );
    case PageNames.WHOLEWORLDBAND:
      return <img src={webIcon} alt={webAlt} />;
    case PageNames.STUDENTS_APP:
      return (
        <React.Fragment>
          <img src={reactIcon} alt={reactAlt} />
          <img src={tsIcon} alt={tsAlt} />
          <img src={nodeIcon} alt={nodeAlt} />
        </React.Fragment>
      );
    case PageNames.SPREADSHEET_PROTOTYPE_APP:
      return (
        <React.Fragment>
          <img src={reactIcon} alt={reactAlt} />
          <img src={tsIcon} alt={tsAlt} />
        </React.Fragment>
      );
    case PageNames.PLANNER_APP:
      return (
        <React.Fragment>
          <img src={jsIcon} alt={jsAlt} />
          <img src={htmlIcon} alt={htmlAlt} />
          <img src={cssIcon} alt={cssAlt} />
        </React.Fragment>
      );
    case PageNames.WEATHER_APP:
      return (
        <React.Fragment>
          <img src={jsIcon} alt={jsAlt} />
          <img src={htmlIcon} alt={htmlAlt} />
          <img src={cssIcon} alt={cssAlt} />
        </React.Fragment>
      );
    default:
      return <></>;
  }
};

const createDropdownComponent = (props, name, nameWithSpaces) => {
  const isDarkTheme = props.myDarkThemeValue.getValue() === "true";

  const isActive = (destination) => {
    if (props.currentDestination === destination) return "dropdown-selected";
  };

  let isSelected = false;
  if (props.currentDestination === name) isSelected = true;

  return (
    <a
      className={isActive(name)}
      onClick={() => sharedObject.onNavigationClicked(name)}
    >
      <p>{nameWithSpaces}</p>
      <div className="app-logos-container">{getIconsForDropdown(name)}</div>
    </a>
  );
};

// Dark theme:
const darkThemeColorGrayDarkest = "rgba(231, 237, 243,  .7)";
const darkThemeColorGrayLighter = "rgba(231, 237, 243,  .9)";
const darkThemeColorWhite = "#1B1C1E";
const darkThemeColorDropdownBg = "rgba(11, 14, 18, 1)";
const darkThemeColorHoverBg = "rgba(31, 31, 31, 0.5)";
const darkThemeColorSelectedBg = "rgba(0, 0, 0, .5)";
const darkThemeColorSelectedText = "rgba(238, 204, 17, 0.9)";
const darkThemeColorGrayAccent = "#303030";
const darkThemeColorTriangleBg = "rgba(11, 14, 18, 1)";
const darkThemeColorTriangleBorder = "rgba(11, 14, 18, 1)";
const darkThemeDropdownBoxShadow = "0 0 0 0 rgb(0, 0, 0)";
const darkThemeDropdownTriangleBoxShadow = "0 0 0 0 rgb(0, 0, 0)";
const darkThemeHighlightText = "#1B1C1E";

const lightThemeColorGrayDarkest = "#303030";
const lightThemeColorWhite = "#ffffff";
const lightThemeColorDropdownBg = "#ffffff";
const lightThemeColorHoverBg = "#f7f7f7";
const lightThemeColorSelectedBg = "#efefef";
const lightThemeColorSelectedText = "rgba(23, 27, 34, 0.9)";
const lightThemeColorGrayAccent = "#DFDFDF";
const lightThemeColorTriangleBg = "#ffffff";
const lightThemeColorTriangleBorder = "#DFDFDF";
const lightThemeDrowdownBoxShadow = "0 1px 3px 0 rgba(0,0,0,0.4)";
const lightThemeDropdownTriangleBoxShadow = "0 0 2px 0 rgba(0, 0, 0, 0.3)";

class NavBar extends React.Component {
  componentDidMount() {
    const myDarkThemeValue = this.props.myDarkThemeValue;

    if (myDarkThemeValue.getValue() === "true") {
      this.applyDarkTheme();
      const checkbox = document.querySelector("#dark-theme-checkbox");
      checkbox.checked = true;
    }
  }

  applyDarkTheme = () => {
    document.documentElement.style.setProperty(
      "--color-gray-darkest",
      darkThemeColorGrayDarkest
    );
    document.documentElement.style.setProperty(
      "--color-gray-lighter",
      darkThemeColorGrayLighter
    );
    document.documentElement.style.setProperty(
      "--color-white",
      darkThemeColorWhite
    );
    document.documentElement.style.setProperty(
      "--color-dropdown-background",
      darkThemeColorDropdownBg
    );
    document.documentElement.style.setProperty(
      "--color-gray-hover-bckround",
      darkThemeColorHoverBg
    );
    document.documentElement.style.setProperty(
      "--color-dropdown-selected",
      darkThemeColorSelectedBg
    );
    document.documentElement.style.setProperty(
      "--color-dropdown-selected-text",
      darkThemeColorSelectedText
    );
    document.documentElement.style.setProperty(
      "--color-gray-accent",
      darkThemeColorGrayAccent
    );
    document.documentElement.style.setProperty(
      "--color-triangle-bg",
      darkThemeColorTriangleBg
    );
    document.documentElement.style.setProperty(
      "--color-triangle-border",
      darkThemeColorTriangleBorder
    );
    document.documentElement.style.setProperty(
      "--dropdown-box-shadow",
      darkThemeDropdownBoxShadow
    );
    document.documentElement.style.setProperty(
      "--dropdown-triangle-box-shadow",
      darkThemeDropdownTriangleBoxShadow
    );
    document.documentElement.style.setProperty(
      "--color-highlight-text",
      darkThemeHighlightText
    );
  };

  applyLightTheme = () => {
    document.documentElement.style.setProperty(
      "--color-gray-darkest",
      lightThemeColorGrayDarkest
    );
    document.documentElement.style.setProperty(
      "--color-gray-lighter",
      lightThemeColorGrayDarkest
    );
    document.documentElement.style.setProperty(
      "--color-white",
      lightThemeColorWhite
    );
    document.documentElement.style.setProperty(
      "--color-dropdown-background",
      lightThemeColorDropdownBg
    );
    document.documentElement.style.setProperty(
      "--color-gray-hover-bckround",
      lightThemeColorHoverBg
    );
    document.documentElement.style.setProperty(
      "--color-dropdown-selected",
      lightThemeColorSelectedBg
    );
    document.documentElement.style.setProperty(
      "--color-dropdown-selected-text",
      lightThemeColorSelectedText
    );
    document.documentElement.style.setProperty(
      "--color-gray-accent",
      lightThemeColorGrayAccent
    );
    document.documentElement.style.setProperty(
      "--color-triangle-bg",
      lightThemeColorTriangleBg
    );
    document.documentElement.style.setProperty(
      "--color-triangle-border",
      lightThemeColorTriangleBorder
    );
    document.documentElement.style.setProperty(
      "--dropdown-box-shadow",
      lightThemeDrowdownBoxShadow
    );
    document.documentElement.style.setProperty(
      "--dropdown-triangle-box-shadow",
      lightThemeDropdownTriangleBoxShadow
    );
    document.documentElement.style.setProperty(
      "--color-highlight-text",
      lightThemeColorGrayDarkest
    );
  };

  changeThemeOnClick = (myDarkThemeValue) => {
    if (myDarkThemeValue.getValue() === "true") {
      // Light theme
      myDarkThemeValue.setValue("false");
      this.applyLightTheme();
    } else {
      // Dark theme
      myDarkThemeValue.setValue("true");
      this.applyDarkTheme();
    }
  };

  render() {
    // Function that checks if one of the design projects is active. If it is
    // then it adds black underline to Designs tab.
    const isDesignsNavActive = (destination, pageNameArray) => {
      if (pageNameArray.includes(destination)) return "nav-selected";
    };

    return (
      <div id="app-bar">
        <Logo myDarkThemeValue={this.props.myDarkThemeValue} />
        <nav>
          {createHomeOrAboutComponent(this.props, PageNames.HOME)}
          <div
            id="code-container"
            className={isDesignsNavActive(this.props.currentDestination, [
              PageNames.WEATHER_APP,
              PageNames.PLANNER_APP,
              PageNames.STUDENTS_APP,
              PageNames.SPREADSHEET_PROTOTYPE_APP,
            ])}
          >
            Code
            <div id="code-dropdown-container">
              <div className="center-the-dropdown">
                <div className="triangle" />
                <div className="dropdown code-dropdown-width">
                  {createDropdownComponent(
                    this.props,
                    PageNames.STUDENTS_APP,
                    PageNamesWithSpaces.STUDENTS_APP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.SPREADSHEET_PROTOTYPE_APP,
                    PageNamesWithSpaces.SPREADSHEET_PROTOTYPE_APP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.PLANNER_APP,
                    PageNamesWithSpaces.PLANNER_APP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.WEATHER_APP,
                    PageNamesWithSpaces.WEATHER_APP
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            id="designs-container"
            className={isDesignsNavActive(this.props.currentDestination, [
              PageNames.TRUCKX,
              PageNames.ABBEY_ROAD_STUDIOS,
              PageNames.UAMP,
              PageNames.INMUSIK,
              PageNames.WHOLEWORLDBAND,
            ])}
          >
            Designs
            <div id="designs-dropdown-container">
              <div className="center-the-dropdown">
                <div className="triangle" />
                <div className="dropdown">
                  {createDropdownComponent(
                    this.props,
                    PageNames.TRUCKX,
                    PageNamesWithSpaces.TRUCKX
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.ABBEY_ROAD_STUDIOS,
                    PageNamesWithSpaces.ABBEY_ROAD_STUDIOS
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.UAMP,
                    PageNamesWithSpaces.UAMP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.INMUSIK,
                    PageNamesWithSpaces.INMUSIK
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.WHOLEWORLDBAND,
                    PageNamesWithSpaces.WHOLEWORLDBAND
                  )}
                </div>
              </div>
            </div>
          </div>
          {createHomeOrAboutComponent(this.props, PageNames.ABOUT)}
        </nav>
        <div id="dark-theme-and-github-container">
          <DarkThemeChooser
            myDarkThemeValue={this.props.myDarkThemeValue}
            changeThemeOnClickLambda={() => {
              this.changeThemeOnClick(this.props.myDarkThemeValue);
            }}
          />
          <GitHub myDarkThemeValue={this.props.myDarkThemeValue} />
        </div>
      </div>
    );
  }
}

export default NavBar;
