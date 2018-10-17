import React, { Component } from 'react';
import axios from 'axios';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	jobs: []
    }
  }

  componentDidMount() {
  	const zipCode = 11215;
  	const apiEndpoint = `https://jobs.github.com/positions.json?location=${zipCode}`;

  	axios.get(apiEndpoint)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
  	return (
  	  <div className='Jobs'></div>
  	);
  }
}

export default Jobs;
