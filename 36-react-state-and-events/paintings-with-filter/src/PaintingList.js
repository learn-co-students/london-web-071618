import React from 'react'

import Painting from './Painting'
import paintings from './paintings'

class PaintingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paintings: paintings,
      filterTerm: ''
    }
  }

  changeFilter = (newFilter) => {
    this.setState({ filterTerm: newFilter })
  }

  addPainting = () => {
    const newPainting = {
      title: 'Pikachu',
      artist: { name: 'Pokemon' },
      image: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png'
    }
    this.setState({ paintings: [...this.state.paintings, newPainting] })
  }

  render() {
    console.log('State:', this.state)
    return <div className="painting-list">
      <button onClick={this.addPainting}>ADD PAINTING!</button>
      <button onClick={() => this.changeFilter('Portrait')}>SHOW PORTRAITS!</button>
      <input onChange={event => this.changeFilter(event.target.value)} />
      {
        this.state.paintings
          .filter(painting => painting.title.includes(this.state.filterTerm))
          .map(painting =>
          <Painting
            title={painting.title}
            author={painting.artist.name}
            image_url={painting.image}
        />)
      }
    </div>
  }

}
  



export default PaintingList
