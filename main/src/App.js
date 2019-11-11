import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import DashboardPage from "./pages/MainPage";
import ReportPage from "./pages/ReportPage";

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
    <Router>
      <div style={{ marginTop: '7rem' }}>
          <NavBar />
          <Route path="/" exact component={DashboardPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/report" exact component={ReportPage} />
          <Footer/>
      </div>
    </Router> 
  </div>
  );
}

export default App;
