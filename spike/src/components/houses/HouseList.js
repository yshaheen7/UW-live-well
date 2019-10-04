import React from 'react'
import HouseSummary from './HouseSummary'

const HouseList = ({houses}) => {
  return (
    <div className="house-list section">
      {houses && houses.map(house =>{ 
        return (
          <HouseSummary house={house} key={house.id} />
        )
      })}
    
    </div>
  )
}

export default HouseList;