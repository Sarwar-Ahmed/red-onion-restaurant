import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <FoodMenu />
            <Services />
        </div>
    );
};

export default Home;