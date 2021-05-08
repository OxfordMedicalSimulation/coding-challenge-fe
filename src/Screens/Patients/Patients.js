import React from 'react'

import { useIsAuthenticated } from 'ReduxStore/auth/hooks'
import AuthDialog from 'Shared/AuthDialog'

import { Box, Typography } from '@material-ui/core'

const Patients = () => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <Box mx="auto" maxWidth={800}>
      <AuthDialog
        visible={!isAuthenticated}
        bodyMessage="Please take a seat while you're waiting."
      />
      {isAuthenticated && (
        <Typography variant="h4" align="center">
          Patients list
        </Typography>
      )}
    </Box>
  )
}

export default Patients
