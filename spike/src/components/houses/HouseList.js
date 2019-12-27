import React from "react";
import HouseSummary from "./HouseSummary";
import { Link } from "react-router-dom";

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
