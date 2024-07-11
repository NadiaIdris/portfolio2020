import React from "react";
import Home from "./components/Home";
import TruckX from "./components/TruckX";
import AbbeyRoadStudios from "./components/AbbeyRoadStudios";
import UAMP from "./components/UAMP";
import Inmusik from "./components/Inmusik";
import WholeWorldBand from "./components/WholeWorldBand";
import StudentsApp from "./components/StudentsApp";
import WeatherApp from "./components/WeatherApp";
import PlannerApp from "./components/PlannerApp";
import About from "./components/About";
import { PageNames, PageNamesWithSpaces } from "./names";

const URL_PAGE_KEY = "page";
const PAGE_NAME_PREFIX = "Nadia Idris - ";

/**
 * @param myDarkThemeValue this is optional
 */
const getComponentForPageName = (name, myDarkThemeValue) => {
  switch (name) {
    case PageNames.HOME:
      return <Home myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.TRUCKX:
      return <TruckX myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.ABBEY_ROAD_STUDIOS:
      return <AbbeyRoadStudios myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.UAMP:
      return <UAMP myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.INMUSIK:
      return <Inmusik myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.WHOLEWORLDBAND:
      return <WholeWorldBand myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.STUDENTS_APP:
      return <StudentsApp myDarkThemeValue={myDarkThemeValue}/>
    case PageNames.WEATHER_APP:
      return <WeatherApp myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.PLANNER_APP:
      return <PlannerApp myDarkThemeValue={myDarkThemeValue} />;
    case PageNames.ABOUT:
      return <About myDarkThemeValue={myDarkThemeValue} />;
    default:
      return;
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
    case PageNamesWithSpaces.STUDENTS_APP:
      return PageNames.STUDENTS_APP;
    case PageNamesWithSpaces.WEATHER_APP:
      return PageNames.WEATHER_APP;
    case PageNamesWithSpaces.PLANNER_APP:
      return PageNames.PLANNER_APP;
    default:
      return;
  }
};

export { PAGE_NAME_PREFIX, URL_PAGE_KEY, getComponentForPageName, getPageName };
