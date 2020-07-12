export const getAllProducts = (state) => state.products.list;

export const getProductByTitle = (title) => (state) => {
  if (!state.products.list) return "Loading...";
  return state.products.list.find((item) => item.title === title);
};


export const getRegionsForFilter = (state) => {
  if (!state.products.list) return "Loading...";
  return state.products.list.reduce((r, a) => {
    r[a.region] = [...(r[a.region] || []), a];
    return r;
  }, {});
};
