import React, { Component } from 'react';
import {connect} from "react-redux";

class Page6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    return (
        <div>
            <h1>Developers</h1>
            <br/>
            <h2>Daniel Gomez</h2>
            <h3>Student Number: 500449117</h3>
            <p>Created backend logic for login and sign up pages. As well as made the<br/>
            front end action listeners and redux imlimentation for the demo.
            </p>
            <br/>
            <hr/>
            <br/>
            <h2>William Murray</h2>
            <h3>Student Number: 500694462</h3>
            <p>Front end for demo: Styling and creation of pages
            </p>
            <br/>
            <hr/>
            <br/>
            <h2>Thomas Young-Audet</h2>
            <h3>Student Number: 500865018</h3>
            <p>Back end for demo: Ordering and Purchasing actions
            </p>
            <br/>
            <hr/>
            <br/>
            <h2>Ivan Evert</h2>
            <h3>Student Number: 500835327</h3>
            <p>Front end for tutorial: Creation of pages
            </p>
        </div>
    );
  }
}

export default connect(null)(Page6);