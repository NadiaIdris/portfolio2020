import React from 'react';
import Banner from "./Banner";
import DesignProjects from "./DesignProjects";
import {dummyText} from "../utils";

const Home = () => {
    return (
        <React.Fragment>
            <Banner
                strings={[
                    "am a product designer",
                    "express ideas through code",
                    "am startup tested"
                ]}
            />
            <DesignProjects />
            {/*<CodingProjects />*/}
            {/*<Recommendations />*/}
            {/*<Footer />*/}
            {dummyText}
        </React.Fragment>
    );
};

export default Home;