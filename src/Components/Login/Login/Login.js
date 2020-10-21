import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../../images/logos/googlelogo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';




const Login = () => {
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email: email, photo: photoURL };
                setLoggedInUser(signedInUser);
                storeAuthToken();
                fetch('https://infinite-mesa-16282.herokuapp.com/isAdmin?email=' + email)
                    .then(res => res.json())
                    .then(data => {
                        if (data.length > 0) {
                            setLoggedInUser(signedInUser);
                            storeAuthToken();
                            history.replace('/adminPenal')
                        }
                        else {
                            setLoggedInUser(signedInUser);
                            storeAuthToken();
                            history.replace('/customerDashboard')
                        }
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                alert('something went wrong')
            });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);

            })
            .catch(function (error) {

            });
    }


    return (
        <div>
            <div className='pb-5'>
                <div className="text-center pt-4">
                    <Link to='/home'>
                        <img width="200px" src={logo} alt="" />
                    </Link>
                </div>
                <div style={{ height: "500px", border: '1px solid gray', borderRadius: "10px" }}
                    className="bg-light container align-items-center d-flex w-50 mt-5"
                >
                    <div className="text-center w-100">
                        <h2 className="font-weight-bold mb-3">Login With</h2>
                        <button onClick={handleGoogleSignIn} style={{ background: "#ebecf1" }} className="btn rounded-pill w-100">
                            <img className="mr-2" height="20px" width="20px" src={googleImg} alt="" />
                            Login with Google
                        </button>
                        <p className="mt-4">Don't have an account?
                            <button className="btn" onClick={handleGoogleSignIn}>
                                <Link to="/login"> Create Account</Link>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;