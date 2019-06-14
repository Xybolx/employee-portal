import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../utils/API';

class Entry extends Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        position: '',
        permissions: '',
        user: {}
    };

    handleInputChange = ev => {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = ev => {
        ev.preventDefault();
        if (this.state.email && this.state.firstName && this.state.lastName && this.state.username && this.state.password && this.state.position && this.state.permissions) {
            API.signUp({
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                position: this.state.position,
                permissions: this.state.permissions
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
                        Super, inc.
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active" to="/entry">Entry <span className="sr-only">(current)</span></NavLink>
                            <NavLink className="nav-item nav-link" to="/roster">Roster</NavLink>
                            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                        </div>
                    </div>
                </nav>
                <h1>Entry</h1>
                <div className="col-md-6 offset-md-3">
                <form id="signUpForm" onSubmit={this.handleFormSubmit}>
                    <div className="form-group container text-left">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control email-input" name="email" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="first name">First Name</label>
                    <input className="form-control firstName-input" name="firstName" type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="last name">Last Name</label>
                    <input className="form-control lastName-input" name="lastName" type="text" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="username">Username</label>
                    <input className="form-control username-input" name="username" type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input className="form-control password-input" name="password" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="position">Position</label>
                    <input className="form-control position-input" name="position" type="text" placeholder="Enter Position" value={this.state.position} onChange={this.handleInputChange} required />
                    <br />
                    <label htmlFor="permissions">Choose Permissions</label>
                    <select className="form-control permissions-select" name="permissions" placeholder="Choose Permissions" value={this.state.permissions} onChange={this.handleInputChange} required>
                        <option>Employee</option>
                        <option>Admin</option>
                    </select>
                    <br />
                    <button className="btn btn-success btn-block" type="submit">Create User Profile</button>
                    <hr />
                    <button onClick={this.redirectUser} className="btn btn-success btn-block" type="button" disabled={!(this.state.user.username)}>Entry/Roster</button>
                    </div>
                </form>
                </div>
            </div>
        );
    };
};

export default Entry;