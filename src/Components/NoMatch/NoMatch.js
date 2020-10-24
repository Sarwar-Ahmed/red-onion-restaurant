import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NoMatch = () => {
    return (
        <div>
            <Header />
            <h1 style={{textAlign: "center", height: "100vh"}}>Page Not Found 404</h1>
            <Footer />
        </div>
    );
};

export default NoMatch;