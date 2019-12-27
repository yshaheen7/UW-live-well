import React from "react";
import moment from "moment";

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
