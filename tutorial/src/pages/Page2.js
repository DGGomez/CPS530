import React, { Component } from 'react';
import {connect} from "react-redux";

class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
        <div>

            <h1>React Installation: </h1>
            <h2>Step 1: Install NPM</h2>
            <p><a href = "https://nodejs.org">link</a></p>
            <br/>
            <h2>Step 2: install react with NPM</h2>
            <p>npm install -g create-react-app</p>
            <br/>
            <h2>Step 3: Create a project</h2>
            <p>npx create-react-app first-project</p>
            <br/>
            <hr/>
            <br/>

            <h1>Ruby on Rails Installation: </h1>
            <h2>Step 1: Download git</h2>
            <p><a href = "https://git-scm.com/downloads">link</a></p>
            <br/>
            <h2>Step 2: download Yarn</h2>
            <p><a href = "https://yarnpkg.com/lang/en/docs/install/#windows-stable">link</a></p>
            <br/>
            <h2>Step 3: Open Bash Terminal and download rails</h2>
            <p>curl http://installrails.com/update_rubygems.rb | ruby</p>
            <br/>
            <h2>Step 4: Install rails</h2>
            <p>gem install rails --no-ri --no-rdoc</p>
            <br/>
            <h2>Step 5: Create Project</h2>
            <p>rails new sample_app</p>
            <br/>
        </div>
    );
  }
}

export default connect(null)(Page2);