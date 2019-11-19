import React, {Component} from "react";
import {Button, FormGroup, FormControl } from "react-bootstrap";
import {connect} from "react-redux";
import {loginUser} from "../actions";
import { withCookies, Cookies } from 'react-cookie';

class LoginPage extends Component {
constructor(props) {
    super(props);
    const {cookies} = props;
    this.state = {
        email: "",
        password: ""
    };
    this.state.csrfToken = cookies.get('XSRF-TOKEN');

}

componentDidMount(){
  console.log(this.props);
}
validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { loginUser, history } = this.props;
    const { email, password, csrfToken } = this.state;

    loginUser(email, password, csrfToken, () => history.push("/order"));
  }
  render() {
    return (

      <div className="container center-block">
      <div className="row">
  <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="form-horizontal" controlId="email" bsSize="large">
            <h1>Email</h1>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <h1>Password</h1>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default withCookies(connect(null, { loginUser })(LoginPage));