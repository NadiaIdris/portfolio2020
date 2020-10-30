import React from 'react';
import logo from './../vector-images/logo.svg';
import github from './../vector-images/github-logo.svg';
import ios from './../vector-images/ios-logo.svg';
import android from './../vector-images/android-logo.svg';
import web from './../vector-images/web-logo.svg'
import iosLight from './../vector-images/ios-logo-lght-gray.svg';
import androidLight from './../vector-images/android-logo-lght-gray.svg';
import webLight from './../vector-images/web-logo-lght-gray.svg';
import './../styles/NavBar.css';
import {PageNames, PageNamesWithSpaces} from "./../pageConstants";

const NavBar = (props) => {
    return (
        <div id="app-bar">
            <a><img className="logo" src={logo} alt="Logo"/></a>
            <nav>
                <a>Home</a>
                <div id="designs-container">
                    Designs
                    <div id="designs-dropdown-container">
                        <div className="center-the-dropdown">
                            <div className="triangle"/>
                            <div className="dropdown">
                                <a className="dropdown-selected">
                                    <p>{PageNamesWithSpaces.TRUCKX}</p>
                                    <div className="app-logos-container">
                                        <img src={ios} alt="iOS logo"/>
                                        <img src={android} alt="Android logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>{PageNamesWithSpaces.ABBEY_ROAD_STUDIOS}</p>
                                    <div className="app-logos-container">
                                        <img src={webLight} alt="Web logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>{PageNamesWithSpaces.UAMP}</p>
                                    <div className="app-logos-container">
                                        <img src={androidLight}
                                             alt="Android logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>{PageNamesWithSpaces.INMUSIK}</p>
                                    <div className="app-logos-container">
                                        <img src={webLight} alt="Web logo"/>
                                        <img src={iosLight} alt="iOS logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>{PageNamesWithSpaces.WHOLEWORLDBAND}</p>
                                    <div className="app-logos-container">
                                        <img src={webLight} alt="Web logo"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="code-container">
                    Code
                    <div id="code-dropdown-container">
                        <div className="center-the-dropdown">
                            <div className="triangle"/>
                            <div className="dropdown code-dropdown-width">
                                <a className="dropdown-selected">
                                    <p>{PageNamesWithSpaces.WEATHER_APP}</p>
                                    <div className="app-logos-container">
                                        <img src={web} alt="Web logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>{PageNamesWithSpaces.PLANNER_APP}</p>
                                    <div className="app-logos-container">
                                        <img src={webLight} alt="Web logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>{PageNamesWithSpaces.PORTFOLIO_APP}</p>
                                    <div className="app-logos-container">
                                        <img src={webLight} alt="Web logo"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a>About</a>
            </nav>
            <a><img className="github-logo-on-navbar" src={github}
                    alt="Github logo"/></a>
        </div>
    );
};

export default NavBar;