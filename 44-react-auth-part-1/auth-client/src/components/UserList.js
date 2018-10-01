import React from 'react'

import User from './User'

class UserList extends React.Component {
  state = {
    users: [
      {username: 'User'},
      {username: 'Another User'},
      {username: 'One More User'}
    ]
  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  render () {
    const { users } = this.state
    const { currentUser, history } = this.props

    if (!currentUser) {
      history.push('/signin')
    }

    return (
      <div style={this.style} className='user-list'>
        {
          users.map(user =>
            <User key={user.username} user={user} />
          )
        }
      </div>
    )
  }
}

export default UserList
