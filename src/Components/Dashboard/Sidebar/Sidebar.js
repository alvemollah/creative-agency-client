import React, { useEffect, useState } from 'react';
import { Link, NavLink, useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faServer, faCommentAlt, faSignOutAlt, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logos/logo.png';
import './Sidebar.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/Login/firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const history = useHistory()
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;

    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return (false);
        }
    };
    const info = sessionStorage.getItem('token')
    const loggedUser = parseJwt(info)

    const adminEmail = (loggedInUser.email || loggedUser.email);

    useEffect(() => {
        fetch('https://infinite-mesa-16282.herokuapp.com/isAdmin?email=' + adminEmail)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const admin = { ...loggedInUser };
                    admin.setUser = true;
                    setLoggedInUser(admin)
                }
                else {
                    const admin = { ...loggedInUser };
                    admin.setUser = false;
                    setLoggedInUser(admin)
                }
            })
    }, [])

    const handleLoggedOut = () => {
        alert('not working, need to clear token from application console')
    }


    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled font-weight-bold">
                <li className="mb-5">
                    <Link to='/home'>
                        <img height="50px" src={logo} alt="" />
                    </Link>
                </li>
                {
                    loggedInUser.setUser ?
                        <div>
                            <li className="mb-3">
                                <NavLink activeClassName="nav-style" to='/adminPenal' className="text-dark">
                                    <FontAwesomeIcon icon={faServer} /><span>Service list</span>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink activeClassName="nav-style" to="/addService" className="text-dark">
                                    <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink activeClassName="nav-style" to="/addAdmin" className="text-dark">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </NavLink>
                            </li>
                        </div>
                        :
                        <div>
                            <li className="mb-3">
                                <NavLink activeClassName="nav-style" to='/customerDashboard' className="text-dark">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink activeClassName="nav-style" to="/serviceList" className="text-dark">
                                    <FontAwesomeIcon icon={faServer} /> <span>Service List</span>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink to="/review" activeClassName="nav-style" className="text-dark">
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                                </NavLink>
                            </li>
                        </div>
                }
            </ul>
            <div>
                <button onClick={handleLoggedOut} className="btn brand-btn">
                    <FontAwesomeIcon onClick={handleLoggedOut} icon={faSignOutAlt} /> log out
                </button>
            </div>
        </div >
    );
};

export default Sidebar;
