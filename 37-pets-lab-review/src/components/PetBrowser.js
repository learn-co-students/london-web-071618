import React from 'react'

import Pet from './Pet'

const PetBrowser = props =>
  <div className='ui cards'>
    {
      props.pets.map(pet =>
        <Pet pet={pet} adoptPet={props.adoptPet} key={pet.id} />
      )
    }
  </div>

export default PetBrowser
