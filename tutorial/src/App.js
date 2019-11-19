import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <Router>
            <NavBar/>

                <Route path="/" exact component={Page1} />
                <Route path="/dashboard" exact component={Page1} />
                <Route path="/page2" exact component={Page2} />
                <Route path="/page3" exact component={Page3} />
                <Route path="/page4" exact component={Page4} />
                <Route path="/page5" exact component={Page5} />
                <Route path="/page6" exact component={Page6} />             
                <Footer/>

          </Router> 
        </div>
    );
  }
}

export default App;