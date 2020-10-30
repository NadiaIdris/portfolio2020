import React from 'react';

const dummyText = `Spicy jalapeno bacon ipsum dolor `.repeat(800);

const Home = () => {
    return (
        <React.Fragment>
            <p>{dummyText}</p>
            {/*<Banner />*/}
            {/*<DesignProjects />*/}
            {/*<CodingProjects />*/}
            {/*<Recommendations />*/}
            {/*<Footer />*/}
        </React.Fragment>
    );
};

export default Home;