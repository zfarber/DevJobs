  import React, { Component } from 'react';
  import { hot } from 'react-hot-loader';
  import { Switch, Route } from 'react-router-dom';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faGhost } from '@fortawesome/free-solid-svg-icons'
;
  import Nav from '../Nav';
  import HomePage from '../HomePage';
  import Jobs from '../Jobs';
<<<<<<< HEAD
  import SignUp from '../SignUp';
=======
  import UserLogin from '../UserLogin';

  library.add(faGhost)
>>>>>>> master

  const App = () => {
      return (
        <div className="container is-fullhd">
        <Nav />
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path='/jobs' component={ Jobs }/>
<<<<<<< HEAD
              <Route path='/signup' component={ SignUp } />
=======
              <Route path='/login' component={ UserLogin } />
>>>>>>> master
            </Switch>
          </div>

      );
    }

  export default hot(module)(App);
