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
      <article key = {jobs.id}>
      <h4>Company: {jobs.company}</h4>
      <p> Job Title: {jobs.title}</p>
      <p> Location: {jobs.location}</p>
      </article>)}
      </div>
  	);
  }
}

export default Jobs;