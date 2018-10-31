import React from 'react';
import brand from '../Nav/logo128.png';

const UpdateJob = () => (
  <section className="hero is-light is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h3 className="title has-text-black">Hire the right fit for your business</h3>
          <p className="subtitle has-text-black">Post jobs for FREE</p>
          <div className="box">
            <figure className="avatar is-128x128">
              <img src={brand} />
            </figure>
            <form method="PUT" action={`/job/${job.id}/?_method=PUT`}>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" name="companyName" placeholder="Company Name" autoFocus="" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="Job" name="jobTitle" placeholder="Job Title" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea" name="description" placeholder="Job Description" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="Job" name="location" placeholder="Zipcode" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="Job" name="companyImage" placeholder="Logo Image URL" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <div className="select is-primary">
                    <select name="type">
                      <option>Type</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Remote </option>
                      <option>Contract </option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="button is-block is-info is-large is-fullwidth">Update Job</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UpdateJob;
