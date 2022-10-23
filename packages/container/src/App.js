import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import AppMarketing from './app/marketing'
import AppAuth      from './app/auth'

import Header from './components/header'

const generateClassName = createGenerateClassName({
  productionPrefix: 'appContainer'
})

const App = () => {
  return (
    <Router>
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <p>test</p>
          <Switch>
            <Route path="/auth" component={AppAuth} />
            <Route path="/" component={AppMarketing} />
          </Switch>
        </StylesProvider>
      </div>
    </Router>
  )
}

export default App

