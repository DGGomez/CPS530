import React, { Component } from 'react';
import {connect} from "react-redux";

class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        message: '',
        email: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e =>{
      this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e){
      e.preventDefault()
      const { name, email, message } = this.state
  }
  render() {
    return (
        <div>
            <p>FAKE EMAIL: company@email.com</p>
        </div>
    );
  }
}

export default connect(null)(Page2);