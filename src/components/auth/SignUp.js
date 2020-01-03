import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

// This is a container component. Thus, it will be of a class type
// which will use a state to store data
class SignUp extends Component {
	// store the new user data
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	};
	// update the state as the new user enters the data
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		//console.log(e);
	};
	// on submit, use the attached prop 'signUp' to dispatch the action: singUp(newUser)
	// this action is imported above from 'authActions'
	handleSubmit = e => {
		e.preventDefault();
		this.props.signUp(this.state);
	};
	render() {
		// after 'connect' below is called, we use destructuring to access the central state
		// from the redux store to access auth and authError properties
		const { auth, authError } = this.props;
		// if signed-in users try to access the singUp page, route guarding will redirect them to Dashboard
		// When new users sign up, which will get signed in if they succeed, they also redirect to Dashboard
		if (auth.uid) return <Redirect to='/' />;

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Sign Up</h5>
					<div className='input-field'>
						<label htmlFor='firstName'>First Name</label>
						<input type='text' id='firstName' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='lastName'>Last Name</label>
						<input type='text' id='lastName' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
						<div className='red-text center'>
							{authError ? <p>{authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}
// first param for the HOC 'connect' below
// It connect the redux store to SingUp's props to have access to the central state
const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError // 'auth' is stored in the redux store (in the rootReducer),
		// which in turn provides us with authError, which is a property of the state of authReducer
	};
};
// second param for the HOC 'connect'
// It connects a dispatch, (dispatch(signUp(newUser)) to SignUp's props
const mapDispatchToProps = dispatch => {
	return {
		signUp: newUser => dispatch(signUp(newUser))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
