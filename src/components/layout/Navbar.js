import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

// in functinal components, we have to recieve in the props as arguments
// unlike class component where you have access to props automatically
// here, we are using destructuring un-directly to get the 'auth' and 'profile' off of props
const Navbar = props => {
	// destructure to get auth and profile props.
	//Pass profile down to signedIn links (for displaying initials)
	const { auth, profile } = props;
	// if there exist a user, then show the 'SignedInLinks' component and pass it the 'profile' prop
	// otherwies, show 'SignedOutLinks' component
	const links = auth.uid ? (
		<SignedInLinks profile={profile} />
	) : (
		<SignedOutLinks />
	);
	return (
		<nav className='nav-wrapper grey darken-3'>
			<div className='container'>
				<Link to='/' className='brand-log'>
					UW - Live Well
				</Link>
				{links}
			</div>
		</nav>
	);
};

// first param for the HOC 'connect' below
// It connect the redux store to Navbar's props to have access to the central state
const mapStateToProps = state => {
	//console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(Navbar);
