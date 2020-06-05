import React, { useEffect, useState } from "react";
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
  const [region, setRegion] = useState("");

  if (!reduxProducts) return "Loading...";

  const groupByRegion = reduxProducts.reduce((r, a) => {
    r[a.region] = [...(r[a.region] || []), a];
    return r;
  }, {});

  const renderRegions = Object.entries(groupByRegion).map(([key]) => {
    return (
      <div key={key} onClick={() => setRegion(key)} className="regionInfo">
        <p>{key}</p>
      </div>
    );
  });
  console.log("OUTPUT: ProductList -> renderRegions", renderRegions);

  const renderAllProducts = () => {
    return reduxProducts.map((p) => <ProductCard key={p.title} {...p} />);
  };

  const renderProductsByRegion = Object.entries(groupByRegion).map(
    ([key, value]) => {
      return (
        <div key={key}>
          {key === region && (
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
    <div>
      <h1>Whiskey Selection</h1>
      <div>
        <div onClick={() => setRegion("")}>all</div>
        <div>{renderRegions}</div>
      </div>

      {region === "" ? (
        <>
          <div>{renderAllProducts()}</div>
        </>
      ) : (
        <div>{renderProductsByRegion}</div>
      )}
    </div>
  );
};

export default ProductList;
