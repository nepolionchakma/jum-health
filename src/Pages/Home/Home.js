import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <HomeServices></HomeServices>
            <Doctors></Doctors>
            <Achievements></Achievements>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;