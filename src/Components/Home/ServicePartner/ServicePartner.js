import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const ServiceInfo = () => {
    return (
        <section className="d-flex justify-content-around row">
            <img className="services" src={slack} alt="" />
            <img className="services" src={google} alt="" />
            <img className="services" src={uber} alt="" />
            <img className="services" src={netflix} alt="" />
            <img className="services" src={airbnb} alt="" />
        </section>
    );
};

export default ServiceInfo;