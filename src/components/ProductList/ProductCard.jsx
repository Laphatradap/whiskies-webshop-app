import React from "react";

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.image} />
      <h3>{props.title}</h3>
      <p>Price: {props.cost}</p>
      <p>Region: {props.region}</p>
      <p>Tasting notes: {props.tasting_notes.map((note) => note)}</p>
    </div>
  );
};

export default ProductCard;
