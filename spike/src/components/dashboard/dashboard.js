import React, { Component } from 'react'
import HouseList from '../houses/HouseList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render(){
    //console.log(this.props)
    const { houses } = this.props;

    return (
      <div className="dashboard container center">
       <HouseList houses={houses} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    houses: state.firestore.ordered.houses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'houses' }
  ])
)(Dashboard)