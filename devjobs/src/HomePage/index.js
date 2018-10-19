import React, { Component } from 'react';

  class HomePage extends Component {
    render() {
      return (
    <section className="hero is-info is-bold ">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="title">
                            Find Development Jobs.
                        </h1>
                        <h2 className="subtitle">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h2>
                        <div className="box">
                            <div className="field is-grouped">
                                <p className="control is-expanded">
                                    <input className="input" type="text" placeholder="Enter your zipcode" />
                                </p>
                                <p className="control">
                                    <a className="button is-info">
                                        Find Jobs
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
      );
    }
  }

  export default HomePage;
