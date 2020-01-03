import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

// in functinal components, we have to recieve in the props as arguments
// unlike class component where you have access to props automatically
const SignedInLinks = props => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/addhouse'>Add a House</NavLink>
			</li>
			<li>
				<a onClick={props.signOut}>Log out</a>{" "}
				{/* we use just an anchor tag here, 
				<link> is not used b/c we are not directing the user anywhere */}
			</li>
			<li>
				<NavLink to='/' className='btn btn-floating pink lighten-1'>
					{props.profile.initials}
				</NavLink>
			</li>
		</ul>
	);
};

// second param for the HOC 'connect' below
// It connect the redux store to SingedInLinks' props to have access to redux action dispatch methods
const mapDispcthToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	};
};

// connect takes mapStateToProps as the first argument, if we dont have it
// we have to pass null
export default connect(null, mapDispcthToProps)(SignedInLinks);
