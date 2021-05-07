import React from 'react'

import { Provider } from 'react-redux'
import { store } from 'ReduxStore'

import PageLayout from './PageLayout'
import Router from 'Router'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <PageLayout />
      </Router>
    </Provider>
  )
}

export default App
