import reactLogo from "./../vector-images/react-logo.svg";
import tsLogo from "./../vector-images/ts-logo.svg";
import nodeLogo from "./../vector-images/node-logo.svg";

import { PageNames, PageNamesWithSpaces } from "../names";

import homepageStudentsApp from "./../vector-images/students-app-882x708.png";
import studentsMain from "./../vector-images/students-main-2746x1342.png";
import studentsAppMoreCodingProjects from "./../vector-images/students-app-more-projects-1376x708.png";

const studentsAppData = {
  componentName: PageNames.STUDENTS_APP,
  title: PageNamesWithSpaces.STUDENTS_APP,
  description:
    "Full stack app to add, delete, and update students. Includes account creation, custom REST APIs, Node.js server, PostgreSQL, etc",
  icons: [reactLogo, tsLogo, nodeLogo],
  iconsDarkTheme: [reactLogo, tsLogo, nodeLogo],

  homepageImage: homepageStudentsApp,
  homepageImgAlt: PageNamesWithSpaces.STUDENTS_APP,

  buttonToApp: true,
  buttonToAppText: "Try " + PageNamesWithSpaces.STUDENTS_APP,
  buttonToAppLink: "https://mylisty.com/",

  mainImage: studentsMain,
  mainImageAlt: PageNamesWithSpaces.STUDENTS_APP,

  aboutProjectArray: [
    "2024 Apr - Jul (3 months)",
    [["Web", "https://mylisty.com/"]],
    [
      [
        "Clone the frontend repo",
        "https://github.com/NadiaIdris/ts-student-list-app",
      ],
      [
        "Clone the backend repo",
        "https://github.com/NadiaIdris/nodejs-postgresql-api",
      ],
    ],
    "Full stack software engineer and product designer",
    "Students App is my project and I designed and built everything from scratch",
  ],

  featuresTitle: "Features",
  featuresArray: [
    ["Registered users features: ", "Users can register, login, logout and delete their account"],
    [
      "Students features: ",
      "Users can view all the students in the database, add, delete, and update student information",
    ],
  ],

  // Separate image for <MoreCodingProjects /> component.
  moreCodingProjectsImage: studentsAppMoreCodingProjects,
};

export default studentsAppData;
