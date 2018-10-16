import React, { Component } from 'react'
import './App.css'

import { Route, withRouter } from 'react-router-dom'

import API from './adapters/API'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import ItemList from './components/ItemList'

class App extends Component {
  state = {
    currentUser: undefined
  }

  signin = username => {
    this.setState({ currentUser: username })
    this.props.history.push('/users')
  }

  signout = () => {
    this.setState({ currentUser: undefined })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate(token)
        .then(data => {
          if (data.username) {
            this.signin(data.username)
          }
        })
    }
  }

  render () {
    const { signin, signout } = this
    const { currentUser } = this.state
    return (
      <div className='App'>
        <Header currentUser={currentUser} signout={signout} />
        <Route path='/signin' component={props => <SignInForm signin={signin} {...props} />} />
        <Route path='/users' component={props => <ItemList currentUser={currentUser} {...props} />} />
      </div>
    )
  }
}

export default withRouter(App)
