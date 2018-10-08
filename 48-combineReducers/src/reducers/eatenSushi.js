const initialState = []

const eatenSushisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EAT_SUSHI':
      return [...state, action.payload]
    default:
      return state
  }
}

export default eatenSushisReducer
