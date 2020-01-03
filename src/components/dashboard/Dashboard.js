import React, { Component } from "react";
import HouseList from "../houses/HouseList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"; // HOC to bind a firestore collection to
// react (in the redux store). We must have 'firestoreReducerthis' as a property
// in the rootReducer for it to work and sync up the firestore with the redux store
import { compose } from "redux";
import { Redirect } from "react-router-dom";

// This is a container component. Thus, it will be of a class type
// which will use a state to store data
class Dashboard extends Component {
	render() {
		//console.log(this.props);
		const { houses, auth } = this.props;
		//! if user is not logged in, redirect to??? this should be the list of houses
		// if there exist no signed-in user, use route gaurding
		// to redirect to sign-in page
		if (!auth.uid) return <Redirect to='/signin' />;

		return (
			<div className='dashboard container center'>
				<HouseList houses={houses} />
			</div>
		);
	}
}

// state here refers to the state of the redux store
// first param for the HOC 'connect' below
// It connect the redux store to SingIn's props to have access to the central state
const mapStateToProps = state => {
	console.log(state); // logging out the state object of the redux store (reflecting what we have in the rootReducer)
	return {
		houses: state.firestore.ordered.houses,
		auth: state.firebase.auth
	};
};

export default compose(
	// use compose to add more than one HOC
	connect(mapStateToProps),
	firestoreConnect([{ collection: "houses" }]) // whenever Dashboard renders, or the firestore changes,
	// it will induce the firestoreReducer in the 'firestore: ' redux state
	// to sync its data with the firestore's collection that we specified (i.e. houses)
)(Dashboard);
