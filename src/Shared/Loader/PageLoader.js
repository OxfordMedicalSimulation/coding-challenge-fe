import React from 'react'

import Loader from './Loader'

import { Box } from '@material-ui/core'

const PageLoader = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Loader />
    </Box>
  )
}

export default PageLoader
