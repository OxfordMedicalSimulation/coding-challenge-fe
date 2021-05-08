import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
} from '../constants'

const patients = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        email: payload.email,
      }
    case AUTH_LOGIN_FAILURE:
    case AUTH_LOGOUT:
      return {
        ...state,
        authenticated: false,
        email: null,
      }

    default:
      return state
  }
}

export default patients
