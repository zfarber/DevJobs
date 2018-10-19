import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarStart,
  NavbarEnd,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
} from 'bloomer';


export default () => (
<div className="hero-head">
            <nav className="navbar is-dark">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src="./images/misc/logo.png" className="img-responsive" alt="Logo" />
                        </a>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span>Recruiters</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span>Job Seekers</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
);
