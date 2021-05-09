import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 900,
    animation: '$glitch 10s infinite',
  },
  '@keyframes glitch': {
    from: {
      textShadow: '0 0px 0px white',
    },
    '0.5%': {
      textShadow: '2px -2px 0px red',
    },
    '1%': {
      textShadow: '-2px 2px 0px green',
    },
    '2%': {
      textShadow: '2px 2px 0px blue',
    },
    '3%': {
      textShadow: '-2px -2px 0px green',
    },
    '6%': {
      textShadow: '0px 0px 0px white',
    },
    top: {
      textShadow: '0px 0px 0px white',
    },
  },
}))

const GlitchButton = ({ title, ...props }) => {
  const classes = useStyles()

  return (
    <Button variant="contained" {...props} className={classes.button}>
      {title}
    </Button>
  )
}

GlitchButton.propTypes = {
  title: PropTypes.string.isRequired,
}

export default GlitchButton
