const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      const exist = state.find((p) => p.title === product.title);

      if (!exist) {
        return [...state, { ...product, quantity: 1 }];
      } else {
        const updatedCart = state.map((p) =>
          p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p
        );
        return updatedCart;
      }

    default:
      return state;
  }
}
