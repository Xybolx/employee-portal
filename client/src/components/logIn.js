import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../utils/API';

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            user: {}
        };
    };

    handleInputChange = ev => {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = ev => {
        ev.preventDefault();
        if (this.state.email && this.state.password) {
            API.logIn({
                email: this.state.email,
                password: this.state.password
            })
            .then(res => this.loadUser())
            .catch(err => console.log(err))
        };
    };

    loadUser = () => {
        API.getUser()
        .then(res => 
            this.setState({ user: res.data }))
            .catch(err => console.log(err))
    };

    redirectUser = () => {
        if (this.state.user.permissions === 'Admin') {
            window.location = "/entry";
        } else {
            window.location = "/roster";
        }
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">
                    <img src="https://clipart.info/images/ccovers/1516943362Superman-Logo-PNG-HD-Transparent-Background.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Super, inc.&nbsp;
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active" to="/login">Login <span className="sr-only">(current)</span></NavLink>
                            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                        </div>
                    </div>
                </nav>
                <h1>Login</h1>
                <div className="col-md-6 offset-md-3">
                <form id="adminLogInForm" onSubmit={this.handleFormSubmit}>
                    <div className="form-group container text-left">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control email-input" name="email" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input className="form-control password-input" name="password" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange} required />
                    <br />
                    <button className="btn btn-success btn-block" type="submit">Login</button>
                    <hr />
                    <button onClick={this.redirectUser} className="btn btn-success btn-block" type="button" disabled={!(this.state.user.username)}>Roster/Entry</button>
                    </div>
                </form>
                </div>
            </div>
        );
    };
};

export default LogIn;