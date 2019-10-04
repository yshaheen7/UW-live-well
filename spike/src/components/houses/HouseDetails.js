import React from 'react'

const HouseDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section house-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">House Ttitle {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos nesciunt id, possimus rerum sequi vel voluptatum molestiae adipisci, ad accusantium ab porro quo facere recusandae non accusamus cumque amet.</p>
        </div>
        <div className="card-action grey lighten-4 grey-txt">
          <div>Posted by USER</div>
          <div>1/1/1990</div>
        </div>
      </div>
    </div>
  )
}

export default HouseDetails