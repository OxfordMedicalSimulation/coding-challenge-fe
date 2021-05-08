import React, { useState, useCallback } from 'react'
// import PropTypes from 'prop-types'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { Box, TextField, Button, Snackbar } from '@material-ui/core'
import { Alert as MuiAlert } from '@material-ui/lab'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const validUsers = [
  {
    email: 'admin@glitchartfest.org',
    password: 'password',
  },
]

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const AuthForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackMessage, setSnackMessage] = useState(null)

  const triggerSuccessSnack = () => {
    setSnackMessage('success')
    setSnackbarOpen(true)
  }
  const triggerErrorSnack = () => {
    setSnackMessage('error')
    setSnackbarOpen(true)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const isValid = validUsers.find((user) => {
        return user.email === values.email && user.password === values.password
      })
      if (isValid) {
        triggerSuccessSnack()
      } else {
        triggerErrorSnack()
      }
    },
  })

  const formikBindings = useCallback(
    (fieldName) => ({
      value: formik.values[fieldName],
      onChange: formik.handleChange,
      error: formik.touched[fieldName] && Boolean(formik.errors[fieldName]),
      helperText: formik.touched[fieldName] && formik.errors[fieldName],
    }),
    [formik.errors, formik.handleChange, formik.touched, formik.values]
  )

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          id="email"
          name="email"
          label="Email"
          autoComplete="email"
          {...formikBindings('email')}
        />
        <Box mb={2} />

        <TextField
          fullWidth
          variant="filled"
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          // TODO: Add functionality to reveal the password
          // See: https://material-ui.com/components/text-fields/#input-adornments
          {...formikBindings('password')}
        />
        <Box mb={2} />

        <Button fullWidth variant="contained" size="large" type="submit">
          Submit
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        {snackMessage === 'success' ? (
          <Alert onClose={() => setSnackbarOpen(false)} severity="success">
            Thanks for logging in!
          </Alert>
        ) : (
          <Alert onClose={() => setSnackbarOpen(false)} severity="warning">
            Incorrect email or password.
          </Alert>
        )}
      </Snackbar>
    </>
  )
}

AuthForm.propTypes = {}

export default AuthForm
