import React from 'react'

import NavButton from 'Shared/NavButton'
import GlitchHeader from 'Shared/GlitchHeader'

import { AppBar, Toolbar } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={classes.toolbar}>
        <NavButton />
        <GlitchHeader title="GlitchArt Fest" />
      </Toolbar>
    </AppBar>
  )
}

export default Home
