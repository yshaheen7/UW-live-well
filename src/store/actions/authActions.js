// adding thunk middleware to the redux store boosts our action creaters to be able to return a function
// As opposed to be able to return only an action object
// such as ( return{ type: "ADD_HOUSE", house } )
// this allows us to pause the dispatch for our redux store, while an async call to
// the firestore is taking a place
export const signIn = credentials => {
	// this action creator returns a function that takes these arguments:
	// dispatch: a method that dipatches an action to the rducer
	// getState: to get the state of the redux store
	// { getFirebase, getFirestore }: an object that we directly destructure to use the store enhancers
	// to interact with the firestore
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: "LOGIN_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "LOGIN_ERROR", err });
			});
	};

	// without using 'thunk', our action creator will be able to return an object only
	// return {
	// 		dispatch({ type: "LOGIN_ERROR", err });
	// }
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "SIGNOUT_SUCCESS" });
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase(); // we use this to sign a new user up, using firebase authintication service
		// which only store the user's email and a new automatically generated uid
		const firestore = getFirestore(); // hence, we use this to interact with the database (firebase)
		// to store new users to the user's collection using the generated uid

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(resp => {
				return firestore
					.collection("users") // if it doesnt exist, firestore will create it for us
					.doc(resp.user.uid) // doc() creates a new doc with the passed id,(if we use add() instead, it will generate a new id)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0]
					});
			}) // b/c this returns a promise as well, we chain another then()
			.then(() => {
				dispatch({ type: "SIGNUP_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "SIGNUP_ERROR", err });
			});
	};
};
