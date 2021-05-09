import React from 'react'

import { useSnackbarData, useSnackbarActions } from 'ReduxStore/snackbar/hooks'

import { Snackbar as MuiSnackbar } from '@material-ui/core'
import { Alert as MuiAlert } from '@material-ui/lab'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Snackbar = () => {
  const { open, message, type } = useSnackbarData()
  const { hideSnack } = useSnackbarActions()

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => hideSnack()}
    >
      <Alert onClose={() => hideSnack()} severity={type}>
        {message}
      </Alert>
    </MuiSnackbar>
  )
}

export default Snackbar
