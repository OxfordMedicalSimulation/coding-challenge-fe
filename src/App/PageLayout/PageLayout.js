import React from 'react'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Snackbar from 'Shared/Snackbar'

import { Route } from 'Router'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const PageLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route />
      <Snackbar />
    </ThemeProvider>
  )
}

export default PageLayout
