  import React, { Component } from 'react';
  import { Switch, Route } from 'react-router-dom';

  import HomePage from '../HomePage';
  import Jobs from '../Jobs';
  import SignUp from '../SignUp';

  class App extends Component {
    render() {
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
  }

  export default App;
