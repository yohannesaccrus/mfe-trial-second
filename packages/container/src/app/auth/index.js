import React, { useRef, useEffect } from 'react'
import { useHistory }               from 'react-router-dom'

import { mount } from 'appAuth/AppAuth'

export default () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { handleMainNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      handleNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })
    history.listen(handleMainNavigate)
  }, [])

  return <div ref={ref} />
}