import React, { useState, useMemo } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import UserContext from './components/userContext';
import Home from './pages/home';
import Entry from './pages/entry';
import LogOut from './pages/logOut';
import Portal from './pages/portal';
import Roster from './pages/roster';
import './App.css';
import LogIn from './pages/logIn';

const App = () => {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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
            <Route exact path="/roster" render={() => (
              value.user !== null && value.user !== "" ? (
                <Roster />
                ) : (
                  <Redirect to="/logout" />
                )
            )} />
            <Route exact path='/logout' component={LogOut} />
            <Route exact path="/entry" render={() => (
              value.user !== null && value.user !== "" ? (
                <Entry />
                ) : (
                  <Redirect to="/logout" />
                )
            )} />
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
