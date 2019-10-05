import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const HouseDetails = (props) => {
  //getting the house property from the props and store in that constant
  //then check if you have an output, and return some JSX if you have 
  //any houses
  const { house } = props;
  if (house) {
    return(
      <div className="container section house-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ house.address }</span>
            <p>{ house.details }</p>
          </div>
          <div className="card-action grey lighten-4 grey-txt">
            <div>Posted by { house.authorFirstName } { house.authorLastName }</div>
            <div>1/1/1990</div>
          </div>
        </div>
      </div>
    )} else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
     )
} }

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const houses = state.firestore.data.houses;
  const house = houses ? houses[id] : null
  return {
    house: house
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'houses'}
  ])
)(HouseDetails)