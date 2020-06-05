const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return {
        ...state,
        list: [...action.products],
      };
    default:
      return state;
  }
}
