import React from 'react'

import Painting from './Painting'
import paintings from './paintings'

class PaintingList extends React.Component {
  constructor() {
    super()
    this.state = { paintings: paintings, todos: [] }
  }

  addPainting = () => {
    const newPainting = {
      title: 'Pikachu',
      artist: { name: 'Pokemon' },
      image: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png'
    }
    this.setState({ paintings: [newPainting, ...this.state.paintings] })
  }

  render() {
    return <div className="painting-list">
      <button onClick={this.addPainting}>ADD PAINTING!</button>
      {
        this.state.paintings.map(painting =>
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
