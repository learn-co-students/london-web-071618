import React from 'react'

const Hog = ({ hog, selectHog }) => {
  const fileName = hog.name
    .toLowerCase()
    .replace(/\s/g, '_')

  const imageUrl = require(`../hog-imgs/${fileName}.jpg`)

  return (
    <div onClick={() => selectHog(hog)} className='ui eight wide column'>
      <p>{hog.name}</p>
      <img src={imageUrl} />
    </div>
  )
}

export default Hog
