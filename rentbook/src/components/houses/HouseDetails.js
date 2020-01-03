import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const HouseDetails = props => {
	// const id = props.match.params.id // this will get the id off of the current house from react router info (automagically)
	// use destrucuring to get house and auth properties from the props
	const { house, auth } = props;
	//if user is not logged in, redirect
	if (!auth.uid) return <Redirect to='/signin' />;

	// check if you have a valid end point, i.e. a house to display
	if (house) {
		return (
			<div className='container section house-details'>
				<div className='card z-depth-0'>
					<div className='card-content'>
						<span className='card-title'>{house.address}</span>
						<p>{house.details}</p>
					</div>
					<div className='card-action grey lighten-4 grey-txt'>
						<div>
							Posted by {house.authorFirstName} {house.authorLastName}
						</div>
						<div>{moment(house.createdAt.toDate()).calendar()}</div>
					</div>
				</div>
			</div>
		);
	} else {
		// if not, display a blank page with <p> below
		return (
			<div className='container center'>
				<p>Loading house...</p>{" "}
				{/* this will also show up as the project is loading, while the promise being resolved*/}
			</div>
		);
	}
};

// first param for the HOC 'connect' below
// It connect the redux store to SingIn's props to have access to the central state
const mapStateToProps = (state, ownProps) => {
	// onwProps refers to this components' props that we are passing
	// to this function before we attach anyting to it using the 'connect' HOC
	// in the 'compose' below
	//console.log(state);
	const id = ownProps.match.params.id; // id is what we get from react router (by directing from path: /house/:id)
	const houses = state.firestore.data.houses; // houses: object whose properties' names are ids from "houses" collection in the firestore
	const house = houses ? houses[id] : null; // house: object whose properties are the document's detail that matches the id in the path
	return {
		house: house, // return the house if it exists or null if it doesn't
		auth: state.firebase.auth
	};
};
// connecting this component to both, redux and firestore to display the proper data for each house
export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "houses" }])
)(HouseDetails);
