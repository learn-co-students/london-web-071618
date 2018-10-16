const initialState = 0

const currentIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MORE_SUSHI':
      return state + 4
    default:
      return state
  }
}

export default currentIndexReducer
