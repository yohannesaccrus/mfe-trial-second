import React                     from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './pages/landing'
import Pricing from './pages/pricing'

export default ({ history }) => {

  const handleClassName = createGenerateClassName({
    productionPrefix: 'appMarketing',
  })
  
  return (
    <div>
      <StylesProvider generateClassName={handleClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
