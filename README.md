![devjobhuntercover](https://media.git.generalassemb.ly/user/15886/files/8aec6264-d5e8-11e8-9200-397b3e0faaba)


## Scope:

DevJobHunter is a platform for developers to find employment based on location. Job seekers create a user profile in which recruiters can browse.  

Project Planning Presentation: https://docs.google.com/presentation/d/15pjrXg5F8wW64l_J2Is_juBt5S4iJJhT8FXnYBl1dAs/edit?usp=sharing


## Developers
- **Shaun Dawson**
- **Daniel Mackey**
- **Zachary Farber**

## User Stories:

-  As a Job Seeker, I would like to view jobs by zipcode, so that I can decide which job is best geographically for me.
-  As a Job Seeker, I would like to sign up with a user-name and password,so that my information is kept safe.
-  As a Job Seeker, I would like to view my saved jobs, so that I can follow up with potential employers.
-  As a Job Seeker, I would like to Delete my account, so that I can eliminate jobs I am no longer interested in.
-  As a Recruiter, I would like to have a username or password, so that only my company has access to our post.
-  As a Recruiter, I would like to Create a job posting, so that I can find job seekers.
-  As a Recruiter, I would like to Update a job posting, so that I can revise a job posting.
-  As a Recruiter, I would like to Delete a job posting, so that I can remove a posting once closed or filled.

## Technologies Used:
- Node.js / Express.js
- React 
- Postgres
- Sequelize
- Bulma
- Bloomer
- GitHub Jobs API

## Code Snippet Sample:

```
class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      zipCode: this.props.location.search.split('=')[1],
    };
  }

  componentDidMount() {
    this.getJobs();
  }

  async getJobs() {
    const apiEndpoint = 'https://jobs.github.com/positions.json?location=' + this.state.zipCode;
    const response = await axios.get(apiEndpoint);
    const jobs = response.data;
    console.log(jobs);
    this.setState({
      jobs,
    });
  }

  render() {
    return (
      <div className="Jobs">
        { this.state.jobs.map(jobs => (
          <div key={jobs.id}>

```


