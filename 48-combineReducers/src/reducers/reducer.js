import { combineReducers } from 'redux'

import sushis from './sushis'
import eatenSushi from './eatenSushi'
import money from './money'
import currentIndex from './currentIndex'

export default combineReducers({
  sushis,
  eatenSushi,
  money,
  currentIndex
})
