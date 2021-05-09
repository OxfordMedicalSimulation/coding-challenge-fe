import React from 'react'

import { useHistory, useLocation } from 'react-router-dom'

import { Fab } from '@material-ui/core'

import { SupervisorAccount, ArrowBack } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    left: theme.spacing(3),
    zIndex: 10000,
  },
}))

const NavButton = () => {
  const classes = useStyles()

  const location = useLocation()
  const history = useHistory()

  return (
    <>
      {location.pathname === '/' ? (
        <Fab
          aria-label="Patients"
          className={classes.fab}
          onClick={() => history.push('/patients')}
          size="small"
        >
          <SupervisorAccount />
        </Fab>
      ) : (
        <Fab
          aria-label="Patients"
          className={classes.fab}
          onClick={() => history.push('/')}
          size="small"
        >
          <ArrowBack />
        </Fab>
      )}
    </>
  )
}

export default NavButton
