export const getItemsInCart = (state) => state.cart;

export const amountOfItemsInCart = (state) => {
  return state.cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const calculateTotal = (state) => {
  let total = 0;
  if (state.cart.length !== 0) {
    const result = state.cart
      .map((item) => item.cost * item.quantity)
      .reduce((a, b) => a + b);
    total = result.toFixed(2);
  }

  return total;
};
