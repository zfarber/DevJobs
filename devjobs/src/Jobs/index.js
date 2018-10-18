import React, { Component } from 'react';
import axios from 'axios';

class Jobs extends Component {
 constructor () {
  super()
  this.state = {
    jobs: [],
  }
 }

async getJobs(){
    const zipCode = 11215;
    const apiEndpoint = `https://jobs.github.com/positions.json?location=${zipCode}`;
    const response = await axios.get(apiEndpoint);
    const jobs = response.data;
    console.log(jobs);
    this.setState({
      jobs: jobs,
    });
}

componentDidMount() {
  this.getJobs();
}

  render() {
  	return (
  	  <div className='Jobs'>
      { this.state.jobs.map(jobs =>
      <div key = {jobs.id}>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src={jobs.company_logo} alt="Image"/>
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{jobs.company}</strong> <small>{jobs.location}</small> <small><b>{jobs.type}</b></small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="apply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
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


