import React, {Component} from "react";
import {Button, FormGroup, FormControl } from "react-bootstrap";
import {connect} from "react-redux";
import {purchase} from "../actions";
import { withCookies, Cookies } from 'react-cookie';

class Purchase extends Component {
constructor(props) {
    super(props);

    this.state = {
        user: "",
        item: "Soil",
        quantity: "1"
    };
    const {cookies} = props;

    this.state.csrfToken = cookies.get('XSRF-TOKEN');
}

// can't order until you are logged in
componentDidMount(){
  console.log(this.props);
  const { user, token } = this.props;
    if(user == undefined) {
      this.props.history.push('/login');
    }
}
validateForm() {
    return this.state.item.length > 0 && this.state.quantity.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { user, token, purchase, history } = this.props;
    const { item, quantity, csrfToken } = this.state;
    console.log('submit: ', token, item, quantity);

    purchase(user, item, quantity, csrfToken, () => this.props.history.push("/order"));
  }
  //if not loged in login
  // else show page
  render() {
      const {user} = this.props;
    if(user !== undefined) {
    return (

      <div className="container center-block">
      <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="form-horizontal" controlId="item" bsSize="large">
            <div>item</div>
            <FormControl
              autoFocus
              type="text"
              value={this.state.item}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="quantity" bsSize="large">
            <div>quantity</div>
            <FormControl
              value={this.state.quantity}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
        </div>
        </div>
      </div>);
    }
else{
  return(
<div><h1>Login to Purchase</h1></div>);
}
  }
}
const mapStateToProps = ({ auth }) => {
  return { 
    user: auth.user,
    token: auth.token
  };
};
export default withCookies(connect(mapStateToProps, { purchase })(Purchase));