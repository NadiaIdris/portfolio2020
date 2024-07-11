import reactLogo from "./../vector-images/react-logo.svg";
import tsLogo from "./../vector-images/ts-logo.svg";
import nodeLogo from "./../vector-images/node-logo.svg";

import { PageNames, PageNamesWithSpaces } from "../names";

import homepageStudentsApp from "./../vector-images/students-app-882x708.png";
import studentsMain from "./../vector-images/students-main-2746x1342.png";
import weatherAppFeaturesGif from "./../vector-images/weather-app-features.gif";
import weatherAppLocationsGif from "./../vector-images/weather-app-locations.gif";
import studentsAppMoreCodingProjects from "./../vector-images/students-app-more-projects-1376x708.png";

const studentsAppData = {
  componentName: PageNames.STUDENTS_APP,
  title: PageNamesWithSpaces.STUDENTS_APP,
  description:
    "Full stack app to add, delete, and update students. Includes account creation, custom REST APIs, Node.js server, and PostgreSQL.",
  icons: [reactLogo, tsLogo, nodeLogo],
  iconsDarkTheme: [reactLogo, tsLogo, nodeLogo],

  homepageImage: homepageStudentsApp,
  homepageImgAlt: PageNamesWithSpaces.STUDENTS_APP,

  buttonToApp: true,
  buttonToAppText: "Try " + PageNamesWithSpaces.STUDENTS_APP,
  buttonToAppLink: "https://nadiaidris.github.io/weather-app/",

  mainImage: studentsMain,
  mainImageAlt: PageNamesWithSpaces.STUDENTS_APP,

  aboutProjectArray: [
    "2024 Apr - Jul (3 months)",
    [["Web", "https://mylisty.com/"]],
    [
      ["Clone the frontend repo", "https://github.com/NadiaIdris/ts-student-list-app"],
      ["Clone the backend repo", "https://github.com/NadiaIdris/nodejs-postgresql-api"],
    ],
    "Full stack software engineer and product designer",
    "Students App is my project and I designed and built everything from scratch",
  ],

  endResultTitle: "End result",
  // ["Paragraph", Gif, "Gif alt text", "gif-id-for-modal"]
  endResultParagraphGifArray: [
    [
      "Gif showcasing getting the weather for current location, changing Fahrenheit to Celcius, and viewing hourly weather forecast information in detail.",
      weatherAppFeaturesGif,
      "Weather app features gif",
      "weather-gif-one-modal",
    ],
    [
      "The colors in the weather app change based on the temperature. The colder the color, the darker the blue color. The warmer the color, the darker the orange.",
      weatherAppLocationsGif,
      "Weather app locations gif",
      "weather-gif-two-modal",
    ],
  ],

  featuresTitle: "Features",
  featuresArray: [
    [
      "Temperatures in Celsius and Fahrenheit: ",
      "Choose which one is the prominent weather by clicking on the temperature icon.",
    ],
    [
      "Color to communicate the temperature: ",
      "Background colors of the app change in order to communicate how cold/warm it is. The darker blue the color, the colder the temperature. The darker orange the color, the hotter the temperature.",
    ],
    [
      "Hourly ",
      "forecast for the first 48 hours with details like wind, humidity, UV index, dew point, and precipitation.",
    ],
    ["Daily ", "weather overview for 7 days."],
    ["Search", "for any location in the world."],
    [
      "Current location button",
      "Get weather for your current location in one click.",
    ],
  ],

  // Separate image for <MoreCodingProjects /> component.
  moreCodingProjectsImage: studentsAppMoreCodingProjects,
};

export default studentsAppData;
