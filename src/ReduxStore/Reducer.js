import { combineReducers } from 'redux'

import auth from 'ReduxStore/auth/reducers'
import snackbar from 'ReduxStore/snackbar/reducers'
import patients from 'ReduxStore/patients/reducers'

const rootReducer = combineReducers({ auth, snackbar, patients })

export default rootReducer
