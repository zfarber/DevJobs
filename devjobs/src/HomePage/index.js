import React, { Component } from 'react';
import Jobs from '../Jobs';

  class HomePage extends Component {
    render() {
      return (
<section class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Primary title
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
  <Jobs />
</section>
      );
    }
  }

  export default HomePage;
