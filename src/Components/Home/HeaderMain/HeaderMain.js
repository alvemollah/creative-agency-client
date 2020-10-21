import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{ paddingBottom: '100px' }} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1 col-sm-11">
                <h1 className="font-weight-bold" style={{ color: "#111430" }}>Let’s Grow Your <br />
                Brand To The <br />
                Next Level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn brand-btn mt-3">Hire me</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="img-fluid" src={frame} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;