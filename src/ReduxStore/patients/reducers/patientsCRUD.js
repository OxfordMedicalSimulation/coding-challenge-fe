import { PATIENTS_ENTRY_ADD } from '../constants'

const patients = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case PATIENTS_ENTRY_ADD:
      return {
        ...state,
        entries: [...state.entries, payload],
      }

    default:
      return state
  }
}

export default patients
