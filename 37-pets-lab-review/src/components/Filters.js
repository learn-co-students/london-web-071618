import React from 'react'

const Filters = props =>
  <div className='ui form'>
    <h3>Animal type</h3>
    <div className='field'>
      <select
        onChange={event => props.changeFilterType(event.target.value)}
        name='type'
        id='type'
      >
        <option value='all'>All</option>
        <option value='cat'>Cats</option>
        <option value='dog'>Dogs</option>
        <option value='micropig'>Micropigs</option>
      </select>
    </div>

    <div className='field'>
      <button
        className='ui secondary button'
        onClick={props.getPets}
      >
        Find pets
      </button>
    </div>
  </div>

export default Filters
