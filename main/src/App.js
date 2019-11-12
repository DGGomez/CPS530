import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import DashboardPage from "./pages/MainPage";

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
                <Footer/>

          </Router> 
        </div>
    );
  }
}

export default App;