import React from 'react';
import './CustomerSingleService.css'

const CustomerSingleService = ({ info }) => {
    return (
        <div className='col-md-5 p-4 m-3 service-card bg-light'>
            <div className="d-flex justify-content-between">
                <div>
                    <img className="rounded-circle" height="74px" width="74px" src={`data:image/png;base64,${info.image.img}`} alt="" />
                </div>
                <button style={{ backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444", height: "40px", width: "108px" }} className="btn">Done</button>
            </div>
            <h5 className="pt-3">{info.service}</h5>
            <small>{info.description.substring(0, 150) + '...'}</small>
        </div>
    );
};

export default CustomerSingleService;