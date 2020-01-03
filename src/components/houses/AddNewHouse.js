import React, { Component } from "react";
import { connect } from "react-redux";
import { addHouse } from "../../store/actions/houseActions";
import { Redirect } from "react-router-dom";

// This is a container component. Thus, it will be of a class type
// which will use a state to store data
class AddNewHouse extends Component {
	state = {
		address: "",
		price: "",
		preference: "",
		details: ""
	};
	// update the state as the user enters data
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	// on submit, use the attached prop 'addHouse' to dispatch the action: addHouse(house)
	// this action is imported above from 'houseActions'
	handleSubmit = e => {
		e.preventDefault();
		this.props.addHouse(this.state);
		this.props.history.push("/"); // redirect the user to Dashboard after they added the house
	};
	render() {
		// after 'connect' below is called, we use destructuring to access the central state
		// from the redux store to access the auth prop
		const { auth } = this.props;
		// if there exist no signed-in user, use route gaurding
		// to redirect to sign-in page
		if (!auth.uid) return <Redirect to='/signin' />;

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Add House</h5>
					<div className='input-field'>
						<label htmlFor='address'>Address</label>
						<input type='text' id='address' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='address'>Price</label>
						<input type='text' id='price' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='preference'>Sharing Preference</label>
						<input type='text' id='preference' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='details'>More Details</label>
						<textarea
							id='details'
							className='materialize-textarea'
							onChange={this.handleChange}></textarea>
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-0'>Add</button>
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
		auth: state.firebase.auth
	};
};

// second param for the HOC 'connect'
// It connects a dispatch, (dispatch(signIp(creds)) to AddNewHouse's props
const mapDispatchToProps = dispatch => {
	return {
		addHouse: house => dispatch(addHouse(house))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewHouse);
