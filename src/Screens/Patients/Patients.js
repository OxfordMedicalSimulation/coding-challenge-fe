import React, { useState } from 'react'

import AuthDialog from 'Shared/AuthDialog'

import { Box, Typography } from '@material-ui/core'

const Patients = () => {
  const [auth, setAuth] = useState(false)

  return (
    <Box mx="auto" maxWidth={800}>
      <AuthDialog
        visible={!auth}
        bodyMessage="Please take a seat while you're waiting."
      />
      {auth && (
        <Typography variant="h4" align="center">
          Patients list
        </Typography>
      )}
    </Box>
  )
}

export default Patients
