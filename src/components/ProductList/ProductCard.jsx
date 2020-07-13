import React from "react";
import color from "../../scss/abstracts/_variables.scss";
import { formatCurrency } from "../../util";
import { useHistory } from "react-router-dom";

const ProductCard = (props) => {
  const {
    title,
    region,
    cost,
    tasting_notes,
    image,
    // detailPage,
    onAddClick,
  } = props;
  const history = useHistory();

  return (
    <>
      <div
        className="product__card"
        onClick={() => history.push(`/product/${title}`)}
      >
        <div className="product-info">
          <div className=" product-info__name heading-secondary">{title}</div>
          <div className="product-info__region heading-tertiary">
            {region} Region
          </div>
          <div className="product-info__price heading-secondary">
            {formatCurrency(cost)}
          </div>
          <div
            style={{
              background: `${color[region]}`,
            }}
            className="product-info__taste"
          >
            {tasting_notes &&
              tasting_notes.map((note, index) => (
                <div className="text product-info__taste--notes" key={index}>
                  {note}
                </div>
              ))}
          </div>
          {image && (
            <img
              src={require(`../../assets/${image}`)}
              alt={image}
              className="product-info__image"
            />
          )}
          <div
            className="product-info__linebreak"
            style={{ background: `${color[region]}` }}
          ></div>
        </div>
        {/* {detailPage && ( */}
        <div className="btn-buy">
          <button
            // style={{ background: `${color[region]}` }}
            onClick={onAddClick}
            className=" btn btn-colored"
          >
            Add to cart
          </button>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default ProductCard;
