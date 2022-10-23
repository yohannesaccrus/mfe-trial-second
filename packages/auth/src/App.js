import React                     from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signin from './pages/auth/signin'
import Signup from './pages/auth/signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'appAuth'
})

export default ({ history }) => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </>
  )
}