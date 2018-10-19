  import React, { Component } from 'react';
  import { Switch, Route } from 'react-router-dom';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faGhost } from '@fortawesome/free-solid-svg-icons'
;
  import Nav from '../Nav';
  import HomePage from '../HomePage';
  import Jobs from '../Jobs';
  import UserLogin from '../UserLogin';

  library.add(faGhost)

  class App extends Component {
    render() {
      return (
        <div className="container is-fullhd">
        <Nav />
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path='/jobs' component={ Jobs }/>
              <Route path='/login' component={ UserLogin } />
            </Switch>
          </div>

      );
    }
  }

  export default App;
