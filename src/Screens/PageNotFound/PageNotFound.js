import React from 'react'

import { Box, Typography } from '@material-ui/core'

const PageNotFound = () => {
  return (
    <Box mx="auto" maxWidth={800}>
      <Box mb={2} />
      <Typography variant="h4" align="center">
        404
      </Typography>
      <Box mb={2} />
      <Typography align="center">
        Page not found. Are you digging where you're not supposed to be?
      </Typography>
    </Box>
  )
}

export default PageNotFound
