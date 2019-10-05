import React from 'react'

const HouseSummary = ({house}) => {
  return(
    <div className="card z-depth-0 house-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{house.address}</span>
        <p>Poseted by {house.authorFirstName} {house.authorLastName}</p>
        <p className="grey-text">The Date 01/1/1991</p>
      </div>
    </div>
  )
}

export default HouseSummary
