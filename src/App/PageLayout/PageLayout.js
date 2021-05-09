import React from 'react'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Header from 'Shared/Header'
import Snackbar from 'Shared/Snackbar'

import { Route } from 'Router'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(255, 255, 255, 0.7)',
    },
    secondary: {
      main: '#404040',
    },
  },
})

const PageLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Route />
      <Snackbar />
    </ThemeProvider>
  )
}

export default PageLayout
