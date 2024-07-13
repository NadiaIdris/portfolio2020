import reactLogo from "./../vector-images/react-logo.svg";
import tsLogo from "./../vector-images/ts-logo.svg";

import { PageNames, PageNamesWithSpaces } from "../names";

import homepageSpreadsheetPrototypeApp from "./../vector-images/spreadsheet-app-882x708.png";
import spreadsheetPrototypeMain from "./../vector-images/spreadsheet-app-main-2746x1342.png"; 
import spreadsheetPrototypeAppMoreCodingProjects from "./../vector-images/spreadsheet-app-more-projects-1376x708.png";

const spreadsheetPrototypeAppData = {
  componentName: PageNames.SPREADSHEET_PROTOTYPE_APP,
  title: PageNamesWithSpaces.SPREADSHEET_PROTOTYPE_APP,
  description:
    "Responsive Spreadsheet Prototype App that allows users to edit cell data, drag and drop cells, and add and delete new rows and columns.",
  icons: [reactLogo, tsLogo],
  iconsDarkTheme: [reactLogo, tsLogo],

  homepageImage: homepageSpreadsheetPrototypeApp,
  homepageImgAlt: PageNamesWithSpaces.SPREADSHEET_PROTOTYPE_APP,

  buttonToApp: true,
  buttonToAppText: "Try " + PageNamesWithSpaces.SPREADSHEET_PROTOTYPE_APP,
  buttonToAppLink: "https://nadiaidris.github.io/ts-spreadsheet/",

  mainImage: spreadsheetPrototypeMain,
  mainImageAlt: PageNamesWithSpaces.SPREADSHEET_PROTOTYPE_APP,

  aboutProjectArray: [
    "2023 May - Nov (6 months)",
    [["Web", "https://nadiaidris.github.io/ts-spreadsheet/"]],
    [
      [
        "Clone the repo",
        "https://github.com/NadiaIdris/ts-spreadsheet",
      ],
    ],
    "Software engineer and product designer",
    "Spreadsheet Prototype App is my project and I designed and built everything from scratch",
  ],

  featuresTitle: "Features",
  featuresArray: [
    [
      "",
      "Edit cell data",
    ],
    [
      "",
      "Copy, paste, cut cell data using mouse ",
    ],
    [
      "",
      "Copy, paste, cut cell data using keyboard shortcuts",
    ],
    [
      "",
      "Add one or multiple rows and columns",
    ],
    [
      "",
      "Drag and drop cells",
    ],
    [
      "",
      "Rename spreadsheet",
    ],
    [
      "",
      "Responsive design",
    ],
  ],

  // Separate image for <MoreCodingProjects /> component.
  moreCodingProjectsImage: spreadsheetPrototypeAppMoreCodingProjects,
};

export default spreadsheetPrototypeAppData;
