import React, { useCallback } from 'react'

import { useLogin } from 'ReduxStore/auth/hooks'
import { useSnackbarActions } from 'ReduxStore/snackbar/hooks'
import { useFormik } from 'formik'
import * as yup from 'yup'

import GlitchButton from 'Shared/GlitchButton'

import { Box, TextField } from '@material-ui/core'

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
  const { showSnack } = useSnackbarActions()

  const triggerSuccessSnack = () => {
    showSnack({ type: 'success', message: 'Thanks for logging in!' })
  }
  const triggerErrorSnack = () => {
    showSnack({ type: 'error', message: 'Incorrect email or password.' })
  }

  const login = useLogin()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      login(values).then(triggerSuccessSnack).catch(triggerErrorSnack)
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

        <GlitchButton fullWidth size="large" type="submit" title="Submit" />
      </form>
    </>
  )
}

export default AuthForm
