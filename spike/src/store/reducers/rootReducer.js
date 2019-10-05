import authReducer from './authReducer'
import houseReducer from './houseReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  house: houseReducer,
  firestore: firestoreReducer
});

export default rootReducer