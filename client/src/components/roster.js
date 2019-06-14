import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import API from '../utils/API';

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            permissions: 'Employee',
            user: {}
        };
    };
        
    loadRoster = () => {
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data }))
                .catch(err => console.log(err))
    };

    loadUser = () => {
        API.getUser()
            .then(res => 
                this.setState({ user: res.data, permissions: res.data.permissions }))
                .catch(err => console.log(err))
    };

    componentDidMount() {
        this.loadUser();
        this.loadRoster();
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
                            <NavLink className="nav-item nav-link active" to="/roster">Roster <span className="sr-only">(current)</span></NavLink>
                            <NavLink className="nav-item nav-link" style={{...this.state.permissions === 'Admin' ? {display: 'block'} : {display: 'none'}}} to="/entry">Entry</NavLink>
                            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                        </div>
                    </div>
                </nav>
                <h1>Roster</h1>
                {this.state.users && (
                    <div className="users container col-md-6 offset-md-3">
                        {this.state.users.map(user => (
                            <div className="card" key={user._id}>
                            <div className="card-header">
                                <h2>{user.firstName} {user.lastName}</h2>
                            </div>
                            <div className="card-body text-left">
                            <h5 className="card-title">Email:&nbsp;<span className="text-muted">{user.email}</span></h5>
                            <h5 className="card-title">Username:&nbsp;<span className="text-muted">{user.username}</span></h5>
                            <h5 className="card-title">Position:&nbsp;<span className="text-muted">{user.position}</span></h5>
                            <h5 className="card-title">Hire Date:&nbsp;<span className="text-muted">{moment(user.date).format('MM/D/YYYY')}</span></h5>
                            <h5 className="card-title">Permissions:&nbsp;<span className="text-muted">{user.permissions}</span></h5>
                            </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };
};

export default Roster;