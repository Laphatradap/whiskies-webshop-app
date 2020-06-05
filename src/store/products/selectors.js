export const getAllProducts = (state) => state.products.list;
// export const filteredProducts = (region) => (state) => {
//   console.log("region", region);
//   console.log("state", state);
//   if (!state.products.list) return "Loading";
//   return region === ""
//     ? state.products.list
//     : state.products.list.filter((item) => item.region === region);
// };

// export const getProductsByRegion = (region) => (state) => {
//   console.log("OUTPUT: getProductsByRegion -> state", state);
//   console.log("OUTPUT: getProductsByRegion -> region", region);
//   return state.products.list.find((item) => item.region === region);
//   // return region === ""
//   //   ? state.products.list
//   //   : state.products.list.find((item) => item.region === region);
// };
