import React, { Component } from 'react';
import API from '../utils/API';

class LogOut extends Component {

    logOut = () => {
        API.logOut()
        .then(res => window.location = "/")
        .catch(err => console.log(err))
      };

    componentDidMount() {
        this.logOut();
    };

    render() {
        return (
            <div>
                <h1>Logging Out...</h1>
            </div>
        );
    };
};

export default LogOut;