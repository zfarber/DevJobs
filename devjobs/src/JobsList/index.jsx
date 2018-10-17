import React     from 'react';

import Job from '../Job';

const JobsList = ({ jobData }) => (
  <span className="Job">
    {
      console.log(jobData)
      // jobData.map(job => (
      //   <Job
      //     key={`Job__${job.id}`}
      //     data={job}
      //   />
      // ))
    }
  </span>
);

export default JobsList;
