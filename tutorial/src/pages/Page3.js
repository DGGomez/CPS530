import React, { Component } from 'react';
import {connect} from "react-redux";
import index from "../images/index.PNG";
import actions from "../images/actions.PNG";
import authactions from "../images/authactions.PNG";
import authReducer from "../images/authReducer.PNG";
import loginPage1 from "../images/loginPage1.PNG";
import loginPage2 from "../images/loginPage2.PNG";
import reducer from "../images/reducer.PNG";

class Page3 extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
        <div>
          <p>*Assumption: You have already ran "rails new project" and "npx create-react-app new-project"</p>
            <h1>Front end:</h1>
            <h2>Step 1: Store</h2>
            <ul>
              <li>Create a folder called store and a file called index.js</li>
              <li><img src={index} alt="index.js" height="400" width="400"/></li>
              <li>This links the reducers to a storage unit to be passed to other pages on request through props</li>
            </ul>
            <h2>Step 2: Reducers</h2>
            <ul>
              <li>Create a folder called reducers and a file called index.js</li>
              <li><img src={reducer} alt="reducer" height="500" width="500"/></li>
              <li>This code binds the reducers to a central point that will be stored by the store</li>
            
              <li>Create a file called authReducer.js</li>
              <li><img src={authReducer} alt="auth reducer" height="500" width="500"/></li>
              <li>This saves the data handed to it to a variable ( Here the variables are user and token)</li>
            
            </ul>
            <h2>Step 3: Actions</h2>
            <ul>
              <li>Create a folder called actions and a file called index.js</li>
              <li><img src={actions} alt="actions" height="150" width="150"/></li>
              <li>This passes the code onto the page for importing ( So you don't have to specify which action you are using)</li>
              <li>Create a file called authActions.js</li>
              <li><img src={authactions} alt="auth actions" height="500" width="500"/></li>
              <li>This uses axios to send requests to our backend service then takes that information<br/>
         and puts it into a reducer to be stored, so it can be passed on to the page</li>
              <li> Note - If you have an API external to your app then you will need to add that configuration index<br/>
         package.json as proxy: "YOUR_URL.com/api/info"</li>
            
            </ul>
            <h2>Step 4: Page and Styling</h2>
            <ul>
            <li><img src={loginPage1} alt="login Page 1" height="600" width="600"/></li>
              <li>To begin with at the top we will be importing react-bootstrap for prebuilt components</li>
              <li>react-redux is used to link to another page, after the user logins in they will be redicted to another page</li>
            </ul>
            <h3>Constructor: </h3>
            <ul>
              <li>The contructor creates the beginning information of the page here we start all the variables<br/>
        we will be using in state as well as passing existing props (stored variables)</li>
            </ul>
            <h3>ComponentDidMount: </h3>
            <ul>
              <li>This is an action when page has been rendered. We have no information to put here at the moment.</li>
            </ul>
            <h3>Validate Form: </h3>
            <ul>
              <li>This will simply check if the data being passed to the login action is empty</li>
            </ul>    
            <h3>handleChange: </h3>
            <ul>
              <li>This will update our state values by running setState which will alter the variables<br/>
        in real time based on their id tags</li>
            </ul>
            <h3>handleSubmit: </h3>
            <ul>
              <li>This will send the completed data to the login action created before</li>
            </ul>   
            <img src={loginPage2} alt="login Page 2" height="600" width="600"/>                         
            <h3> render: </h3>
            <ul>
              <li>Here using react-bootstrap we create a form for collecting data. This is what users<br/>
        will see on this page.</li>
            </ul>    
            <h3>Style: </h3>
            <ul>
              <li>This is where the CSS for react is done</li>
            </ul>
            <h3>export: </h3>
            <ul>
              <li>This allows for other .js files to import and use this page. This will be sent to router or app.js<br/>
        for rendering.</li>
            </ul>              
            <br/>
            <hr/>
            <br/>
            <h1>Back end:</h1>
            <h2>Step 1: Gems installation</h2>
            <ul>
              <li>gem devise (creates basic actions for authenticaiton: login, signup, forgot password)</li>
              <li>gem bcrypt (encrypts data for devise use as it will store passwords as hashes)</li>
              <li>gem 'responders' (Handles JSON input)</li>
              <li>bundle install</li>               
            </ul>
            <h2>Step 2: Devise</h2>
            <ul>
              <li>run - rails g devise: install</li>
              <li>go to - devise.rb change email</li>
              <li>run - rails g devise User</li>
              <li>rails db:migrate</li>              
            </ul>
            <h2>Step 3: configuration</h2>
            <ul>
              <li>in config/database.yaml change database info to your db info</li>
            </ul>
            <h2>Step 4: optional</h2>
            <ul>
              <li>change migration files in db/migrate</li>
              <li>Here you can change how the data will be stored and which actions will be allowed</li>
            </ul>
        </div>
    );
  }
}

export default connect(null)(Page3);