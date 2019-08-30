import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from '@reducers'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Main } from '@pages'
import fetchMiddleware from '@middlewares/fetch'
import Cookies from 'js-cookie'
import './css/common.less'
import { Actions } from '@constants'

const createHistory = require("history").createBrowserHistory

const store = createStore(combineReducers(reducers), applyMiddleware(fetchMiddleware))
const username = Cookies.get('username')
if (username) {
  store.dispatch({
    type: Actions.LOGIN_INIT
  })
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <Switch>
        <Route key='login' component={Login} exact={true} path='/login' />
        <Route key='main' component={Main} path='/' />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('app')
)