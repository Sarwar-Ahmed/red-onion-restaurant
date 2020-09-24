import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <FoodMenu />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;