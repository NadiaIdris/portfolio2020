import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { getValueOfCSSVariable } from "./CSSUtils";

// This function positions nav bar dropdowns.
const myWindowResizeListener = (containerId, dropdownId) => {
    const container = document.querySelector(containerId);
    const containerStyle = getComputedStyle(container);
    const containerMarginLeft = parseInt(
        containerStyle.marginLeft
    );
    const containerWidth =
        container.offsetWidth + containerMarginLeft;
    const containerRect = container.getBoundingClientRect();
    const containerX = containerRect.left;

    const dropdown = document.querySelector(dropdownId);
    const dropdownStyle = getComputedStyle(dropdown);
    const dropdownMarginLeft = parseInt(dropdownStyle.marginLeft);
    const dropdownWidth = dropdown.offsetWidth + dropdownMarginLeft;

    // Set the CSS 'left' property of the computed style for `dropdown` to some computed number.
    const n1 = containerX + containerWidth / 2;
    const n2 = n1 - dropdownWidth / 2;
    dropdown.style.left = n2 + "px";
};

// Function that adds animation for dropdown menu.
function attachAnimationForDropdownMenu(dropdownId, containerId) {
    const dropdown = document.querySelector(dropdownId);
    const dropdownOpacityAnimationDelay = getValueOfCSSVariable(
        dropdown,
        "--dropdown-opacity-animation-delay"
    );

    let timeoutId = null;

    const fadeIn = () => {
        if (timeoutId != null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        dropdown.style.opacity = "1";
        dropdown.style.visibility = "visible";
        dropdown.style.position = "fixed";
        dropdown.style.marginTop = "-6px";
        dropdown.style.transition = `opacity ${dropdownOpacityAnimationDelay}ms, margin ${dropdownOpacityAnimationDelay}ms`;
    };

    const fadeOut = () => {
        dropdown.style.opacity = "0";
        dropdown.style.marginTop = "-3px";
        dropdown.style.transition = `opacity ${dropdownOpacityAnimationDelay}ms, margin ${dropdownOpacityAnimationDelay}ms`;
        timeoutId = setTimeout(() => {
            dropdown.style.visibility = "hidden";
            dropdown.style.position = "absolute";
            timeoutId = null;
        }, dropdownOpacityAnimationDelay);
    };

    const container = document.querySelector(containerId);
    container.addEventListener("mouseenter", fadeIn);
    container.addEventListener("mouseleave", fadeOut);
}

const handleAutoHideAppBar = (appBarElement, appBarHeight) => {
    let prevScrollPosition = window.pageYOffset;
    window.onscroll = () => {
        const currentScrollPosition = window.pageYOffset;

        let showValue = "0";
        let hideValue = "-" + appBarHeight + "px";

        if (
            prevScrollPosition === currentScrollPosition &&
            prevScrollPosition !== 0
        ) {
            // Page has refreshed, but it was already scrolled down.
            appBarElement.style.top = showValue;
            return;
        }

        if (prevScrollPosition > currentScrollPosition) {
            // Scroll up.
            appBarElement.style.top = showValue;
        } else {
            // Scroll down.
            appBarElement.style.top = hideValue;
        }
        prevScrollPosition = currentScrollPosition;
    };
};

const runAfterMount = () => {
    // Attach a window resize listener and run it once.
    window.addEventListener("resize", () => myWindowResizeListener("#designs-container", "#designs-dropdown-container"));
    window.addEventListener("resize", () => myWindowResizeListener("#code-container", "#code-dropdown-container"));
    myWindowResizeListener("#designs-container", "#designs-dropdown-container");
    myWindowResizeListener("#code-container", "#code-dropdown-container");

    // Enable animation for the dropdown menu.
    attachAnimationForDropdownMenu("#designs-dropdown-container", "#designs-container");
    attachAnimationForDropdownMenu("#code-dropdown-container", "#code-container");
    const appBar = document.querySelector("#app-bar");
    const height = getValueOfCSSVariable(appBar, "--app-bar-height");
    handleAutoHideAppBar(appBar, height);
};

ReactDOM.render(
  <React.StrictMode>
    <App runAfterMount={runAfterMount}/>
  </React.StrictMode>,
  document.getElementById('root')
);

