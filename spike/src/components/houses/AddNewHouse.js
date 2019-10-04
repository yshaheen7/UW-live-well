import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addHouse } from '../../store/actions/houseActions'

class AddNewHouse extends Component {
  state = {
    title:'',
    content: ''
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
    return(
      <div className ="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add House</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">House Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addHouse: (house) => dispatch(addHouse(house))
  }
}
export default connect(null, mapDispatchToProps)(AddNewHouse)
