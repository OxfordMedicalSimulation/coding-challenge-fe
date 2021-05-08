import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addEntry } from '../actions'

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
