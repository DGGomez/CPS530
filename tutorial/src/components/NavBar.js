import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        const { user } = this.props;
        return (
            <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <strong>
                                Page 1
                            </strong>
                        </Link>|
                        <Link to="/page2" className="navbar-brand">
                            <strong>
                                Page 2
                            </strong>
                        </Link>|
                        <Link to="/page3" className="navbar-brand">
                            <strong>
                                Page 3
                            </strong>
                        </Link>|
                        <Link to="/page4" className="navbar-brand">
                            <strong>
                                Page 4
                            </strong>
                        </Link>|
                        <Link to="/page5" className="navbar-brand">
                            <strong>
                                Page 5
                            </strong>
                        </Link>|
                        <Link to="/page6" className="navbar-brand">
                            <strong>
                                Page 6
                            </strong>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(null)(NavBar);