import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Entry from './components/entry';
import LogOut from './components/logOut';
import LogIn from './components/logIn';
import Roster from './components/roster';
import './App.css';

class App extends Component {
    
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/roster' component={Roster} />
          <Route exact path='/logout' component={LogOut} />
          <Route exact path='/entry' component={Entry} />
        </Switch>
      </div>
    );
  }
};

export default App;
