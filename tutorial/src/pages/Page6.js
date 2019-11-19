import React, { Component } from 'react';
import {connect} from "react-redux";

class Page6 extends Component {
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
            <p>Page1</p>
        </div>
    );
  }
}

export default connect(null)(Page6);