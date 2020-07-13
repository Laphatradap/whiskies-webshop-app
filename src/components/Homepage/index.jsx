import React from "react";
import ProductList from "../ProductList";
import Article from "../Article";
import Navbar from "../Navbar";

const Homepage = () => {
  return (
    <>
    <Navbar  />
    <div className="container">
      <ProductList />
      <Article />
    </div>
    </>
  );
};

export default Homepage;
