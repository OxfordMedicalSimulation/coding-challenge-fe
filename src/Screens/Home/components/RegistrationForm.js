import React, { useCallback } from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { get18YearsAgo } from 'Helpers'

import { Box, TextField, Button } from '@material-ui/core'

const campsites = [
  'HEX corruption',
  'Data lake',
  'Protocol resumption',
  'The encoded fields',
].map((campsite, index) => ({ value: index, label: campsite }))

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

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dob: get18YearsAgo(),
      campsite: '',
      injury: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
        {campsites.map((option) => (
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
        id="injury"
        name="injury"
        label="Summary of injury (optional)"
        {...formikBindings('injury')}
      />
      <Box mb={2} />

      <Button variant="contained" size="large" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default RegistrationForm
