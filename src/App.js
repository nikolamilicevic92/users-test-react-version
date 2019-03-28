import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import UsersIndex from './pages/users/users-index/UsersIndex';
import UsersCreate from './pages/users/users-create/UsersCreate';
import UsersEdit from './pages/users/users-edit/UsersEdit';
import UsersShow from './pages/users/users-show/UsersShow';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={UsersIndex} />
            <Route path="/users/create" component={UsersCreate} />
            <Route path="/users/:id/edit" component={UsersEdit} />
            <Route path="/users/:id" component={UsersShow} />            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
