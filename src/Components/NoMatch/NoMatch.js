import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const NoMatch = () => {
    return (
        <div style={{ height: "100vh" }} className="home">
            <div className="container mb-5">
                <Navbar />
            </div>
            <div className="text-danger text-center mt-5">
                <h1>404! ERROR</h1>
                <h3>PAGE NOT FOUND!</h3>
            </div>
        </div>
    );
};

export default NoMatch;