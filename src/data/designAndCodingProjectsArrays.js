import truckXData from "./truckXData";
import abbeyRoadStudiosData from "./abbeyRoadStudiosData";
import uampData from "./uampData";
import inmusikData from "./inmusikData";
import wholeWorldBandData from "./wholeWorldBandData";
import studentsAppData from "./studentsAppData";
import weatherAppData from "./weatherAppData";
import plannerAppData from "./plannerAppData";
import spreadsheetPrototypeAppData from "./spreadsheetPrototypeAppData";

const designProjectsArray = [
  truckXData,
  abbeyRoadStudiosData,
  uampData,
  inmusikData,
  wholeWorldBandData,
];

const codingProjectsArray = [
  studentsAppData,
  spreadsheetPrototypeAppData,
  plannerAppData,
  weatherAppData,
];

// Pass component name ("AbbeyRoadStudios" and not "Abbey Road Studios");
const getMoreDesignProjectsArrayBy = (componentName) => {
  return designProjectsArray.filter(
    (project) => project.componentName !== componentName
  );
};

// Pass component name ("WeatherApp" and not "Weather App");
const getMoreCodingProjectsArrayBy = (componentName) => {
  return codingProjectsArray.filter(
    (project) => project.componentName !== componentName
  );
};

export { getMoreDesignProjectsArrayBy, getMoreCodingProjectsArrayBy };
