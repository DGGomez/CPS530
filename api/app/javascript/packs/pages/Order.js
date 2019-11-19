import React, {Component} from "react";
import {Button, FormGroup, FormControl } from "react-bootstrap";
import {connect} from "react-redux";
import {ordering} from "../actions";
import { withCookies, Cookies } from 'react-cookie';

class Order extends Component {
constructor(props) {
    super(props);
    const {cookies} = props;
    this.state = {
        loaded: false
    }
}

// can't order until you are logged in
componentDidMount(){
  console.log(this.props);
    const { user, token, order, history, ordering } = this.props;
    if(user == undefined) {
      this.props.history.push('/login');
    } 
ordering(user, () => this.setState({ loaded: true }));
}
componentDidUpdate() {
  console.log(this.props);
  }

renderList() {
  var list = this.props.order; 
  
  var updatedList = list.map((listItems)=>{ 
      console.log(listItems);
      return( 
        <li key={listItems[0]}>
        <p>
        Item: {listItems.item} | Quantity: {listItems.quantity}
        </p>
        </li>
          );  
  }); 
  return( 
    <ul>
{updatedList}
</ul> 
); 
}

validateForm() {
    return this.state.name.length > 0 && this.state.location.length > 0 && this.state.description.length > 0;
  }

  //if not loged in login
  // else show page
  render() {
      var {user} = this.props;
      var {loaded} = this.state;
    if(user !== undefined && loaded) {
    return (
    <div className="Results">
    <h1>Orders</h1>
    {this.renderList()}
    </div>
      );
    }
else{
  return(
<div><h1>Loading</h1></div>);
}
  }
}
const mapStateToProps = state => {
  return { 
    user: state.auth.user,
    token: state.auth.token,
    order: state.order.orderList
  };
};
export default withCookies(connect(mapStateToProps, { ordering })(Order));