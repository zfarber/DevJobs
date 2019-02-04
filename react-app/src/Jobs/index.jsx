import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ReactHTMLParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import {
  faSignInAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs:    [],
      zipCode: this.props.location.search.split('=')[1],
    };
  }

  componentDidMount() {
    this.getJobs();
  }

  async getJobs() {
    const apiEndpoint = `https://jobs.github.com/positions.json?location=${this.state.zipCode}`;
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
                <figure className="image is-48x48">
                  <img src={jobs.company_logo} alt="" />
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{jobs.title}</strong>
                      {' '}
                      <small>
                        {jobs.location}
                        {' '}
                        {jobs.type}
                      </small>
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
                      {ReactHTMLParser(jobs.description)}
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" href={jobs.url} aria-label="apply">
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faSignInAlt} />
                        </span>
                      </a>

                      <a className="level-item" aria-label="apply">
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
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
