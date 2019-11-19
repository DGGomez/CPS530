import React, {Component} from "react";
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';


class SuccessPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="dashboard__container">
        <div className="profile__container">
          <div><p>Success</p></div>
        </div>
      </div>
    );
  }
}

export default withCookies(connect(null)(SuccessPage));