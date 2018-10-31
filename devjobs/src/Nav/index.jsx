import React from 'react';
import brand from './logo.png';

export default () => (
  <div className="hero-head">
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="#/">
            <img src={brand} className="img-responsive" alt="Logo" />
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">

            <span className="navbar-item">
              <a className="button is-white is-outlined" href="#/PostJob">
                <span>Post A Job</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-white is-outlined" href="#login">
                <span>Login</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
