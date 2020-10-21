import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Reviews/Reviews';
import ServiceInfo from '../ServicePartner/ServicePartner';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <main>
            <div className="home">
                <Header />
            </div>
            <div className="container mt-5 mb-5">
                <ServiceInfo />
            </div>
            <div className="container">
                <Services />
            </div>
            <Works />
            <div className="container-fluid">
                <Review />
            </div>
            <Footer />
        </main>

    );
};

export default Home;