import homepageWeatherApp from "./../vector-images/weather-app-882x708.png";

import jsLight from "./../vector-images/js-logo.svg";
import htmlLogo from "./../vector-images/html-logo.svg";
import cssLogo from "./../vector-images/css-logo.svg";

import weatherMain from "./../vector-images/weather-main-2746x1342.png";
import weatherAppFeaturesGif from "./../vector-images/weather-app-features.gif";
import weatherAppLocationsGif from "./../vector-images/weather-app-locations.gif";
import weatherAppMoreCodingProjects from "./../vector-images/weather-app-more-projects-1376x708.png";
import { PageNames, PageNamesWithSpaces } from "../names";

const weatherAppData = {
  componentName: PageNames.WEATHER_APP,
  title: PageNamesWithSpaces.WEATHER_APP,
  description:
    "Weather App that shows both Celsius and Fahrenheit and communicates temperature through color.",
  icons: [jsLight, htmlLogo, cssLogo],
  iconsDarkTheme: [jsLight, htmlLogo, cssLogo],

  homepageImage: homepageWeatherApp,
  homepageImgAlt: "Weather App",

  buttonToApp: false,
  // buttonToAppText: "Try Weather App",
  buttonToAppLink: "https://nadiaidris.github.io/weather-app/",

  mainImage: weatherMain,
  mainImageAlt: "Weather app",

  aboutProjectArray: [
    "2019 Jul - Nov (4 months)",
    [["Web", "https://nadiaidris.github.io/weather-app/"]],
    [["Clone the repo", "https://github.com/NadiaIdris/weather-app"]],
    "Product designer, front-end JavaScript developer",
    "Weather app is my project and I created everything from scratch",
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
  moreCodingProjectsImage: weatherAppMoreCodingProjects,
};
export default weatherAppData;
