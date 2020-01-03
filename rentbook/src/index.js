import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
	rootReducer,
	compose(
		// used to add store enhancers, such as applyMiddleWare, reduxFirestore...
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig), // redux bindings for firestore (firestore API)
		reactReduxFirebase(fbConfig, {
			useFirestoreForProfile: true, // flagging the rducer that we want to sync the profile object from firestore
			userProfile: "users", // telling the reducer which firestore collection to grab profile data from
			attachAuthIsReady: true
		}) // redux binding for firebase
	)
);

// for a better user experience, we use this method from the enhancer above to check
// if firebase is ready before we render. to prevent seeing the wrong links for a moment
store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
		// we use Provider and pass it the store to glue redux store to our react App
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById("root")
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
});
