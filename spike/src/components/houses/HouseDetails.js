import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


const HouseDetails = (props) => {
  //getting the house property from the props and store in that constant
  //then check if you have an output, and return some JSX if you have 
  //any houses
  const { house, auth } = props;
  //if user is not logged in, redirect
  if(!auth.uid) return <Redirect to='/signin' />

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
            <div>{ moment(house.createdAt.toDate()).calendar() }</div>
          </div>
        </div>
      </div>
    )} else {
    return (
      <div className="container center">
        <p>Loading house...</p>
      </div>
     )
} }

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const houses = state.firestore.data.houses;
  const house = houses ? houses[id] : null
  return {
    house: house,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'houses'}
  ])
)(HouseDetails)