import webLight from "./../vector-images/web-logo-lght-gray.svg";
import iosLight from "./../vector-images/ios-logo-lght-gray.svg";
import homepageInmusik from "./../vector-images/inmusik-846x846.svg";
import inmusikMain from "../vector-images/inmusik-main-2792x1366.png";
import inmusikUserStories from "./../vector-images/inmusik-user-stories.png";

const inmusikData = {
  componentName: "Inmusik",
  title: "Inmusik",
  description: "Social network for emerging musicians and fans.",
  icons: [webLight, iosLight],
  homepageImage: homepageInmusik,

  mainImage: inmusikMain,
  mainImageAlt: "Inmusik",

  aboutProjectArray: [
    "2012 Jan - 2016 Jun (4 years, 6 months)",
    [["Web"], ["iOS"]],
    "over 1200 screens in 4 years and 6 months",
    "Product Design Director and Co-Founder",
    "My direct contribution as Product Design Director: My job was to design the product. I designed all the screens for the web and iOS applications from 2012-2016. Came up with features for music listeners to discover new music (Quickplay), how to make playlists using Quickplay, and a way to remind listeners who are the emerging musicians they are following. My direct contribution as a Co-Founder:  Created and managed marketing efforts.",
  ],

  aboutTitle: "About Inmusik",
  aboutArray: [
    "Inmusik is a social music platform for emerging musicians to connect, engage, and monetize their current and future fan engagement.",
    "Emeraz started out as an online collaboration platform in 2010. From 2012-2015 the platform became a social network for musicians and their fans allowing musicians to share, sell their music, gain followers, and more. In 2015, the founder and I rebranded Emeraz to Inmusik. Inmusik shifted the focus of the platform on music listener experience and getting emerging music heard. ",
  ],

  featuresTitle: "Features",
  featuresArray: [
    ["Discover ", "music through quickplay."],
    ["Organize ", "collected music to playlists using quickplay"],
    [
      "Other features: ",
      "follow musicians, listen to music, browse journal entries made by musicians, view musician photos, videos, events, etc.",
    ],
  ],

  userStoriesTitle: "User stories",
  userStoriesArray: [
    "Inmusik has three kinds of users. First is emerging music listeners, second is emerging musicians, third is music industry businesses (recording studios, mixing/mastering engineers, A&Rs/talent scouts, etc).",
  ],
  userStoriesImage: inmusikUserStories,
  userStoriesAlt: "Inmusik user stories",
  userStoriesId: "inmusik-user-stories-modal",
};

export default inmusikData;
