import React, { useState, useMemo } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
            <Route exact path='/portal' component={Portal} />
            <Route exact path='/roster' component={Roster} />
            <Route exact path='/logout' component={LogOut} />
            <Route exact path='/entry' component={Entry} />
          </UserContext.Provider>
        </Switch>
      </div>
      </Router>
    );  
  };

export default App;
