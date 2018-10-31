import React from 'react';
import brand from '../Nav/logo128.png';

const SignUp = () => (
  <section className="hero is-light is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h3 className="title has-text-black">Job Seeker SignUp</h3>
          <p className="subtitle has-text-black">Get Started.</p>
          <div className="box">
            <figure className="avatar is-128x128">
              <img src={brand} />
            </figure>
            <form method="POST" action="/signup">
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="username" placeholder="Username" autoFocus="" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="name" placeholder="Full Name" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="portfolio_url" placeholder="Portfolio URL" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="zipcode" placeholder="Zipcode" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="description" placeholder="Desired Job Title" />
                </div>
              </div>
              <div className="field">

                <div className="control">
                  <div className="select is-primary">
                    <select name="industryWanted">
                      <option>Preferred Industry</option>
                      <option>Information Technology</option>
                      <option>Software as a service (SaaS) development </option>
                      <option>Financial Technology or Services</option>
                      <option>Data and Analytics</option>
                      <option>Media, Advertising,Publishing,or Entertainment</option>
                      <option>Retail or eCommerce</option>
                      <option>Healthcare Technology or Services</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <div className="select is-primary">
                    <select name="titleWanted">
                      <option>Specialization</option>
                      <option>Full Stack Developer</option>
                      <option>Front End Developer</option>
                      <option>Back End Developer</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="button is-block is-info is-large is-fullwidth">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default SignUp;
