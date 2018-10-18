  import React, { Component } from 'react';
  import { Switch, Route } from 'react-router-dom';

  import Nav from '../Nav';
  import HomePage from '../HomePage';
  import Jobs from '../Jobs';

  class App extends Component {
    render() {
      return (
        <div className="container">
        <Nav>
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path='/jobs' component={ Jobs }/>
            </Switch>
            </Nav>
          </div>

      );
    }
  }

  export default App;
