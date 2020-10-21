import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <section className="container">
            <Navbar />
            <HeaderMain />
        </section>
    );
};

export default Header;