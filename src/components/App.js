import React, { Component } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import {
  getComponentForPageName,
  PAGE_NAME_PREFIX,
  PageNames,
  URL_PATH_KEY,
} from "../pageConstants";
import { scrollToTop } from "../utils";

/**
 * More info: https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#Example
 */
const getWindowLocationPathName = () => {
  const params = new URL(document.location).searchParams;
  const pathValueInURL = params.get(URL_PATH_KEY);
  if (!pathValueInURL) return PageNames.HOME;
  if (!getComponentForPageName(pathValueInURL)) return PageNames.HOME;
  else return pathValueInURL;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { destination: props.pathName };
    console.log("App.state: ", this.state);
  }

  componentDidMount() {
    this.props.runAfterMount();

    // Pop state:
    // http://html5doctor.com/history-api/
    window.addEventListener("popstate", (event) => {
      const browserHistoryState = event.state;

      let destination = null;
      if (browserHistoryState) {
        destination = browserHistoryState.HISTORY_DESTINATION_KEY;
      } else {
        destination = getWindowLocationPathName();
        if (!destination) destination = PageNames.HOME;
      }

      this.setState({ destination }, () => {
        console.log(this.state);
      });
    });
  }

  /**
   * setState() is an asynchronous function.
   * https://stackoverflow.com/a/41446620/2085356
   */
  onNavigationClicked = (destination) => {
    this.setState({ destination }, () => {
      console.log(this.state);
    });

    // Push state:
    // https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
    const url = new URL(window.location);
    url.searchParams.set(URL_PATH_KEY, destination);
    const browserHistoryState = { HISTORY_DESTINATION_KEY: destination };
    window.history.pushState(browserHistoryState, destination, url);

    document.title = PAGE_NAME_PREFIX + destination;

    scrollToTop();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          currentDestination={this.state.destination}
          onNavigationClicked={this.onNavigationClicked}
        />
        {getComponentForPageName(
          this.state.destination,
          this.onNavigationClicked
        )}
      </React.Fragment>
    );
  }
}

export { App, getWindowLocationPathName };
