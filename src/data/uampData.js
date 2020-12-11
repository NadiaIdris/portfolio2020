import androidLight from "./../vector-images/android-logo-lght-gray.svg";
import homepageUamp from "./../vector-images/uamp-846x846.svg";
import uampMain from "./../vector-images/uamp-main-2792x1366.png";

const uampData = {
  componentName: "UniversalAndroidMusicPlayer",
  title: "Universal Android Music Player",
  description: "Sample music app for Android media developers by Google.",
  icons: [androidLight],
  homepageImage: homepageUamp,

  // If I need a button on the header, then add those props:
  // buttonToApp: true,
  // buttonToAppText: "Try App",
  // buttonToAppLink: "https://en.wikipedia.org/wiki/Truck",

  mainImage: uampMain,
  mainImageAlt: "Universal Android Music Player",

  aboutProjectArray: [
    "2017 Nov - Dec (2 months)",
    [
      [
        "Android",
        "https://play.google.com/store/apps/details?id=com.truckx.app&hl=en_US&gl=US",
      ],
    ],
    "13",
    "Product Designer, contract work while at R3BL",
    "I was the only designer for the project and directly responsible for all of the designs. I redesigned the previous Universal Android Music Player (UAMP) and added new features like thumbs up/down, ability to browse by album, and view album.",
  ],

  aboutTitle: "About Universal Android Music Player (UAMP)",
  aboutArray: [
    "I worked with members of Google’s Android Developer Relations team to design a canonical sample media app, which is intended to serve as a starter project for developers wanting to create media experiences on Android.",
    "Developers can use different components from the sample app and customize them for their specific needs if needed.",
  ],

  featuresTitle: "Features",
  featuresArray: [
    ["Browse music: ", "by genre, by artist, by album, my favorites."],
    [
      "Full page music player ",
      "with features to thumb up the song (adds the song to favorites), thumb down the song, scrubber, pause/play the song, go forward/backward for 10 seconds, swipe from right to left to play the next song, swipe from left to right to play the previous song.",
    ],
    [
      "Bottom music player ",
      "with features to pause/play the song, view song name, artist name, and song image, swipe up on the music player to view the full music player.",
    ],
  ],
};

export default uampData;
