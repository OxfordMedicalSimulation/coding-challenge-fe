import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import patientsSlice from '../patientsSlice'
const { addEntry } = patientsSlice.actions

export const usePatients = () => {
  const { entries } = useSelector((state) => state.patients)
  return entries
}

export const useAddPatient = () => {
  const dispatch = useDispatch()

  const addPatient = useCallback(
    (patientData) => {
      return dispatch(addEntry(patientData))
    },
    [dispatch]
  )

  return addPatient
}
