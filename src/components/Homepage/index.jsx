import React from "react";
import ProductList from "../ProductList";
import Article from "../Article";

const Homepage = () => {
  return (
    <div className="container">
      <ProductList />
      <Article />
    </div>
  );
};

export default Homepage;
