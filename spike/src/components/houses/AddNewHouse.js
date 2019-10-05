import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addHouse } from '../../store/actions/houseActions'
import { Redirect } from 'react-router-dom'

class AddNewHouse extends Component {
  state = {
    address:'',
    details: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addHouse(this.state)
  }
  render() {
    const { auth } = this.props;
    //if user is not logged in, redirect
    if(!auth.uid) return <Redirect to='/signin' />
    
    return(
      <div className ="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add House</h5>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="details">Details</label>
            <textarea id="details" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addHouse: (house) => dispatch(addHouse(house))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewHouse)
