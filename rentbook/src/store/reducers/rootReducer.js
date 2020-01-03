import authReducer from "./authReducer";
import houseReducer from "./houseReducer";
import { combineReducers } from "redux"; //to combine our reducers
// the firestoreRecucer syncs data from firestore in the background
// it knows which firestore to connect to b/c we passed it the fbConfig in the store component
import { firestoreReducer } from "redux-firestore"; // use this package to sync the firestore data with
// the redux store data
import { firebaseReducer } from "react-redux-firebase"; // use this to sync the firebase with this store
// (including the user's auth status and other firebase properties)

// we pass rootReducer to creatStore() in index.js to create our redux store
// the properties here are stored in the 'state' object of the the redux store we created
// (this will be the central data store / state of our app
const rootReducer = combineReducers({
	auth: authReducer,
	house: houseReducer,
	firestore: firestoreReducer, // now we added to our state. The next step is
	// to specify which collection to sync with in the componenet that uses this
	// property (eg. inside of Dashboard using 'firestoreConnect')
	firebase: firebaseReducer // the next step will be using 'connect' in the
	// component where we want to access the users's auth data (eg. Navbar)
});

export default rootReducer;
