import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import snackbarSlice from '../snackbarSlice'
const {
  showSnack: showSnackAction,
  hideSnack: hideSnackAction,
} = snackbarSlice.actions

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
