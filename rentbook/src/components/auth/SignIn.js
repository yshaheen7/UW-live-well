import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

// This is a container component. Thus, it will be of a class type
// which will use a state to store data
class SignIn extends Component {
	// store the new user data
	state = {
		email: "",
		password: ""
	};
	// update the state as the user enters data
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		// console.log(e);
	};
	// on submit, use the attached prop 'signIn' to dispatch the action: singIn(creds)
	// this action is imported above from 'authActions'
	handleSubmit = e => {
		e.preventDefault();
		this.props.signIn(this.state);
	};
	render() {
		// after 'connect' below is called, we use destructuring to access the central state
		// from the redux store to access auth and authError properties
		const { authError, auth } = this.props;
		// if a signed-in users try to access the sign-page, use route gaurding
		// to redirect them dashbaord
		if (auth.uid) return <Redirect to='/' />;

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Sign In</h5>
					<div className='input-field'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-0'>Login</button>
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
// It connect the redux store to SingIn's props to have access to the central state
const mapStateToProps = state => {
	return {
		authError: state.auth.authError, // 'auth' is stored in the redux store (in the rootReducer),
		// which in turn provides us with authError, which is a property of the state of authReducer
		auth: state.firebase.auth
	};
};
// second param for the HOC 'connect'
// It connects a dispatch, (dispatch(signIp(creds)) to SignIn's props
const mapDispatchToProps = dispatch => {
	return {
		signIn: creds => dispatch(signIn(creds))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
