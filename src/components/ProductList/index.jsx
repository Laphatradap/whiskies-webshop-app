import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { getAllProducts } from "../../store/products/selectors";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!reduxProducts) return "Loading...";

  const groupByRegion = reduxProducts.reduce((r, a) => {
    r[a.region] = [...(r[a.region] || []), a];
    return r;
  }, {});

  // const renderRegions = Object.entries(groupByRegion).map(([key]) => {
  //   return (
  //     <div className="regions" key={key} onClick={() => setRegion(key)}>
  //       <div className="region">{key}</div>
  //     </div>
  //   );
  // });

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
    return reduxProducts.map((p) => <ProductCard key={p.title} {...p} />);
  };

  const renderProductsByRegion = Object.entries(groupByRegion).map(
    ([key, value]) => {
      return (
        <div key={key}>
          {key === filter && (
            <div>
              {value.map((v) => (
                <ProductCard key={v.title} {...v} />
              ))}
            </div>
          )}
        </div>
      );
    }
  );

  return (
    <div className="product-container">
      <h1>Whiskey Selection</h1>
      <div className="filter-container">{renderFilter}</div>
      {filter === "all" ? (
        <div>{renderAllProducts()}</div>
      ) : (
        <div>{renderProductsByRegion}</div>
      )}
    </div>
  );
};

export default ProductList;
