import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { getAllProducts } from "../../store/products/selectors";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    return reduxProducts.map((p) => <ProductCard key={p.title} {...p} />);
  };

  return <div> {!reduxProducts ? <p>Loading...</p> : renderProducts()}</div>;
};

export default ProductList;
