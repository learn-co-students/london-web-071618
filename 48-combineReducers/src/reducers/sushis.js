const initialState = []

const sushisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUSHIS':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default sushisReducer
