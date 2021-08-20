const initialState = [];

function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      return [...state, payload];

    case "INCREMENT":
      const index = state.findIndex((element) => element.id === payload);
      state[index].quantity++;
      return [...state];

    case "DECREMENT":
      const i = state.findIndex((element) => element.id === payload);
      state[i].quantity--;
      return [...state];

    case "REMOVE_FROM_CART":
      state = state.filter((element) => element.id !== payload);
      return [...state];
    default:
      return state;
  }
}

export default cartReducer;
