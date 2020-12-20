import React from "react";
import Banner from "./Banner";
import DesignProjects from "./DesignProjects";
import CodingProjects from "./CodingProjects";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import {
  arrayOfCodingProjects,
  arrayOfDesignProjects,
  homepageCodingProjectsTitle,
  homepageDesignProjectsTitle,
} from "../data/projectsData";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Banner
          strings={[
            "am a product designer",
            "express ideas through code",
            "am startup tested",
          ]}
        />
        <DesignProjects
          title={homepageDesignProjectsTitle}
          designProjectsArray={arrayOfDesignProjects}
          onNavigationClicked={this.props.onNavigationClicked}
        />
        <CodingProjects
          title={homepageCodingProjectsTitle}
          codingProjectsArray={arrayOfCodingProjects}
        />
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
