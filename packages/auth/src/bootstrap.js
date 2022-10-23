import React    from 'react'
import ReactDOM from 'react-dom'

import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

const mount = (el, { 
  initialPath,
  defaultHistory, 
  handleNavigate,
  handleAuth
}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })
  if (handleNavigate) {
    history.listen(handleNavigate)
  }
  ReactDOM.render(<App handleAuth={handleAuth} history={history} />, el)
  return {
    handleMainNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
