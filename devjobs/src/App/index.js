  import React, { Component } from 'react';
  import { hot } from 'react-hot-loader';
  import { Switch, Route } from 'react-router-dom';

  import HomePage from '../HomePage';
  import Jobs from '../Jobs';
  import SignUp from '../SignUp';

  const App = () => {
      return (
        <div className="container">
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path='/jobs' component={ Jobs }/>
              <Route path='/signup' component={ SignUp } />
            </Switch>
          </div>
      );
    }

  export default hot(module)(App);
