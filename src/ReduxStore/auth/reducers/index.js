import reduceReducers from 'reduce-reducers'

import auth from './auth'

const initialState = {
  authenticated: false,
  email: null,
}

const reducer = reduceReducers(initialState, auth)

export default reducer
