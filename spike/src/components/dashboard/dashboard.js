import React, { Component } from 'react'
import HouseList from '../houses/HouseList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render(){
    //console.log(this.props)
    const { houses, auth } = this.props;
    //if user is not logged in, redirect
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container center">
       <HouseList houses={houses} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    houses: state.firestore.ordered.houses,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'houses' }
  ])
)(Dashboard)

    