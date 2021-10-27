import { combineReducers } from 'redux'

import authSlice from 'ReduxStore/auth'
import snackbarSlice from 'ReduxStore/snackbar'
import patientsSlice from 'ReduxStore/patients'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  snackbar: snackbarSlice.reducer,
  patients: patientsSlice.reducer,
})

export default rootReducer
