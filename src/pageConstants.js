import React from "react";
import Home from "./components/Home";
import TruckX from "./components/TruckX";
import AbbeyRoadStudios from "./components/AbbeyRoadStudios";
import UAMP from "./components/UAMP";
import Inmusik from "./components/Inmusik";
import WholeWorldBand from "./components/WholeWorldBand";
import WeatherApp from "./components/WeatherApp";
import PlannerApp from "./components/PlannerApp";
import PortfolioApp from "./components/PortfolioApp";
import About from "./components/About";

const URL_PATH_KEY = "path";
const PAGE_NAME_PREFIX = "Maret Idris - ";

const PageNames = {
  HOME: "Home",
  ABOUT: "About",
  TRUCKX: "TruckX",
  UAMP: "UAMP",
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
  WHOLEWORLDBAND: "WholeWorldBand",
  WEATHER_APP: "Weather App",
  PLANNER_APP: "Planner App",
  PORTFOLIO_APP: "Portfolio App",
};

const getComponentForPageName = (name, onNavigationClicked) => {
  switch (name) {
    case PageNames.HOME:
      return <Home onNavigationClicked={onNavigationClicked} />;
    case PageNames.TRUCKX:
      return <TruckX onNavigationClicked={onNavigationClicked} />;
    case PageNames.ABBEY_ROAD_STUDIOS:
      return <AbbeyRoadStudios onNavigationClicked={onNavigationClicked} />;
    case PageNames.UAMP:
      return <UAMP onNavigationClicked={onNavigationClicked} />;
    case PageNames.INMUSIK:
      return <Inmusik onNavigationClicked={onNavigationClicked} />;
    case PageNames.WHOLEWORLDBAND:
      return <WholeWorldBand onNavigationClicked={onNavigationClicked} />;
    case PageNames.WEATHER_APP:
      return <WeatherApp onNavigationClicked={onNavigationClicked} />;
    case PageNames.PLANNER_APP:
      return <PlannerApp onNavigationClicked={onNavigationClicked} />;
    case PageNames.PORTFOLIO_APP:
      return <PortfolioApp onNavigationClicked={onNavigationClicked} />;
    case PageNames.ABOUT:
      return <About onNavigationClicked={onNavigationClicked} />;
  }
};

const getPageName = (pageName) => {
  switch (pageName) {
    case PageNamesWithSpaces.TRUCKX:
      return PageNames.TRUCKX;
    case PageNamesWithSpaces.ABBEY_ROAD_STUDIOS:
      return PageNames.ABBEY_ROAD_STUDIOS;
    case PageNamesWithSpaces.UAMP:
      return PageNames.UAMP;
    case PageNamesWithSpaces.INMUSIK:
      return PageNames.INMUSIK;
    case PageNamesWithSpaces.WHOLEWORLDBAND:
      return PageNames.WHOLEWORLDBAND;
    case PageNamesWithSpaces.WEATHER_APP:
      return PageNames.WEATHER_APP;
    case PageNamesWithSpaces.PLANNER_APP:
      return PageNames.PLANNER_APP;
    case PageNamesWithSpaces.PORTFOLIO_APP:
      return PageNames.PORTFOLIO_APP;
  }
};

export {
  PAGE_NAME_PREFIX,
  URL_PATH_KEY,
  PageNames,
  PageNamesWithSpaces,
  getComponentForPageName,
  getPageName,
};
