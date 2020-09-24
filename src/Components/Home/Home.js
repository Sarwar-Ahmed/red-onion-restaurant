import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Header from '../Header/Header';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <FoodMenu />
        </div>
    );
};

export default Home;