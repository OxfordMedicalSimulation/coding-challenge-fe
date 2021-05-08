import reduceReducers from 'reduce-reducers'

import patientsCRUD from './patientsCRUD'

const initialState = {
  entries: [],
}

const reducer = reduceReducers(initialState, patientsCRUD)

export default reducer
