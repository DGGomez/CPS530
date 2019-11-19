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
                                STUFF
                            </strong>
                        </Link>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(null)(NavBar);