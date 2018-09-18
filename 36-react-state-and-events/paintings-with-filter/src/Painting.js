import React from 'react'

const Painting = props => {
  // console.log('Props:', props)
  // props.title = 'asdfg' // wrong!
  return <div className="painting">
    <h3>Title: {props.title}</h3>
    <h4>Author: {props.author}</h4>
    <img src={props.image_url} alt="" />
  </div>
}

export default Painting
