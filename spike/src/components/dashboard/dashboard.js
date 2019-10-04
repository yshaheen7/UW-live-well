import React, { Component } from 'react'
import HouseList from '../houses/HouseList'

class Dashboard extends Component {
  render(){
    return (
      <div className="dashboard container center">
       <HouseList />
      </div>
    )
  }
}

export default Dashboard;