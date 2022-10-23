import React, { Suspense, useState, useEffect, lazy } from 'react'
import { Router, Route, Switch, Redirect }            from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import { createBrowserHistory } from 'history'

import Loader from './components/loader'
import Header from './components/header'

const history = createBrowserHistory()

export default () => {
  const [isAuth, setIsAuth] = useState(false)

  const AppMarketing = lazy(() => import('./app/marketing'))
  const AppAuth      = lazy(() => import('./app/auth'))
  const AppDashboard = lazy(() => import('./app/dashboard'))

  const generateClassName = createGenerateClassName({
    productionPrefix: 'appContainer',
  })

  const handleSignOut = () => {
    setIsAuth(false)
  }

  const handleAuth = (authType) => {
    setIsAuth(true)
    console.log(authType, 'AuthType')
  }

  useEffect(() => {
    if (isAuth) {
      history.push('/dashboard')
    }
  }, [isAuth])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            handleSignOut={handleSignOut}
            isAuth={isAuth}
          />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/auth">
                <AppAuth handleAuth={handleAuth} />
              </Route>
              <Route path="/dashboard">
                {!isAuth && <Redirect to="/" />}
                <AppDashboard />
              </Route>
              <Route path="/" component={AppMarketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}


