import authReducer from "./authReducer";
import houseReducer from "./houseReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
	auth: authReducer,
	house: houseReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default rootReducer;
