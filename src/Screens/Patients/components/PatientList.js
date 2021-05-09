import React, { useState } from 'react'

import { usePatients } from 'ReduxStore/patients/hooks'

import { getCampsites } from 'Helpers'

import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  Tooltip,
  Collapse,
} from '@material-ui/core'

import {
  RadioButtonUnchecked,
  AirlineSeatReclineNormal,
  CheckCircle,
  DirectionsRun,
  ArrowDropDown,
  ArrowDropUp,
} from '@material-ui/icons'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  strikeThroughText: {
    textDecoration: 'line-through',
  },
}))

const PatientList = () => {
  const classes = useStyles()
  const patients = usePatients()

  const [expanded, setExpanded] = useState(null)

  // TODO: Add the ability to change the filter mode
  const [filterMode /*, setFilterMode*/] = useState('all')

  // TODO: Mark entry as seen/waiting in redux
  const markSeen = () => {
    console.log('mark seen')
  }
  const markWaiting = () => {
    console.log('mark waiting')
  }

  const sortedPatients = (() => {
    switch (filterMode) {
      case 'all':
      default:
        return patients.slice().reverse()
    }
  })()

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={filterMode === 'all'}
      >
        All
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={filterMode === 'waiting'}
        startIcon={<AirlineSeatReclineNormal />}
      >
        Waiting
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={filterMode === 'seen'}
        startIcon={<DirectionsRun />}
      >
        Seen
      </Button>
      <Box mb={2} />

      {sortedPatients.map(
        ({ firstName, lastName, injury, dob, campsite, seen }, index) => {
          const formattedDate = new Date(dob).toLocaleDateString('en-GB')
          return (
            <React.Fragment key={index}>
              <Card className={classes.cardContent}>
                <Box className={classes.cardHeader}>
                  <Typography
                    className={classnames({
                      [classes.strikeThroughText]: seen,
                    })}
                  >
                    {firstName} {lastName}{' '}
                    {index === expanded ? (
                      <Tooltip title="View less" aria-label="less">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setExpanded(null)
                          }}
                        >
                          <ArrowDropUp fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title="View more" aria-label="more">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setExpanded(index)
                          }}
                        >
                          <ArrowDropDown fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Typography>
                  {seen ? (
                    <Tooltip title="Mark as waiting" aria-label="mark-waiting">
                      <IconButton
                        style={{ marginLeft: 'auto' }}
                        onClick={markWaiting}
                      >
                        <CheckCircle />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Mark as seen" aria-label="mark-seen">
                      <IconButton
                        style={{ marginLeft: 'auto' }}
                        onClick={markSeen}
                      >
                        <RadioButtonUnchecked />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>

                <Collapse in={index === expanded}>
                  <Typography variant="body2">
                    <b>Reason for visit:</b> {injury}
                  </Typography>
                  <Typography variant="body2">
                    <b>Date of birth:</b> {formattedDate}
                  </Typography>
                  <Typography variant="body2">
                    <b>Campsite:</b> {getCampsites()[campsite].label}
                  </Typography>
                </Collapse>
              </Card>
              <Box mb={2} />
            </React.Fragment>
          )
        }
      )}
    </>
  )
}

export default PatientList
