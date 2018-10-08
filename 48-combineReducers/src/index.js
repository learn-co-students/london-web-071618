import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import './index.css'
import App from './App'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

// console.log('state : ', store.getState())

// const sushi = {
//   'id': 1,
//   'name': 'Tako Supreme',
//   'img_url': 'https://sushistickers.com/img/sushi-slice_99.png',
//   'price': 20,
//   'created_at': '2018-07-27T18:53:16.241Z'
// }

// store.dispatch({ type: 'EAT_SUSHI', payload: sushi })

// console.log('state : ', store.getState())

// console.log('state : ', store.getState())