const initialState = 100

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EAT_SUSHI':
      return state - action.payload.price
    default:
      return state
  }
}

export default moneyReducer
