import React                            from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { StylesProvider } from '@material-ui/core/styles'

import Landing from './pages/Landing'
import Pricing from './pages/Pricing'

export default () => {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/pricing" component={Pricing} exact />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  )
}