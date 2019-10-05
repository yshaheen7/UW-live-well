export const addHouse = (house) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make asynch call to database 
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('houses').add({
      ...house,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_HOUSE', house });
    }).catch((err) => {
      dispatch({ type: 'ADD_HOUSE_ERROR' }, err);
    })
  }
};