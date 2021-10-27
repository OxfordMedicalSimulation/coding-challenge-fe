import { createSlice } from '@reduxjs/toolkit'

import { getPatients } from 'Helpers'

const initialState = {
  entries: [...getPatients()],
}

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      return {
        ...state,
        entries: [...state.entries, action.payload],
      }
    },
  },
})

export default patientsSlice
