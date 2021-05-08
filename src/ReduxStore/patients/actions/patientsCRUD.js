import { PATIENTS_ENTRY_ADD } from '../constants'

export const addEntry = (entryData) => {
  return (dispatch) => {
    return dispatch({
      type: PATIENTS_ENTRY_ADD,
      payload: entryData,
    })
  }
}
