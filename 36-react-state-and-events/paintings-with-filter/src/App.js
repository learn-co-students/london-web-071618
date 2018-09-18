import React, { Component } from 'react'

import Title from './Title.js'
import PaintingList from './PaintingList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showPaintings: false }
  }

  togglePaintings = () => {
    // this.state.showPaintings // true or false
    // this.state.showPaintings = true // WRONG!
    this.setState({ showPaintings: !this.state.showPaintings })
  }

  render() {
    console.log('State :', this.state)
    return (
      <div className="App">
        <Title />
        <button onClick={this.togglePaintings}>TOGGLE PAINTINGS</button>
        {
          this.state.showPaintings ? <PaintingList /> : 'Paintings are hidden!'
        }
      </div>
    )
  }
}

export default App
