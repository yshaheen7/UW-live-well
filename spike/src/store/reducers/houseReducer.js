const initState = {
  houses:[
    {id: '1', title: 'house 1', content: '1blah blah'},
    {id: '2', title: 'house 2', content: '2blah blah'},
    {id: '3', title: 'house 3', content: '3blah blah'}
  ]
}

const houseReducer = (state = initState, action) => {
  return state
}

export default houseReducer