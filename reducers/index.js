import { combineReducers } from 'redux'
import gyms from './gyms'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  gyms,
  routing: routerReducer
})

export default rootReducer
