import React, { Component } from 'react'
import HouseList from '../houses/HouseList'
import { connect } from 'react-redux'

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
  return {
    houses: state.house.houses
  }
}
export default connect(mapStateToProps)(Dashboard);