import React from 'react'

const HouseSummary = ({house}) => {
  return(
    <div className="card z-depth-0 house-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{house.title}</span>
        <p>Poseted by "USER"</p>
        <p className="grey-text">The Date 01/1/1991</p>
      </div>
    </div>
  )
}

export default HouseSummary
