import React, {Component} from 'react'
	
	class CreateUserPage extends Component {
	
	  constructor(){
	    super()
	    //sets the initial state via the constructor!
	    this.state = {
	      user: []
	    }
	  }
	  
	  onFormChange = (event) => {
	    this.setState({
	      user: event.target.value
	    })
	  }
	  
	  onFormSubmit = (event) => {
	    event.preventDefault()
	    let newUser = this.state.user;
	    this.props.createBuilding(newUser)
	    this.setState({
	      newUser: newUser
	    })
	  }
	  
	  render(){
	    return (
	      <div className="CreateUserPage">
	      <h2 className="title">Create New User</h2>
	        <form onSubmit={ this.onFormSubmit } onChange={ this.onFormChange } id="bldgForm">
	        	<div className="field">
		        	<label htmlFor="username">Username: </label>
		          <input
		            type="text" 
		            name="username"
		            id="newUserUsername" 
		            placeholder="username" 
		            value={this.state.user}
		          />
	          </div>
	          
		       <div className="field">
		           <label htmlFor="password">Password: </label>
	              <input
	                className="input"
	                type="text"
	                name="password"
	                placeholder="password"
	                value={this.state.password}
	              />
              </div>
              
              <div className="field">
                <label htmlFor="name">Full Name: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={this.state.fullName}
                />
              </div>
              
              <div className="field">
                <label htmlFor="description">Description: </label>
                <input
                  className="input"
                  type="text"
                  name="description"
                  placeholder="I am a web developer..."
                  value={this.state.description}
                />
              </div>

              <div className="field">
                <label htmlFor="zipcode">Zipcode: </label>
                <input
                  className="input"
                  type="text"
                  name="zipcode"
                  placeholder="10011"
                  value={this.state.zipcode}
                />
              </div>

              <div className="field">
                <label htmlFor="description">Desired Industry: </label>
                <input
                  className="input"
                  type="text"
                  name="industryWanted"
                  placeholder="Software Development"
                  value={this.state.industryWanted}
                />
              </div>

              <div className="field">
                <label htmlFor="description">Desired Title: </label>
                <input
                  className="input"
                  type="text"
                  name="titleWanted"
                  placeholder="Junior Web Developer"
                  value={this.state.titleWanted}
                />
              </div>
              
              <div className="control">
	          	<button type="submit" className="button">Add Building</button>
	          </div>
	        </form>
	      </div>
	    )
	  }
	}
	
	export default CreateUserPage;
