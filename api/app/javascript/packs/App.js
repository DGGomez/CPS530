import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import DashboardPage from "./pages/MainPage";

import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import SignUp from "./pages/SignUp";

import ContactPage from "./pages/ContactPage";
import Order from "./pages/Order";
import Purchase from "./pages/Purchase";
import SuccessPage from "./pages/SuccessPage";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
        
        
          <Router>
          
            <NavBar/>

            <Route path="/" exact component={DashboardPage} />
            <Route path="/dashboard" exact component={DashboardPage} />
            <Route path="/logoutPage" exact component={LogoutPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signUp" exact component={SignUp} />

            <Route path="/contact" exact component={ContactPage} />
            <Route path="/order" exact component={Order} />
            <Route path="/purchase" exact component={Purchase} />
            <Route path="/success" exact component={SuccessPage} />

            <Footer/>
          </Router> 
        

        </div>
    );
  }
}

export default App;