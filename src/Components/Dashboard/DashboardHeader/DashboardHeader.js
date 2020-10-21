import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const DashboardHeader = (props) => {
    const { userInfo } = useContext(UserContext)
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

    return (
        <div>
            <div style={{ height: "110px" }} className="container font-weight-bold d-flex justify-content-between align-items-center">
                <h2 className="pl-5">{props.title}</h2>
                <h4 style={{ borderRight: "2px solid orange" }} className="pr-5">{(loggedInUser.name || loggedUser.name)}</h4>
            </div>
        </div>
    );
};

export default DashboardHeader;