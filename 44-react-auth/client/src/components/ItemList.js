import React from 'react'

import API from '../adapters/API'
import Item from './Item'

class ItemList extends React.Component {
  state = {
    items: []
  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  componentDidMount() {
    API.getItems()
      .then(items => {
        this.setState({ items })
      })
  }

  render () {
    const { items } = this.state
    const { currentUser, history } = this.props

    if (!currentUser) {
      history.push('/signin')
    }

    return (
      <div style={this.style} className='user-list'>
        {
          items.map(item =>
            <Item key={item.id} item={item} />
          )
        }
      </div>
    )
  }
}

export default ItemList
