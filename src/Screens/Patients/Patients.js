import React from 'react'

import { PatientList } from './components'

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

      <Box mb={2} />
      <Typography variant="h4" align="center">
        Patient List
      </Typography>
      <Box mb={4} />

      {isAuthenticated && <PatientList />}
    </Box>
  )
}

export default Patients
