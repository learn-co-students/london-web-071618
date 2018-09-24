import React from 'react'

const greasedImage = "https://www.texasrefinery.com/wp-content/uploads/2015/06/drip-product-desc-icon.png"
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const HogDetails = ({ hog, deselectHog }) =>
  <div className="hog-details">
    <h1>{hog.name}</h1>
    <span>Specialty: {hog.specialty}</span>
    { hog.greased && <img src={greasedImage} /> }
    <p>Weight: {hog[weight]}</p>
    <button onClick={deselectHog}>BACK TO LIST</button>
  </div>

export default HogDetails

// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }