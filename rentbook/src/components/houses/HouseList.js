import React from "react";
import HouseSummary from "./HouseSummary";
import { Link } from "react-router-dom";

// in functinal components, we have to recieve in the props as arguments
// unlike class component where you have access to props automatically
// here, we are using destructuring directly to get the 'houses' off of props
const HouseList = ({ houses }) => {
	return (
		<div className='house-list section'>
			{houses &&
				houses.map(house => {
					return (
						<Link to={"/house/" + house.id} key={house.id}>
							<HouseSummary house={house} />
						</Link>
					);
				})}
		</div>
	);
};

export default HouseList;
