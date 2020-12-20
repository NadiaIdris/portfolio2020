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

const URL_PAGE_KEY = "page";
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

const getComponentForPageName = (name) => {
  switch (name) {
    case PageNames.HOME:
      return <Home />;
    case PageNames.TRUCKX:
      return <TruckX />;
    case PageNames.ABBEY_ROAD_STUDIOS:
      return <AbbeyRoadStudios />;
    case PageNames.UAMP:
      return <UAMP />;
    case PageNames.INMUSIK:
      return <Inmusik />;
    case PageNames.WHOLEWORLDBAND:
      return <WholeWorldBand />;
    case PageNames.WEATHER_APP:
      return <WeatherApp />;
    case PageNames.PLANNER_APP:
      return <PlannerApp />;
    case PageNames.PORTFOLIO_APP:
      return <PortfolioApp />;
    case PageNames.ABOUT:
      return <About />;
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
  URL_PAGE_KEY,
  PageNames,
  PageNamesWithSpaces,
  getComponentForPageName,
  getPageName,
};
