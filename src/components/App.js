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
 *
 * @return PageName from the search param (URL_PATH_KEY) in window.location.
 */
const getPageNameFromWindowLocation = () => {
  const params = new URL(document.location).searchParams;
  const pathValueInURL = params.get(URL_PATH_KEY);
  if (!pathValueInURL) return PageNames.HOME;
  if (!getComponentForPageName(pathValueInURL)) return PageNames.HOME;
  else return pathValueInURL;
};

const updateDocumentTitle = (title) => {
  if (!title) return;
  document.title = PAGE_NAME_PREFIX + title;
};

/**
 * Creates the state if it does not already exist. Otherwise it updates the state.
 * Note that setState() is an asynchronous function.
 * More info: https://stackoverflow.com/a/41446620/2085356
 *
 * @param component React component who's state is being modified.
 * @param destination This is the PageName that should be saved to the component's state.
 */
const createOrUpdateStateWithDestination = (component, destination) => {
  if (!component.state) {
    component.state = { destination };
    console.log("App.state created for the first time: ", component.state);
  } else {
    component.setState({ destination }, () => {
      // This is called after the state is actually updated (asynchronously).
      scrollToTop();
      console.log("App.state updated: ", component.state);
    });
  }
  updateDocumentTitle(destination);
};

class App extends Component {
  constructor(props) {
    super(props);
    createOrUpdateStateWithDestination(this, props.pageName);
  }

  componentDidMount() {
    this.props.runAfterAppIsMounted();
    window.addEventListener("popstate", this.handlePopState);
  }

  onNavigationClicked = (destination) => {
    createOrUpdateStateWithDestination(this, destination);
    this.handlePushState(destination);
  };

  /**
   * Push state: https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
   *
   * @param destination Make sure to pass this to the event that handlePopState will use.
   */
  handlePushState = (destination) => {
    const url = new URL(window.location);
    url.searchParams.set(URL_PATH_KEY, destination);
    const browserHistoryState = { destination };
    window.history.pushState(browserHistoryState, destination, url);
  };

  /**
   * Pop state: http://html5doctor.com/history-api/
   *
   * @param event Contains destination which is added when pushState is called.
   */
  handlePopState = (event) => {
    const browserHistoryState = event.state;
    // https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
    let { destination } = { browserHistoryState };
    if (!destination) {
      destination = getPageNameFromWindowLocation();
    }
    createOrUpdateStateWithDestination(this, destination);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          currentDestination={this.state.destination}
          onNavigationClicked={this.onNavigationClicked}
        />
        {getComponentForPageName(this.state.destination)}
      </React.Fragment>
    );
  }
}

export { App, getPageNameFromWindowLocation };
