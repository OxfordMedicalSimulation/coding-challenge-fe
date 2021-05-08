import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const InfoDialog = ({ visible }) => {
  return (
    <div>
      <Dialog
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Thanks for registering
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please take a seat while you're waiting.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

InfoDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default InfoDialog
