import React, { useState, useMemo } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import UserContext from './components/context/userContext';
import EditUserContext from './components/context/editUserContext';
import Home from './pages/home';
import Entry from './pages/entry';
import LogOut from './pages/logOut';
import Portal from './pages/portal';
import Roster from './pages/roster';
import Edit from './pages/edit';
import LogIn from './pages/logIn';
import './App.css';

const App = () => {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [editUser, setEditUser] = useState(null);

  const editValue = useMemo(() => ({ editUser, setEditUser }), [editUser, setEditUser]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <UserContext.Provider value={value}>
            <Route exact path='/login' component={LogIn} />
            <Route exact path="/portal" render={() => (
              value.user !== null && value.user !== "" ? (
                <Portal />
                ) : (
                  <Redirect to="/logout" />
                )
            )} />
            <EditUserContext.Provider value={editValue}>
            <Route exact path="/roster" render={() => (
              value.user !== null && value.user !== "" ? (
                <Roster />
                ) : (
                  <Redirect to="/logout" />
                )
            )} />
            <Route exact path='/logout' component={LogOut} />
            <Route exact path="/entry" component={Entry} />
            <Route exact path="/edit" render={() => (
              value.user !== null && value.user !== "" ? (
                <Edit />
                ) : (
                  <Redirect to="/logout" />
                )
            )} />
            </EditUserContext.Provider>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
