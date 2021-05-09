import React from 'react'
// import PropTypes from 'prop-types'

import { useHistory, useLocation } from 'react-router-dom'

import { Fab } from '@material-ui/core'

import { SupervisorAccount, ArrowBack } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
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
        >
          <SupervisorAccount />
        </Fab>
      ) : (
        <Fab
          aria-label="Patients"
          className={classes.fab}
          onClick={() => history.push('/')}
        >
          <ArrowBack />
        </Fab>
      )}
    </>
  )
}

NavButton.propTypes = {}

export default NavButton
