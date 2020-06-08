import React from "react";
import color from "../../styles/_config.scss";
import { formatCurrency } from "../../util";
import { useHistory } from "react-router-dom";

const ProductCard = (props) => {
  const {
    title,
    region,
    cost,
    tasting_notes,
    image,
    detailPage,
    onAddClick,
  } = props;
  const history = useHistory();

  return (
    <div>
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
      </div>
      <div>
        {detailPage && (
          <>
            <div>
              <button
                style={{ background: `${color[region]}` }}
                onClick={onAddClick}
              >
                Add to cart
              </button>
              <div className="back-btn" onClick={() => history.push(`/`)}>
                back
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
