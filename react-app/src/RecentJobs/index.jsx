import React, { Component } from 'react';
import placeholder from './placeholder.png';
import quantitative from './quantitative.jpg';
import atlantic from './atlantic.png';
import trading from './tradingscreen.png';


export default () => (
  <div className="row columns has-background-white">
    <div className="column is-one-third ">
      <div className="card large">
        <div className="card-image" />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={quantitative} alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title-strong-color is-4 no-padding">Quantitative Systems</p>
              <p><span className="title-strong-color is-7 "><a href="https://www.linkedin.com/jobs/view/868200945/">Junior Web Developer</a></span></p>
              <p className="subtitle-strong-color is-6">New York, New York</p>
            </div>
          </div>
          <div className="content">
Our firm is looking for a creative software engineer to join us. This individual will be working on the information systems that support the global sales and marketing organization. This role will work closely with business owners, internal clients, and the development team. Responsible for...
            <div className="background-icon"><span className="icon-twitter" /></div>
            <a className="button is-info is-outlined">Apply</a>

          </div>
        </div>
      </div>
    </div>
    <div className="column is-one-third">
      <div className="card large">
        <div className="card-image" />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={atlantic} alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title-strong-color is-4 no-padding">Atlantic Media</p>
              <p><span className="title-strong-color is-6"><a href="https://www.linkedin.com/jobs/view/909637583/">Front End Developer</a></span></p>
              <p className="subtitle-strong-color is-6">New York, New York</p>
            </div>
          </div>
          <div className="content">
                               You’ll join The Atlantic’s marketing family: a small, passionate, scrappy group of idealists, realists, thinkers, and doers. In your role, you’ll be central in the building of bespoke digital experiences that range from articles, interactive experiences and digital products. You’re a problem solver, tinkerer, and...
            <div className="background-icon"><span className="icon-facebook" /></div>
            <a className="button is-info is-outlined">Apply</a>
          </div>
        </div>
      </div>
    </div>
    <div className="column is-one-third">
      <div className="card large">
        <div className="card-image" />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={trading} alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title-strong-color is-4 no-padding">Trading Screen</p>
              <p><span className="title-strong-color is-6"><a href="https://www.linkedin.com/jobs/view/918937329/">Web Developer</a></span></p>
              <p className="subtitle-strong-color is-6">New York, New York</p>
            </div>
          </div>
          <div className="content">
                            We are seeking a Web Developer - someone who has significant Java client side, web, multithreading, multi-user, and n-tier application development experience. This is a New York based position, requiring someone who has the aspiration to break into the financial services industry
            <div className="background-icon"><span className="icon-facebook" /></div>
            <a className="button is-info is-outlined">Apply</a>
          </div>
        </div>
      </div>
    </div>
  </div>

);
