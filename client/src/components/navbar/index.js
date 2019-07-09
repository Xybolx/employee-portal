import React, { useContext } from 'react';
import UserContext from '../userContext';
import { NavLink } from 'react-router-dom';

export const PortalNav = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'block' }
            : { display: 'none' }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <NavLink className="navbar-brand" to="/logout">
                <img src="super-logo.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                Super, inc.
                    </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-p9aMOEr4WSEJ65jCyqU9AxrJtgK70wI7qzG7BdOGlSDthHcL" width="30" height="30" className="d-inline-block align-top" alt="" /></span>
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
                    >Portal
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/entry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/entry"
                    >Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/roster"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    >Roster
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/logout"
                    >Logout
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};

export const HomeNav = () => {

    const logOutNavStyle = {
        ...window.location.pathname
            === '/logout'
            ? { display: 'none' }
            : { display: 'block' }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <NavLink className="navbar-brand" to="/">
                <img src="super-logo.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                Super, inc.
                    </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-p9aMOEr4WSEJ65jCyqU9AxrJtgK70wI7qzG7BdOGlSDthHcL" width="30" height="30" className="d-inline-block align-top" alt="" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        style={logOutNavStyle}
                        className={
                            window.location.pathname === "/"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/"
                    >Home
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/login"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/login"
                    >Login
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};