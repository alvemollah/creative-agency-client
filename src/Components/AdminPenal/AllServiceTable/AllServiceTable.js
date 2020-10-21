import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { css } from "@emotion/core";
import { DotLoader, FadeLoader, ScaleLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const AllServiceTable = () => {
    const [allService, setAllService] = useState([])

    useEffect(() => {
        fetch('https://infinite-mesa-16282.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])

    return (
        <section className="pl-5 pt-5 pr-5" style={{ backgroundColor: "#E5E5E5", paddingBottom: "150px" }}>
            <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th colspan="5">Name</th>
                            <th colspan="3">Email Id</th>
                            <th colspan="1">Service</th>
                            <th colspan="3">Project Details</th>
                            <th colspan="1">Action</th>
                        </tr>
                    </thead>
                    {
                        allService.length === 0 &&
                        <ScaleLoader
                            className="d-flex justify-content-center"
                            css={override}
                            size={50}
                            color={"#0f3057"}
                        />
                    }
                    {
                        allService.map(user =>
                            <tbody key={Math.random()}>
                                <tr>
                                    <th colSpan="5">{user.name}</th>
                                    <td colSpan="3">{user.email}</td>
                                    <td colSpan="1">{user.service}</td>
                                    <td colSpan="3">{user.description.substring(0, 30) + '...'}</td>
                                    <td colSpan="1">

                                        <div class="dropdown">
                                            <Link class="btn btn-success dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Done
                                    </Link>

                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link class="dropdown-item" href="#">pending</Link>
                                                <Link class="dropdown-item" href="#">Done</Link>
                                                <Link class="dropdown-item" href="#">cancel</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                </table>
            </div>
        </section>
    );
};

export default AllServiceTable;



