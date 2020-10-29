import React from 'react';
import logo from './../vector-images/logo.svg';
import github from './../vector-images/github-logo.svg';
import ios from './../vector-images/ios-logo.svg';
import android from './../vector-images/android-logo.svg';
import './../styles/NavBar.css';
import {PageNames} from "./../pageConstants";


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
                                <a>
                                    <p>TruckX</p>
                                    <div className="app-logos-container">
                                        <img src={ios} alt="iOs logo"/>
                                        <img src={android} alt="Android logo"/>
                                    </div>
                                </a>
                                <a>
                                    <p>Abbey Road Studios</p>
                                    <div className="app-logos-container">
                                        <img src={ios} alt="iOs logo"/>
                                    </div>
                                </a>
                            <a>
                                <p>Universal Android Music Player</p>
                                <div className="app-logos-container">
                                    <img src={android} alt="Android logo"/>
                                </div>
                            </a>
                            <a>
                                <p>Inmusik</p>
                                <div className="app-logos-container">
                                    <img src={ios} alt="iOs logo"/>
                                    <img src={android} alt="Android logo"/>
                                </div>
                            </a>
                            <a>
                                <p>WholeWorldBand</p>
                                <div className="app-logos-container">
                                    <img src={ios} alt="iOs logo"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    <a>Code</a>
    <a>About</a>
</nav>
    <a><img className="github-logo-on-navbar" src={github}
            alt="Github logo"/></a>
</div>
);
};

export default NavBar;