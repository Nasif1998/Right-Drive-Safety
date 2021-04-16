import React from 'react';
import Contact from '../Contact/Contact';

import Description from '../Description/Description';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Description></Description>
            <Services></Services>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;