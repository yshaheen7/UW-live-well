import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/addhouse'>Add a House</NavLink></li>
      <li><NavLink to='/'>Log out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
  )
}

export default SignedInLinks 
