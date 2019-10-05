export const addHouse = (house) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // mae asynch call to database 
    dispatch({type: 'ADD_HOUSE', house: house});
  }
};