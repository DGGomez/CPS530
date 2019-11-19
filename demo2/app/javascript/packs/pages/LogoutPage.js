import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../actions';
import { withCookies, Cookies } from 'react-cookie';

class LogoutPage extends Component {
    componentDidMount() {
        const { user, logoutUser } = this.props;
        if(user !== undefined) {
            logoutUser(() => setTimeout(() => this.props.history.push('/dashboard'), 2000));
        }
    }
    render() {
        return (
                    <div>
                        <p>You will now be re-directed!</p>
                    </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { user: auth.user };
};

export default withCookies(connect(mapStateToProps, { logoutUser })(LogoutPage));