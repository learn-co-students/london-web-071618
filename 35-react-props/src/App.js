import React, { Component } from 'react'

import Title from './Title.js'
import PaintingList from './PaintingList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <PaintingList />
      </div>
    )
  }
}

export default App
