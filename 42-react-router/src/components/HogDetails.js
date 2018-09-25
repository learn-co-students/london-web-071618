import React from 'react'

import { Link } from 'react-router-dom'

const greasedImage = "https://www.texasrefinery.com/wp-content/uploads/2015/06/drip-product-desc-icon.png"
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const HogDetails = (props) => {

  console.log('HogDetail props:', props)
  console.log('Hog ID: ', props.match.params.name)

  const hog = props.hogs.find(hog => hog.name.toLowerCase() === props.match.params.name.toLowerCase())

  console.log('Found hog:', hog)

  return (
    <div className="hog-details">
      <h1>{hog.name}</h1>
      <span>Specialty: {hog.specialty}</span>
      { hog.greased && <img src={greasedImage} /> }
      <p>Weight: {hog[weight]}</p>
      <Link to="/hogs"><button>BACK TO LIST</button></Link>
    </div>
  )
}

HogDetails.defaultProps = {
  hog: {
    name: 'No hog selected'
  }
}

export default HogDetails

// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }