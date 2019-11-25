import React, { Component } from 'react';
import {connect} from "react-redux";

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
        <div>
            <h1>Front End: React Review</h1>
            <h2>Popularity:</h2>
            <p>    
              React is a very popular language created by facebook. It has been adopted<br/>
    by large groups of people and companies such as facebook, instagram, netflix, the new york times, drop boxs and many more.
        </p>
        <br/>
        <h2>Strengths</h2>
        <ul>
          <li>immediate rerendering</li>
          <li>With redux it can pass information in any direction</li>
          <li>Easy to learn and quick to make</li>
        </ul>
        <br/>
        <h2>Weaknesses</h2>
        <ul>
          <li>large libraries make it difficult to find what modules you need</li>
          <li>easy to learn, harder to master</li>
          <li>Difficult to implement redux</li>
        </ul>
        <br/>
        <h2>Which Devs use it(For what kind of websites)?:</h2>
            <p>    
            React is used for building multipage websites and web apps. It allows for<br/>
instance rerendering which makes it more interactive for users. 
        </p> 
        <br/>       
        <hr/>
        <br/>
        <h1>Backend End: Ruby On Rails Review</h1>
            <h2>Popularity:</h2>
            <p>    
            Ruby on rails is a very popular framework used by shopify, pagerduty, coinbase, kickstarter and many more. <br/>
This framework is often used as a monolithic API in these companies and its use is constantly increasing.
        </p>
        <br/>
        <h2>Strengths</h2>
        <ul>
          <li>fast developement</li>
          <li>automated testing</li>
          <li>protection against attacks</li>
        </ul>
        <br/>
        <h2>Weaknesses</h2>
        <ul>
          <li>protection against attacks</li>
        </ul>
        <br/>
        <h2>Which Devs use it(For what kind of websites)?:</h2>
            <p>    
            This tool can be used to make web apps, websites, and APIs. It allows for<br/>
html rednering as well as including backend logic. With its fast<br/>
development time it is often used for the creation of quick prototypes.<br/> 
        </p> 
        </div>
    );
  }
}

export default connect(null)(Page1);