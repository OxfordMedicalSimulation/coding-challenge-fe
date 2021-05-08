import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE } from '../constants'

// TODO: This is too complicated to type when developing
// Consider adding a shorted pair of credentials
const validUsers = [
  {
    email: 'admin@glitchartfest.org',
    password: 'password',
  },
]

export const login = (data) => {
  return (dispatch) => {
    // This is where we'd check the details against an API
    const isValid = validUsers.find((user) => {
      return user.email === data.email && user.password === data.password
    })

    if (isValid) {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: data,
      })
      return Promise.resolve()
    } else {
      dispatch({
        type: AUTH_LOGIN_FAILURE,
      })
      return Promise.reject()
    }
  }
}
