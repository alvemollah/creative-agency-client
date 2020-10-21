import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <NavLink className="navbar-brand" to='/home'>
                    <img height="50px" src={logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="nav-style" className="nav-link navLink mr-3" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-style" className="nav-link navLink mr-3" to='/ourPortfolio'>Our Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-style" className="nav-link navLink mr-3" to='/ourTeam'>Our Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-style" className="nav-link navLink mr-3" to='/contactUs'>Contact us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-style" className="nav-link navLink mr-3" to='/customerDashboard'>Dashboard</NavLink>
                        </li>
                        <Link to="/login">
                            <button className="btn brand-btn">login</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;