export const addHouse = (house) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make asynch call to database 
    const firestore = getFirestore();
    firestore.collection('houses').add({
      ...house,
      authorFirstName: 'YOU',
      authorLastName: 'ShA',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_HOUSE', house });
    }).catch((err) => {
      dispatch({ type: 'ADD_HOUSE_ERROR' }, err);
    })
  }
};