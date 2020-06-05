import React from "react";
import util from "../../util";

const ProductCard = (props) => {
  return (
    <div>
      <div className="image-container">
        <img src={require(`../../assets/${props.image}`)} alt={props.image} />
      </div>
      <h1>{props.title}</h1>
      <p>{util.formatCurrency(props.cost)}</p>
      <p>{props.region} Region</p>
      <p>{props.tasting_notes.map((note) => note)}</p>
    </div>
  );
};

export default ProductCard;
