import React from 'react'

import { RegistrationForm } from './components'

import { Box, Typography } from '@material-ui/core'

const Home = () => {
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

      <RegistrationForm />
    </Box>
  )
}

export default Home
