import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute'
import NoMatch from './Components/NoMatch/NoMatch';
import CustomerServices from './Components/Dashboard/CustomerServices/CustomerServices';
import PlaceOrder from './Components/Dashboard/PlaceOrder/PlaceOrder'
import UserReview from './Components/Dashboard/UserReview/UserReview';
import ListedService from './Components/AdminPenal/ListedService/ListedService';
import AddService from './Components/AdminPenal/AddService/AddService';
import AddAdmin from './Components/AdminPenal/AddAdmin/AddAdmin';


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    issueData: '',
    category: ''
  });

  return (
    <UserContext.Provider value={{ userInfo: [loggedInUser, setLoggedInUser] }}>
      <Router>
        <Switch>

          <Route path='/home'>
            <Home />
          </Route>

          <PrivateRoute path='/customerDashboard'>
            <PlaceOrder />
          </PrivateRoute>

          <PrivateRoute path='/order/:service'>
            <PlaceOrder />
          </PrivateRoute>

          <PrivateRoute path='/serviceList'>
            <CustomerServices />
          </PrivateRoute>

          <PrivateRoute path='/review'>
            <UserReview />
          </PrivateRoute>

          <PrivateRoute path='/adminPenal'>
            <ListedService />
          </PrivateRoute>

          <PrivateRoute path='/addService'>
            <AddService />
          </PrivateRoute>

          <PrivateRoute path='/addAdmin'>
            <AddAdmin />
          </PrivateRoute>

          <Route path='/login'>
            <Login />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='*'>
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
