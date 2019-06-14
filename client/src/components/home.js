import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">
                    <img src="https://clipart.info/images/ccovers/1516943362Superman-Logo-PNG-HD-Transparent-Background.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Super, inc.
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </div>
                    </div>
                </nav>
                <br />
                <h1><img className="img-fluid" src="https://clipart.info/images/ccovers/1516943362Superman-Logo-PNG-HD-Transparent-Background.png" alt=""></img>Super, inc.</h1>
                <h3><Link to="/login">Login</Link>&nbsp;To Access</h3>
            </div>
        );
    };
};

export default Home;