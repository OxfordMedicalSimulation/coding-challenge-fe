import React from 'react'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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
    </ThemeProvider>
  )
}

export default PageLayout
