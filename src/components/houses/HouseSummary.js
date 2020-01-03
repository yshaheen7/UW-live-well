import React from "react";
import moment from "moment"; // used to format the date (lookup moment.js for the different formats)

// in functinal components, we have to recieve in the props as arguments
// unlike class component where you have access to props automatically
// here, we are using destructuring directly to get 'house' off of props
const HouseSummary = ({ house }) => {
	return (
		<div className='card z-depth-0 house-summary'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title'>{house.address}</span>
				<p>
					Poseted by {house.authorFirstName} {house.authorLastName}
				</p>
				<p className='grey-text'>
					{moment(house.createdAt.toDate()).calendar()}
				</p>
			</div>
		</div>
	);
};

export default HouseSummary;
