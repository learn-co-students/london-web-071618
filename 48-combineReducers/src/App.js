import React, { Component } from 'react'
import { connect } from 'react-redux'

import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

import * as actions from './actionCreators'

// Endpoint!
const API = 'http://localhost:3000/sushis'

class App extends Component {
  state = {
    eatenSushis: [],
    money: 100,
    currentIndex: 0
  }

  nextFourSushis = () => {
    const currentIndex = this.state.currentIndex + 4 >= this.state.sushis.length
      ? 0
      : this.state.currentIndex + 4

    this.setState({ currentIndex })
  }

  eatSushi = sushi => {
    if (this.isSushiEaten(sushi)) return
    if (this.state.money - sushi.price < 0) return

    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi],
      money: this.state.money - sushi.price
    })
  }

  isSushiEaten = sushi => {
    return this.state.eatenSushis.includes(sushi)
  }

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }))
  }

  componentDidMount () {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.props.fetchSushis(sushis))
  }

  render () {
    const { currentIndex, money, eatenSushis } = this.state
    const { sushis } = this.props
    return (
      <div className='app'>
        <SushiContainer
          sushis={sushis.slice(currentIndex, currentIndex + 4)}
          nextFourSushis={this.nextFourSushis}
          eatSushi={this.eatSushi}
          isSushiEaten={this.isSushiEaten}
        />
        <Table
          money={money}
          eatenSushis={eatenSushis}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sushis: state.sushis
})

const mapDispatchToProps = dispatch => ({
  fetchSushis: sushis => dispatch(actions.fetchSushis(sushis))
})

console.log('actions:', actions)

export default connect(mapStateToProps, actions)(App)
