import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import { Route, Switch } from 'react-router-dom'

import HogList from './HogList'
import HogDetails from './HogDetails'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
class App extends Component {

  state = {
    hogs: hogs,
    showGreasedOnly: false,
    sortBy: ''
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

  render() {
    const { hogs, showGreasedOnly } = this.state
    const filteredHogs = showGreasedOnly ?
      hogs.filter(hog => hog.greased) :
      hogs
    const sortedHogs = this.sortHogs(filteredHogs)


    return (
      <div className="App">
          < Nav />
          <div className="buttons">
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
            <Route exact path="/hogs" component={props => <HogList hogs={sortedHogs} selectHog={this.selectHog} {...props} />} />
            <Route path="/hogs/:name" component={props => <HogDetails hogs={hogs} deselectHog={this.deselectHog} {...props} /> } />
          </Switch>
      </div>
    )
  }
}

export default App;
