import authReducer from './authReducer'
import houseReducer from './houseReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  house: houseReducer
})

export default rootReducer