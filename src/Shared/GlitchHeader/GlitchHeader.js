// Based on:
// https://css-tricks.com/glitch-effect-text-images-svg/

import React from 'react'
import PropTypes from 'prop-types'

import tinycolor from 'tinycolor2'
import { makeStyles } from '@material-ui/core/styles'

const offset1 = 2
const offset2 = -2
const highlight1 = '#49FC00'
const highlight2 = tinycolor(highlight1).spin(180).toString()

const generateFrames = (n = 20, index = 0) => {
  const keyframes = {}

  while (index <= n) {
    const keyframeSel = `${(index / n) * 100}%`
    const rand1 = `${Math.round(Math.random() * 150)}px`
    const rand2 = `${Math.round(Math.random() * 150)}px`

    keyframes[keyframeSel] = {
      clip: `rect(${rand1}, 9999px, ${rand2}, 0)`,
    }
    index++
  }

  return keyframes
}

const useStyles = makeStyles((theme) => ({
  glitchWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glitch: {
    color: 'white',
    lineHeight: '60px',
    fontSize: '60px',
    fontWeight: 900,
    textTransform: 'uppercase',
    position: 'relative',
    display: 'inline-block',

    '&:before, &:after': {
      content: 'attr(data-text)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    '&:before': {
      left: offset1,
      textShadow: `-2px 0 ${highlight1}`,
      clip: 'rect(24px, 550px, 90px, 0)',
      animation: '$glitchAnim2 10s infinite linear alternate-reverse',
    },

    '&:after': {
      left: offset2,
      textShadow: `-2px 0 ${highlight2}`,
      clip: 'rect(85px, 550px, 140px, 0)',
      animation: '$glitchAnim 9s infinite linear alternate-reverse',
    },
  },
  '@keyframes glitchAnim': {
    ...generateFrames(24),
  },

  '@keyframes glitchAnim2': {
    ...generateFrames(30, 2),
  },
}))

const GlitchHeader = ({ title }) => {
  const classes = useStyles()

  return (
    <div className={classes.glitchWrapper}>
      <div className={classes.glitch} data-text={title}>
        {title}
      </div>
    </div>
  )
}

GlitchHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default GlitchHeader
