import React                       from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import AppMarketing from './app/marketing'

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
          <AppMarketing />
        </StylesProvider>
      </div>
    </Router>
  )
}

export default App

