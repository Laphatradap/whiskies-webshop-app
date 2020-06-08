import React from "react";
import {formatCurrency} from "../../util";
import color from "../../styles/_variables.scss";
import { useHistory } from "react-router-dom";

const ProductCard = (props) => {
  const { title, region, cost, tasting_notes, image, detailPage } = props;
  const history = useHistory();

  return (
    <div
      className="product-card"
      onClick={() => history.push(`/product/${title}`)}
    >
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-region">{region} Region</div>
        <div className="product-title price">{formatCurrency(cost)}</div>
        <div
          style={{
            background: `${color[region]}`,
          }}
          className="taste-info"
        >
          {tasting_notes &&
            tasting_notes.map((note) => <div key={note}>{note}</div>)}
        </div>
      </div>
      <div className="line" style={{ background: `${color[region]}` }}></div>
      <div className="product-image">
        {image && <img src={require(`../../assets/${image}`)} alt={image} />}
      </div>
      {detailPage && (
        <div>
          <button onClick={props.onAddClick}>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
