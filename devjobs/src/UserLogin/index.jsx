import React from 'react';
import brand from '../nav/logo128.png';

export default () => (
  <section className="hero is-light is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-black">Job Seeker Login </h3>
          <p className="subtitle has-text-black">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src={brand} />
            </figure>
            <form>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" placeholder="Username" autoFocus="" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="password" placeholder="Your Password" />
                </div>
              </div>
              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button className="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p className="has-text-grey">
            <a href="/#/signup">Sign Up</a>
            {' '}
&nbsp;·&nbsp;
            <a href="../">Forgot Password</a>
            {' '}
&nbsp;·&nbsp;
          </p>
        </div>
      </div>
    </div>
  </section>
);
