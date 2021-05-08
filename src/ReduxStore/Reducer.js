import { combineReducers } from 'redux'

import patients from 'ReduxStore/patients/reducers'

const rootReducer = combineReducers({ patients })

export default rootReducer
