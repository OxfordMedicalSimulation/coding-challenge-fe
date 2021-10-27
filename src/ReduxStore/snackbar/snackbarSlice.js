import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  message: null,
  type: null,
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnack: (state, action) => {
      return {
        ...state,
        open: true,
        message: action.payload.message,
        type: action.payload.type,
      }
    },
    hideSnack: (state, action) => {
      return {
        ...state,
        open: false,
      }
    },
  },
})

export default snackbarSlice
