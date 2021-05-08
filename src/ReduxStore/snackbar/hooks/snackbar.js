import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  showSnack as showSnackAction,
  hideSnack as hideSnackAction,
} from '../actions'

export const useSnackbarActions = () => {
  const dispatch = useDispatch()

  const showSnack = useCallback(
    (snackData) => {
      return dispatch(showSnackAction(snackData))
    },
    [dispatch]
  )

  const hideSnack = useCallback(() => {
    return dispatch(hideSnackAction())
  }, [dispatch])

  return { showSnack, hideSnack }
}

export const useSnackbarData = () => {
  const { open, message, type } = useSelector((state) => state.snackbar)
  return { open, message, type }
}
