import React from 'react'

const SignUp = () => {
  return (
    <div className="CreateUserPage">
	  <h2 className="title">Create New User</h2>
	    <form method="post" action="/signup">
	      <div className="field">
		      <label>Username: </label>
		      <input
		        className="input"
		        type="text" 
		        name="username"
		        placeholder="username"
		      />
        </div>
	          
		    <div className="field">
		      <label>Password: </label>
	        <input
	          className="input"
	          type="text"
	          name="password"
	          placeholder="password"
	        />
        </div>
              
        <div className="field">
          <label>Full Name: </label>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="John Doe"
          />
        </div>
              
        <div className="field">
          <label>Description: </label>
          <input
            className="input"
            type="text"
            name="description"
            placeholder="I am a web developer..."
          />
        </div>

        <div className="field">
          <label>Zipcode: </label>
          <input
            className="input"
            type="text"
            name="zipcode"
            placeholder="10011"
          />
        </div>

        <div className="field">
          <label>Desired Industry: </label>
          <input
            className="input"
            type="text"
            name="industryWanted"
            placeholder="Software Development"
          />
        </div>

        <div className="field">
          <label>Desired Title: </label>
          <input
            className="input"
            type="text"
            name="titleWanted"
            placeholder="Junior Web Developer"
          />
        </div>
              
        <div className="control">
	      	<button type="submit" className="button">Add User</button>
	      </div>
      </form>
	  </div>
  )
}
	
export default SignUp;
