import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import { NavLink } from 'react-router-dom';
import Clock from '../clock/clock';
import './navbar.css';

export const PortalNav = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'block' }
            : { display: 'none' }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/logout">
                <img src="super-logo.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                Super, inc.
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        className={
                            window.location.pathname === "/portal"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/portal"
                    ><i className="fas fa-door-open"></i> Portal
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/entry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/entry"
                    ><i className="far fa-id-card"></i> Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/roster"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    ><i className="far fa-eye"></i> Roster
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/logout"
                    ><i className="fas fa-sign-out-alt"></i> Logout
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};

export const EditNav = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'block' }
            : { display: 'none' }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/logout">
                <img src="super-logo.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                Super, inc.
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        className={
                            window.location.pathname === "/portal"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/portal"
                    ><i className="fas fa-door-open"></i> Portal
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/entry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/entry"
                    ><i className="far fa-id-card"></i> Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/roster"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    ><i className="far fa-eye"></i> Roster
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/edit"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    ><i className="fas fa-user-edit"></i> Edit
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/logout"
                    ><i className="fas fa-sign-out-alt"></i> Logout
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};

export const LogOutNav = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/logout">
                <img src="super-logo.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                Super, inc.
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav"></div>
            </div>
        </nav>
    );
};

export const HomeNav = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
                <img src="super-logo.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                Super, inc.
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span width="30" height="30" className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        exact to="/"
                        className="nav-item nav-link"
                        activeClassName="active"
                        activeStyle={{
                            color: "yellow"
                        }}
                    ><i className="fas fa-home"></i> Home
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/login"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/login"
                    ><i className="fas fa-sign-in-alt"></i> Login
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};