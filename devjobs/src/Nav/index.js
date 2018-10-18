import React from 'react';

export default () => (
 <div className="navigation">
           <nav className="navbar is-white">
            <div className="navbar-brand ">
              <a className="navbar-item-height: 35px;" href="/home">
                <img src="/images/misc/logo.png" alt="" />
              </a>
              <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-light">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-warning">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </nav>
          </div>
);
