import { combineReducers } from 'redux'

import authSlice from 'ReduxStore/auth'
import snackbar from 'ReduxStore/snackbar/reducers'
import patients from 'ReduxStore/patients/reducers'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  snackbar,
  patients,
})

export default rootReducer
