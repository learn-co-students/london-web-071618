import React from 'react'

import Hog from './Hog'

const HogList = ({ hogs, selectHog }) =>
  <div className='ui grid container hog-list'>
    {
      hogs.map(hog =>
        <Hog hog={hog} selectHog={selectHog} />
      )
    }
  </div>

export default HogList
