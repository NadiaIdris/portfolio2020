import androidLight from './../vector-images/android-logo-lght-gray.svg';
import iOSLight from './../vector-images/ios-logo-lght-gray.svg';
import homepageTruckX from './../vector-images/truckx-846x846.svg'

const truckXData = {
    title: "TruckX",
    description: "Electronic logbook and trip planning app for truck drivers.",
    icons: [iOSLight, androidLight],

    homepageImage: homepageTruckX,
    homepageImgAlt: "TruckX image",
    mainImage: "",

    aboutProjectTitle: "About project",
    aboutProjectParagraphOne:
        "- Project duration: 2016 Dec - 2017 Feb (3 months)\n" +
        "- Platform: Web \n" +
        "- Final screens designed: 22",
    aboutProjectParagraphTwo:
        "- My role: Product Designer, while at R3BL\n" +
        "- My direct contributions: I was the only designer in this project, individually \n" +
        "  responsible for all of the designs",

    aboutTruckXTitle: "About TruckX",
    aboutTruckXParagraph: "For this project, I worked directly with the CEO of a startup, to design a digital replacement for paper-based truck driver log books. My goal was to give the early stage startup the main user flows, along with the main body of design so they could start building a prototype.",

    featuresList: [
        "Trips → Add a trip, add a stop, manage a trip, view freight info, etc.",
        "Timelogs → View and set current timelog state, edit timelog form, and sign off the timelog at the end of each day of the trip.",
    ],

    userStoriesTitle: "User stories",
    userStoriesParagraphOne: "Today, truck drivers use logbooks to record their service hours and data about their truck. Every time they start a new delivery they have to fill out basic information about their truck and relevant dates using this log book.",
    userStoriesParagraphTwo: "The users of this app are truck drivers who would want to use an app instead of their paper log books. They have smartphones and are used to using apps. They want to make their driving experience simpler and remove the risk of damaging or losing their paper log book. They also are aware of OBD-II devices that can be used to gather telemetry data from their trucks (distance traveled, fuel consumption, etc) that can be used to provide data to this app.",



};

export default truckXData;