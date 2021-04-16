import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import SideBar from './components/DashBoard/SideBar/SideBar';
import AddService from './components/AddService/AddService';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/DashBoard/Orders/Orders';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Bookings from './components/DashBoard/Bookings/Bookings';
import AddAdmin from './components/DashBoard/AddAdmin/AddAdmin';
import AddReviews from './components/AddReviews/AddReviews';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.email}</p>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <SideBar></SideBar>
          </PrivateRoute>
          <PrivateRoute path="/bookings">
            <Bookings></Bookings>
          </PrivateRoute>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/admin">
            <SideBar></SideBar>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addReview">
            <AddReviews></AddReviews>
          </Route>
          <Route path="/orderList">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/checkout/:_id">
               <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
