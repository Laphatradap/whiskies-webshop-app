import React from "react";
import util from "../../util";

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.image} />
      <h1>{props.title}</h1>
      <p>{util.formatCurrency(props.cost)}</p>
      <p>{props.region} Region</p>
      <p>{props.tasting_notes.map((note) => note)}</p>
    </div>
  );
};

export default ProductCard;
