import { SNACKBAR_SNACK_SHOW, SNACKBAR_SNACK_HIDE } from '../constants'

export const showSnack = (snackData) => {
  return (dispatch) => {
    return dispatch({
      type: SNACKBAR_SNACK_SHOW,
      payload: snackData,
    })
  }
}

export const hideSnack = () => {
  return (dispatch) => {
    return dispatch({
      type: SNACKBAR_SNACK_HIDE,
    })
  }
}
