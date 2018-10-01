import React from 'react'

import { Link } from 'react-router-dom'

const Hog = ({ hog }) => {

  const fileName = hog.name
    .toLowerCase()
    .replace(/\s/g, '_')

  const imageUrl = require(`../hog-imgs/${fileName}.jpg`)

  return (
    <Link to={`/hogs/${hog.name}`} >
      <div className="ui eight wide column">
        <p>{hog.name}</p>
        <img src={imageUrl} />
      </div>
    </Link>
  )
}

export default Hog
