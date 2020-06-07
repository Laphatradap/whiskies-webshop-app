import React from "react";
import util from "../../util";
import color from "../../styles/_variables.scss";

const ProductCard = (props) => {
  const { title, region, cost, tasting_notes, image } = props;

  return (
    <div className="product-card">
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-region">{region} Region</div>
        <div className="product-title price">{util.formatCurrency(cost)}</div>
        <div
          style={{
            background: `${color[region]}`,
          }}
          className="taste-info"
        >
          {tasting_notes.map((note) => (
            <div key={note}>{note}</div>
          ))}
        </div>
      </div>
      <div className="line" style={{background: `${color[region]}`}}></div>
      <div className="product-image">
        <img src={require(`../../assets/${image}`)} alt={image} />
      </div>
    </div>
  );
};

export default ProductCard;
