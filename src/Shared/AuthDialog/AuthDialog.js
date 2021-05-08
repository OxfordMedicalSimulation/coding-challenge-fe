import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { AuthForm } from './components'

import { Dialog, DialogContent, DialogTitle, Slide } from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const AuthDialog = ({ visible, bodyMessage }) => {
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
          Please log in to view this page
        </DialogTitle>
        <DialogContent>
          <AuthForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}

AuthDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  bodyMessage: PropTypes.string.isRequired,
}

export default AuthDialog
