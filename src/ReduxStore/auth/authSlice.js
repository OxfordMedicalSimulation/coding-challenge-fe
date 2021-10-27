import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authenticated: false,
  email: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        authenticated: true,
        email: action.payload.email,
      }
    },
    logout: (state, action) => {
      return {
        ...state,
        authenticated: false,
        email: null,
      }
    },
  },
})

export default authSlice
