import React                            from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './pages/Landing'
import Pricing from './pages/Pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'appMarketing'
})

export default () => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
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