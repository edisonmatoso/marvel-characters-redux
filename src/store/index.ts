import { createStore, combineReducers } from 'redux'

import herosReducer from './heros'

const rootReducer = combineReducers({
  heros: herosReducer
})

export default createStore(rootReducer)
