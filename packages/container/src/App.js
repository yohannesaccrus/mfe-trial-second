import React, { Suspense, lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import Header from './components/header'
import Loader from './components/loader'

export default () => {
  const history = createBrowserHistory()

  const AppAuth      = lazy(() => import('./app/auth'))
  const AppMarketing = lazy(() => import('./app/marketing'))

  const handleClassName = createGenerateClassName({
    productionPrefix: 'appContainer',
  })

  return (
    <Router history={history}>
      <StylesProvider generateClassName={handleClassName}>
        <div>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/auth" component={AppAuth} />
              <Route path="/" component={AppMarketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}

