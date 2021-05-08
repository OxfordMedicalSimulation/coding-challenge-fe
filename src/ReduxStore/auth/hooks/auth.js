import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { login as loginAction } from '../actions'

export const useIsAuthenticated = () => {
  const { authenticated } = useSelector((state) => state.auth)
  return authenticated
}

export const useLogin = () => {
  const dispatch = useDispatch()

  const login = useCallback(
    (data) => {
      return dispatch(loginAction(data))
    },
    [dispatch]
  )

  return login
}
