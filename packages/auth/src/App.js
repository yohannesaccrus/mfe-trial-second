import React                     from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import Signin from './pages/signin'
import Signup from './pages/signup'

export default ({ history, onSignIn }) => {

  const handleClassName = createGenerateClassName({
    productionPrefix: 'appAuth',
  })
  
  return (
    <div>
      <StylesProvider generateClassName={handleClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
