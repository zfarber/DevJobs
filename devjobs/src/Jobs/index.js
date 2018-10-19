import React, { Component } from 'react';
import axios from 'axios';

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.getJobs();
  }

  async getJobs() {
    const zipCode = 11215;
    const apiEndpoint = `https://jobs.github.com/positions.json?location=${zipCode}`;
    const response = await axios.get(apiEndpoint);
    const jobs = response.data;
    this.setState({
      jobs,
    });
  }

  render() {
    return (
      <div className='Jobs'>
      { this.state.jobs.map(jobs =>
      <div key = {jobs.id}>

<div className="box">
  <article className="media">
    <div className="media-left">
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{jobs.title}</strong> <small>{jobs.location}</small> <br /><small><b> {jobs.company}</b></small><br /><small><i> Created: {jobs.created_at}</i></small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="apply">
            <span className="icon is-small">
              <i className="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
      </div>)}
      </div>
    );
  }
}

export default Jobs;


