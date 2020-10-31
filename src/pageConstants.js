import React from 'react';
import Home from './components/Home';
import TruckX from './components/TruckX';
import AbbeyRoadStudios from './components/AbbeyRoadStudios';
import UniversalAndroidMusicPlayer
    from './components/UniversalAndroidMusicPlayer';
import Inmusik from './components/Inmusik';
import WholeWorldBand from './components/WholeWorldBand';
import WeatherApp from './components/WeatherApp';
import PlannerApp from './components/PlannerApp';
import PortfolioApp from './components/PortfolioApp';
import About from './components/About';
import ios from "./vector-images/ios-logo.svg";
import android from "./vector-images/android-logo.svg";
import iosLight from './vector-images/ios-logo-lght-gray.svg';
import androidLight from './vector-images/android-logo-lght-gray.svg';
import webLight from './vector-images/web-logo-lght-gray.svg';

const PageNames = {
    HOME: "Home",
    ABOUT: "About",
    TRUCKX: "TruckX",
    UAMP: "UniversalAndroidMusicPlayer",
    ABBEY_ROAD_STUDIOS: "AbbeyRoadStudios",
    INMUSIK: "Inmusik",
    WHOLEWORLDBAND: "WholeWorldBand",
    WEATHER_APP: "WeatherApp",
    PLANNER_APP: "PlannerApp",
    PORTFOLIO_APP: "PortfolioApp",
};

const PageNamesWithSpaces = {
    HOME: "Home",
    ABOUT: "About",
    TRUCKX: "TruckX",
    UAMP: "Universal Android Music Player",
    ABBEY_ROAD_STUDIOS: "Abbey Road Studios",
    INMUSIK: "Inmusik",
    WHOLEWORLDBAND: "Whole World Band",
    WEATHER_APP: "Weather App",
    PLANNER_APP: "Planner App",
    PORTFOLIO_APP: "Portfolio App",
};

const getComponentForPageName = (name) => {
    switch (name) {
        case PageNames.HOME:
            return <Home/>;
        case PageNames.TRUCKX:
            return <TruckX/>;
        case PageNames.ABBEY_ROAD_STUDIOS:
            return <AbbeyRoadStudios/>;
        case PageNames.UAMP:
            return <UniversalAndroidMusicPlayer/>;
        case PageNames.INMUSIK:
            return <Inmusik/>;
        case PageNames.WHOLEWORLDBAND:
            return <WholeWorldBand/>;
        case PageNames.WEATHER_APP:
            return <WeatherApp/>;
        case PageNames.PLANNER_APP:
            return <PlannerApp/>;
        case PageNames.PORTFOLIO_APP:
            return <PortfolioApp/>;
        case PageNames.ABOUT:
            return <About/>;
    }
};

export {
    PageNames,
    PageNamesWithSpaces,
    getComponentForPageName,
};
