import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = type => {
    this.setState({filters: { type }})
  }

  getPets = () => {
    const type = this.state.filters.type
    const url = type === 'all' ?
      '/api/pets' :
      `/api/pets?type=${type}`

    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))
  }

  adoptPet = id => {
    const pets = JSON.parse(JSON.stringify(this.state.pets))
    const foundPet = pets.find(pet => pet.id === id)
    foundPet.isAdopted = true
    this.setState({ pets })
  }

  render () {
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters
                changeFilterType={this.changeFilterType}
                getPets={this.getPets}
              />
            </div>
            <div className='twelve wide column'>
              <PetBrowser
                pets={this.state.pets}
                adoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
