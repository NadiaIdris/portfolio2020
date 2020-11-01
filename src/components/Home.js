import React from 'react';
import Banner from "./Banner";

const dummyText = `Spicy jalapeno bacon ipsum dolor `.repeat(700);

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
            {dummyText}
            {/*<DesignProjects />*/}
            {/*<CodingProjects />*/}
            {/*<Recommendations />*/}
            {/*<Footer />*/}
        </React.Fragment>
    );
};

export default Home;