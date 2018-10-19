import React from 'react';

const PostJob = () => (
  <div className="CreateUserPage">
    <h2 className="title">Account Sign In</h2>
    <form method="post" action="/job">
      <div className="field">
        <label>Company Image: </label>
        <input
          className="input"
          type="text"
          name="companyImage"
          placeholder="image_url"
        />
      </div>

      <div className="field">
        <label>Company Name: </label>
        <input
          className="input"
          type="text"
          name="companyName"
          placeholder="Comapny"
        />
      </div>

      <div className="field">
        <label>Job Title: </label>
        <input
          className="input"
          type="text"
          name="jobTitle"
          placeholder="Senior Web Developer"
        />
      </div>

      <div className="field">
        <label>Description: </label>
        <input
          className="input"
          type="text"
          name="description"
          placeholder="Job description"
        />
      </div>

      <div className="field">
        <label>Location: </label>
        <input
          className="input"
          type="text"
          name="location"
          placeholder="New York, NY"
        />
      </div>

      <div className="field">
        <label>Type: </label>
        <input
          className="input"
          type="text"
          name="type"
          placeholder="Full Time"
        />
      </div>
      <div className="control">
        <button type="submit" className="button">Add Job</button>
      </div>
    </form>
  </div>
);

export default PostJob;
