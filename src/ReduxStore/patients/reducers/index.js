import { getPatients } from 'Helpers'

import reduceReducers from 'reduce-reducers'

import patientsCRUD from './patientsCRUD'

const initialState = {
  entries: [...getPatients()],
}

const reducer = reduceReducers(initialState, patientsCRUD)

export default reducer
