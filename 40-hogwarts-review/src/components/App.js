import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogList from './HogList'
import HogDetails from './HogDetails'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
class App extends Component {
  state = {
    hogs: hogs,
    selectedHog: undefined,
    showGreasedOnly: false,
    sortBy: ''
  }

  selectHog = (hog) => {
    this.setState({ selectedHog: hog })
  }

  deselectHog = () => {
    this.setState({ selectedHog: undefined })
  }

  toggleGreased = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  sortHogs = (hogs) => {
    hogs = [...hogs]

    switch (this.state.sortBy) {
      case 'name':
        return hogs.sort((hogA, hogB) => {
          if (hogA.name > hogB.name) return 1
          if (hogB.name > hogA.name) return -1
          return 0
        })
      case 'weight':
        return hogs.sort((hogA, hogB) => hogA[weight] - hogB[weight])
      default:
        return hogs
    }
  }

  sortHogsBy = sortType => {
    this.setState({ sortBy: sortType })
  }

  render () {
    const { selectedHog, hogs, showGreasedOnly } = this.state
    const filteredHogs = showGreasedOnly
      ? hogs.filter(hog => hog.greased)
      : hogs
    const sortedHogs = this.sortHogs(filteredHogs)

    return (
      <div className='App'>
        <Nav />
        <div className='buttons'>
          <button onClick={this.toggleGreased}>
              SHOW GREASED ONLY: {showGreasedOnly ? 'ON' : 'OFF'}
          </button>
          <select onChange={(event) => this.sortHogsBy(event.target.value)}>
            <option value=''>Sort by...</option>
            <option value='weight'>Weight</option>
            <option value='name'>Name</option>
          </select>
        </div>
        <br />
        <br />
        <Switch>
          <Route path='/hogs/:id' component={props => <HogDetails hog={selectedHog} deselectHog={this.deselectHog} {...props} />} />
          <Route path='/' component={props => <HogList hogs={sortedHogs} selectHog={this.selectHog} {...props} />} />
        </Switch>
        {
          selectedHog
            ? <HogDetails hog={selectedHog} deselectHog={this.deselectHog} />
            : <HogList hogs={sortedHogs} selectHog={this.selectHog} />
        }
      </div>
    )
  }
}

export default App
