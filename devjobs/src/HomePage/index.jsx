// import { withRouter } from 'react-router-dom'
// import React, { Component } from 'react';
// import RecentJobs from '../RecentJobs';

// const { Job } = require('../../models');

// function handleSubmit(props) {
//   return (event) => {
//     event.preventDefault();
//     props.history.push(`/jobs?zip=${event.target.zipcode.value}`);
//   };
// }

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       jobs: '',
//     };
//     this.getJobs = this.getJobs.bind(this);
//   }

//   componentDidMount() {
//     this.getJobs();
//   }

//   async getJobs() {
//     const jobsList = await Job.findAll({});
//     this.setState({ jobs: jobsList });
//   }

//   render() {
//     return (
//       <section className="hero is-info is-bold ">
//         <div className="hero-body">
//           <div className="container has-text-centered">
//             <div className="column is-6 is-offset-3">
//               <h1 className="title">
//                 Find Jobs in Development.
//               </h1>
//               <h2 className="subtitle">
//                 Join Our Talented Pool Of Applicants To Land A Job As A Web Developer.
//               </h2>
//               <div className="box">
//                 <div className="field is-grouped">
//                   <form className="control is-expanded" onSubmit={(event) => handleSubmit(props)(event)}>
//                     <input name="zipcode" className="input" type="text" placeholder="Enter your zipcode" />
//                     <div>
//                       <p className="control">
//                         <button className="button is-info" type="submit">
//                           Find Jobs
//                         </button>
//                       </p>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <RecentJobs />
//       </section>
//     );
//   }
// };


// export default withRouter(HomePage);

import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import RecentJobs from '../RecentJobs';

function handleSubmit(props) {
  return (event) => {
    event.preventDefault();
    props.history.push(`/jobs?zip=${event.target.zipcode.value}`);
  };
}

const HomePage = props => (
  <section className="hero is-info is-bold ">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
              Find Jobs in Development.
          </h1>
          <h2 className="subtitle">
              Join Our Talented Pool Of Applicants To Land A Job As A Web Developer.
          </h2>
          <div className="box">
            <div className="field is-grouped">
              <form className="control is-expanded " onSubmit={event => handleSubmit(props)(event)}>
                <input name="zipcode" className="input" type="text" placeholder="Enter your zipcode" />
                <div>
                  <p className="control has-text-centered">
                    <button className="button is-info" type="submit">
                        Find Jobs
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecentJobs />
  </section>
);


export default withRouter(HomePage);
