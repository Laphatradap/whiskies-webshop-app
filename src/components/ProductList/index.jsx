import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { getAllProducts, groupProductByRegion } from "../../store/products/selectors";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);
  const groupByRegion = useSelector(groupProductByRegion)
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!reduxProducts) return "Loading...";

  let regions = Object.entries(groupByRegion).map(([key]) => {
    return key;
  });
  regions.push("all");
  const sortedFilter = regions.map((item) => item).sort();

  const renderFilter = sortedFilter.map((item) => (
    <div className="filter" key={item} onClick={() => setFilter(item)}>
      {item}
    </div>
  ));

  const renderAllProducts = () => {
    return reduxProducts.map((p, index) => <ProductCard key={index} {...p} />);
  };

  const renderProductsByRegion = Object.entries(groupByRegion).map(
    ([key, value]) => {
      return (
        <div key={key}>
          {key === filter && (
            <div className="products">
              {value.map((v, index) => (
                <ProductCard key={index} {...v} />
              ))}
            </div>
          )}
        </div>
      );
    }
  );

  return (
    <div>
      <div className="product-container">
        <div className="title">Whiskey Selection</div>
        <div className="filter-container">{renderFilter}</div>
      </div>
      {filter === "all" ? (
        <div className="products">{renderAllProducts()}</div>
      ) : (
        <div>{renderProductsByRegion}</div>
      )}
    </div>
  );
};

export default ProductList;
