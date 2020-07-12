import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import {
  getAllProducts,
  getRegionsForFilter,
} from "../../store/products/selectors";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);
  const regionList = useSelector(getRegionsForFilter);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!reduxProducts) return "Loading...";

  // Render filter option
  let regions = Object.entries(regionList).map(([key]) => {
    return key;
  });

  regions.push("all");

  const sortedFilter = regions.map((item) => item).sort();
  const renderFilter = sortedFilter.map((item) => (
    <div
      className="chip__item paragraph"
      key={item}
      onClick={() => setFilter(item)}
    >
      {item}
    </div>
  ));

  // Render filtered products
  const filteredProducts = reduxProducts
    .filter((product) => product.region === filter)
    .map((element, index) => <ProductCard key={index} {...element} />);

  // Render all products
  const allProducts = reduxProducts.map((product, index) => (
    <ProductCard key={index} {...product} />
  ));

  return (
    <>
      <div className="header">
        <div className="heading-primary">Whiskey Selection</div>
        <div className="chip">{renderFilter}</div>
      </div>
      <div className="section-products">
        {filter === "all" ? (
          <div className="products">{allProducts}</div>
        ) : (
          <div className="products">{filteredProducts}</div>
        )}
      </div>
    </>
  );
};

export default ProductList;
