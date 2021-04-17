import React from 'react';
import Contact from '../Contact/Contact';

import Description from '../Description/Description';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Description></Description>
            <Services></Services>
            <Reviews></Reviews>
            <Packages></Packages>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;