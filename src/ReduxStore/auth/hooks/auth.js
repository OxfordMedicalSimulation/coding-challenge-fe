import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import authSlice from '../authSlice'
const { login: loginAction } = authSlice.actions

export const useIsAuthenticated = () => {
  const { authenticated } = useSelector((state) => state.auth)
  return authenticated
}

// TODO: This is too complicated to type when developing
// Consider adding a shorted pair of credentials or something
// that completely bypasses authentication when developing
const validUsers = [
  {
    email: 'admin@glitchartfest.com',
    password: 'password',
  },
]

export const useLogin = () => {
  const dispatch = useDispatch()

  const login = useCallback(
    (data) => {
      // This is where we'd normally check the details against an API
      const isValid = validUsers.find((user) => {
        return user.email === data.email && user.password === data.password
      })
      return new Promise((resolve, reject) => {
        if (isValid) {
          dispatch(loginAction(data))
          resolve()
        } else {
          reject()
        }
      })
    },
    [dispatch]
  )

  return login
}
