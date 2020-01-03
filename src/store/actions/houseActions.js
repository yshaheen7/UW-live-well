// adding thunk middleware to the redux store boosts our action creaters to be able to return a function
// As opposed to be able to return only an action object
// such as ( return{ type: "ADD_HOUSE", house } )
// this allows us to pause the dispatch for our redux store, while an async call to
// the firestore is taking a place
export const addHouse = house => {
	// this action creator returns a function that takes these arguments:
	// dispatch: a method that dipatches an action to the rducer
	// getState: to get the state of the redux store
	// { getFirebase, getFirestore }: an object that we directly destructure to use the store enhancers
	// to interact with the firestore
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// pause the dispatch and make asynch call to database
		const firestore = getFirestore(); // get a reference to our firestore
		const profile = getState().firebase.profile; // getState returns the redux state, then grab the profile object
		const authorId = getState().firebase.auth.uid; // grab the user id from the auth property on the state
		firestore
			.collection("houses")
			.add({
				// use this method to create a new document in the house collection in firestore
				...house, // spreading properties we recieved from state in AddNewHouse (which user entered in the form)
				// then add the rest of properties we want to store in the firestore document
				authorFirstName: profile.firstName,
				authorLastName: profile.lastName,
				authorId: authorId,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: "ADD_HOUSE", house });
			})
			.catch(err => {
				dispatch({ type: "ADD_HOUSE_ERROR" }, err);
			});
	};
};
