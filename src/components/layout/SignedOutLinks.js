import React from "react";
import { NavLink } from "react-router-dom";

// this is a functinal components, where we do not need to use
// state or take in props either
const SignedOutLinks = () => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/signup'>Sign up</NavLink>
			</li>
			<li>
				<NavLink to='/signin'>Log in</NavLink>
			</li>
		</ul>
	);
};

export default SignedOutLinks;
