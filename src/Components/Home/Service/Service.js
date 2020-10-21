import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    return (
        <div className="col-md-4">
            <Link style={{ textDecoration: "none" }} to={`/order/${service.service}`}>
                <div className="m-2 p-5 custom-card text-center ">
                    <img height="74px" width="74px" src={`data:image/png;base64,${service.image.img}`} />
                    <h3 className="font-weight-bold" style={{ color: "#111430" }}>{service.service}</h3>
                    <p className="text-muted">
                        {service.description.substring(0, 80) + '...'}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Service;