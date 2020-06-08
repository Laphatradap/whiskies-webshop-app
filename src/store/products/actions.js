import axios from "axios";

export const productsFetched = (products) => {
  return {
    type: "PRODUCTS_FETCHED",
    products,
  };
};

export const fetchProducts = () => async (dispatch, getState) => {
  const products = getState().products.list;
  if (!products.length) {
    try {
      const response = await axios.get("../../data/whiskies.json");
      dispatch(productsFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  }
};
