  import React, { Component } from 'react';
  import { Switch, Route } from 'react-router-dom';

  import Nav from '../Nav';
  import HomePage from '../HomePage';
  import Jobs from '../Jobs';
  import CreateUserPage from '../CreateUserPage';

  class App extends Component {
    render() {
      return (
        <div className="container">
        <Nav />
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path='/jobs' component={ Jobs }/>
              <Route path='/newuser' component={ CreateUserPage } />
            </Switch>
          </div>

      );
    }
  }

  export default App;
