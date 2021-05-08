import reduceReducers from 'reduce-reducers'

import snackbar from './snackbar'

const initialState = {
  open: false,
  message: null,
  type: null,
}

const reducer = reduceReducers(initialState, snackbar)

export default reducer
