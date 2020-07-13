import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByTitle } from "../../store/products/selectors";
import { addToCart } from "../../store/cart/actions";
import Cart from "../Cart";
import ProductCard from "./ProductCard";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const productData = useSelector(getProductByTitle(props.match.params.title));

  if (!productData) return "Loading...";

  const onAddClick = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container">
      <div className="heading-primary">{productData.title}</div>

      <div className="section-product-detail">
        <div className="products">
          <ProductCard
            {...productData}
            detailPage
            onAddClick={() => onAddClick(productData)}
          />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default ProductDetail;
