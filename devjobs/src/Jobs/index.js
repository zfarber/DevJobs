import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSignInAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      zipCode: this.props.location.search.split('=')[1],
    };
  }

  componentDidMount() {
    this.getJobs();
  }

  async getJobs() {
    const apiEndpoint = 'https://jobs.github.com/positions.json?location=' + this.state.zipCode;
    const response = await axios.get(apiEndpoint);
    const jobs = response.data;
    console.log(jobs);
    this.setState({
      jobs,
    });
  }

  render() {
    return (
      <div className="Jobs">
        { this.state.jobs.map(jobs => (
          <div key={jobs.id}>

            <div className="box">
              <article className="media">
                <div className="media-left" />
                <figure class="image is-48x48">
          <img src={jobs.company_logo} alt=""/>
        </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{jobs.title}</strong>
                      {' '}
                      <small>{jobs.location}</small>
                      {' '}
                      <br />
                      <small>
                        <b>
                          {' '}
                          {jobs.company}
                        </b>
                      </small>
                      <br />
                      <small>
                        <i>
                          {' '}
Created:
                          {jobs.created_at}
                        </i>
                      </small>
                      <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="apply">
                        <span className="icon is-small">
                       <FontAwesomeIcon icon={faSignInAlt} /> </span>
                      </a>
                       <a className="level-item" aria-label="apply">
                        <span className="icon is-small">
                       <FontAwesomeIcon icon={faHeart} /> </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Jobs);
