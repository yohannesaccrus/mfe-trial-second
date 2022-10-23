import React, { Suspense, useState, lazy } from 'react'
import { Router, Route, Switch }           from 'react-router-dom'
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
  const AppAuth = lazy(() => import('./app/auth'))

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
              <Route path="/" component={AppMarketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}


