import React, { Component } from 'react';

import JobsList from '../JobsList';

import axios from 'axios';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	jobs: '',
    }
  }

  componentDidMount() {
  	const zipCode = 11215;
  	const apiEndpoint = `https://jobs.github.com/positions.json?location=${zipCode}`;
     axios.get(apiEndpoint)
     .then((response) => {
       const jobData = response.data;
       this.setState({
        jobs: jobData
       })
     })
    .catch((error)=>{
       console.log(error);
    });
  }

  render() {
    const { jobs } = this.state;
  	return (
  	  <div className='Jobs'>
        <JobsList
          jobData={jobs}
        />
      </div>
  	);
  }
}

export default Jobs;
