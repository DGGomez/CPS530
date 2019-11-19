import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import {connect} from "react-redux";
import { withCookies, Cookies } from 'react-cookie';

class ContactPage extends Component {
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
      const form = await axios.post('/send',{
          name,email,message
      })
  }
  render() {
    return (
        <div>
            <p>FAKE EMAIL: company@email.com</p>
        </div>
    );
  }
}

export default withCookies(connect(null)(ContactPage));