import React, { useState } from 'react'

import { RegistrationForm } from './components'
import InfoDialog from 'Shared/InfoDialog'

import { Box, Typography } from '@material-ui/core'

const Home = () => {
  const [overlayState, setOverlayState] = useState(false)
  const completeSubmission = () => {
    setOverlayState(true)

    setTimeout(() => {
      setOverlayState(false)
    }, 2500)
  }

  return (
    <Box mx="auto" maxWidth={800}>
      <Typography variant="h4" align="center">
        First Aid Station Registration Form
      </Typography>

      <Box mb={4} />
      <Typography>
        Please fill in the form while you're waiting to be seen.
      </Typography>
      <Box mb={4} />

      <RegistrationForm onSubmissionComplete={completeSubmission} />
      <InfoDialog
        visible={overlayState}
        title="Thanks for registering"
        bodyMessage="Please take a seat while you're waiting."
      />
    </Box>
  )
}

export default Home
