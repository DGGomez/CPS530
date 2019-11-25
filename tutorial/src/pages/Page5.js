import React, { Component } from 'react';
import {connect} from "react-redux";

class Page5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
        <div>
            <h1>React: </h1>
            <h2>Rating: 8/10</h2>
            <h2>Pros</h2>
            <ul>
              <li>Easy to configure and use</li>
              <li>Lots of help online</li>
              <li>Good for multipage web apps and websites</li>
            </ul>
            <h2>Cons</h2>
            <ul>
              <li>Error messages don't give a lot of feed back on problem</li>
              <li>Not much documentation on redux</li>
            </ul> 
            <h2>Comment: </h2>
            <p>React was a good framework for building our multipage website. It was very easy to install<br/>
and with basic tutorials you can make quick websites. The problems started when introducing<br/>
redux and action listeners as there isn't a great deal of information about them as well there <br/>
are several different ways of performing those actions. Overall though it is<br/>
a great tool for quick multipage apps and web apps.</p>   
<br/>
<hr/>
<br/>    
<h1>Ruby on rails: </h1>
            <h2>Rating: 9/10</h2>
            <h2>Pros</h2>
            <ul>
              <li>Does a lot of the set up work for you</li>
              <li>Everything is already organized when you create the project</li>
              <li>Not alot of work to get a fully functional API</li>
            </ul>
            <h2>Cons</h2>
            <ul>
              <li>Getting use to rails format takes a while as the initial project created is very large</li>
            </ul> 
            <h2>Comment: </h2>
            <p>Ruby on rails initially is a lot to take in. When you first create your first rails app<br/>
it comes with a large amount of files that need some time to decifer. After the initial <br/>
confusion though it is clear that each file speeds up configuration for your app. As <br/>
well the rails api does a lot of the work for you. Building an API with rails was easy and<br/>
fast.</p>       
        </div>
    );
  }
}

export default connect(null)(Page5);