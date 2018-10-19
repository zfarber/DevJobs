  import React, { Component } from 'react';
  import { hot } from 'react-hot-loader';
  import { Switch, Route } from 'react-router-dom';
import 'bulma';
import {
  Columns, Column, Section, Container,
} from 'bloomer';
  import Nav from '../Nav';
  import HomePage from '../HomePage';
  import Jobs from '../Jobs';
  import SignUp from '../SignUp';
  import UserLogin from '../UserLogin';

const App = () => {
      return (
        <div className="container is-fullhd">
        <Nav></Nav>
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path='/jobs' component={ Jobs }/>
              <Route path='/signup' component={ SignUp } />
              <Route path='/login' component={ UserLogin } />
            </Switch>
          </div>

      );
  };

  export default hot(module)(App);
