import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './containers/App'
import Program from './containers/Program'
import Datatable from './containers/Datatable'
import configureStore from './store/configureStore'
import './css/index.css'
import './css/styles.css'
import 'font-awesome-sass-loader'
import 'jquery'
import 'bootstrap'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/salit" component={Datatable}/>
      <Route path="/ohjelma" component={Program}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
