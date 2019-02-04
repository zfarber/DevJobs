import React from 'react';

const DeleteJob = () => (
  <form method="POST" action={`/job/${job.id}?_method=DELETE`}>
    <input type="text" name="job_id" />
    <input type="hidden" name="_method" value="delete" />
    <button className="button is-primary" type="submit">Delete</button>
  </form>
);

export default DeleteJob;
