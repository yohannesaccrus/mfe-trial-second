import React                       from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppMarketing from './app/marketing'

import Header from './components/header'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <AppMarketing />
      </div>
    </Router>
  )
}

export default App

