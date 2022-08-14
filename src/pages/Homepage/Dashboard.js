import React from 'react';
import AppReview from '../AppReview';
import Banner from './Banner';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Banner></Banner>
            <AppReview></AppReview>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;