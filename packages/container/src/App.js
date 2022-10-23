import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import AuthApp      from './app/auth'
import MarketingApp from './app/marketing'

import Header from './components/header'

const history = createBrowserHistory()

const handleClassName = createGenerateClassName({
  productionPrefix: 'appContainer',
})

export default () => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={handleClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </Router>
  )
}

