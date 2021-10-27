import { combineReducers } from 'redux'

import authSlice from 'ReduxStore/auth'
import snackbar from 'ReduxStore/snackbar/reducers'
import patientsSlice from 'ReduxStore/patients'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  snackbar,
  patients: patientsSlice.reducer,
})

export default rootReducer
