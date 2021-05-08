import { SNACKBAR_SNACK_SHOW, SNACKBAR_SNACK_HIDE } from '../constants'

const patients = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SNACKBAR_SNACK_SHOW:
      return {
        ...state,
        open: true,
        message: payload.message,
        type: payload.type,
      }
    case SNACKBAR_SNACK_HIDE:
      return {
        ...state,
        open: false,
      }

    default:
      return state
  }
}

export default patients
