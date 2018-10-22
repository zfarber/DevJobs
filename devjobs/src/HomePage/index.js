import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import RecentJobs from '../RecentJobs';

function handleSubmit(props) {
  return (event) => {
    event.preventDefault();
    props.history.push(`/jobs?zip=${event.target.zipcode.value}`);
  };
}

const HomePage = (props) => {
  return (
    <section className="hero is-info is-bold ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title">
              Find Jobs in Development.
            </h1>
            <h2 className="subtitle">
              Join Our Talented Pool Of Applicants To Land A Job As A Web Developer.
            </h2>
            <div className="box">
              <div className="field is-grouped">
                <form className="control is-expanded" onSubmit={(event) => handleSubmit(props)(event)}>
                  <input name="zipcode" className="input" type="text" placeholder="Enter your zipcode" />
                  <p className="control">
                    <button className="button is-info" type="submit">
                      Find Jobs
                    </button>
                  </p>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
            <RecentJobs />
    </section>
  );
};


export default withRouter(HomePage);
