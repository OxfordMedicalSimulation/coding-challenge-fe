import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { useAddPatient } from 'ReduxStore/patients/hooks'

import { useFormik } from 'formik'
import * as yup from 'yup'

import GlitchButton from 'Shared/GlitchButton'

import { get18YearsAgo, getCampsites } from 'Helpers'

import { Box, TextField } from '@material-ui/core'

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .required('First name is required'),
  lastName: yup
    .string('Enter your last name')
    .required('Last name is required'),
  dob: yup
    .date()
    .max(
      get18YearsAgo(),
      'Invalid date of birth - all attendees should be at least 18 years old'
    )
    .required('Date of birth is required'),
  campsite: yup.string().required('Campsite is required'),
})

const RegistrationForm = ({ onSubmissionComplete }) => {
  const addPatient = useAddPatient()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dob: '',
      campsite: '',
      visitSummary: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      addPatient({ ...values, seen: false })
      onSubmissionComplete()
      actions.resetForm()
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
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        variant="filled"
        id="firstName"
        name="firstName"
        label="First name"
        {...formikBindings('firstName')}
      />
      <Box mb={2} />

      <TextField
        fullWidth
        variant="filled"
        id="lastName"
        name="lastName"
        label="Last name"
        {...formikBindings('lastName')}
      />
      <Box mb={2} />

      <TextField
        fullWidth
        type="date"
        variant="filled"
        id="dob"
        name="dob"
        label="Date of birth"
        InputLabelProps={{ shrink: true }}
        {...formikBindings('dob')}
      />
      <Box mb={2} />

      <TextField
        fullWidth
        select
        variant="filled"
        id="campsite"
        name="campsite"
        label="Campsite"
        SelectProps={{
          native: true,
        }}
        {...formikBindings('campsite')}
      >
        <option disabled value=""></option>
        {getCampsites().map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <Box mb={2} />

      <TextField
        fullWidth
        multiline
        rows={4}
        variant="filled"
        id="visitSummary"
        name="visitSummary"
        label="Reason for visit (optional)"
        {...formikBindings('visitSummary')}
      />
      <Box mb={2} />

      <GlitchButton size="large" type="submit" title="Submit" />
    </form>
  )
}

RegistrationForm.propTypes = {
  onSubmissionComplete: PropTypes.func.isRequired,
}

export default RegistrationForm
