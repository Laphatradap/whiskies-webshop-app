import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  amountOfItemsInCart,
  getItemsInCart,
  calculateTotal,
} from "../../store/cart/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../util";

const Cart = () => {
  const itemsInCart = useSelector(getItemsInCart);
  const amountItemsInCart = useSelector(amountOfItemsInCart);
  const totalCost = useSelector(calculateTotal);
  const [open, isOpen] = useState(false);
  const history = useHistory();

  const renderItemsInCart = (items) => {
    return items.map((item, index) => (
      <div key={index} className="cart-info">
        <div className="item-title">{item.title}</div>
        <div className="item-cost">{formatCurrency(item.cost)}</div>
        <div className="item-quantity">{item.quantity}</div>
      </div>
    ));
  };

  const handleCartClick = () => {
    isOpen(!open);
  };

  return (
    <div>
      <div className="cart-icon">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="2x"
          onClick={() => {
            handleCartClick();
          }}
        />
        {amountItemsInCart !== 0 && (
          <div className="badge">{amountItemsInCart}</div>
        )}
      </div>
      <div>
        {open && (
          <div className="cart-container">
            <div>
              {!itemsInCart.length ? (
                <div className="cart">Your cart is empty</div>
              ) : (
                <>
                  <div>
                    <div className="cart">Your Cart</div>
                    <div className="cart-info">
                      <span className="name">Item</span>
                      <span className="cost">Price</span>
                      <span className="quantity">Quantity</span>
                    </div>
                    <div>{renderItemsInCart(itemsInCart)}</div>
                    <div className="cart-info">
                      <div className="total-items">
                        Total ({amountItemsInCart} items)
                      </div>
                      <div className="total-cost">
                        {formatCurrency(totalCost)}
                      </div>
                      <button
                        onClick={() => {
                          history.push("/payment");
                        }}
                        className="purchase-btn"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                  {/* <CheckoutForm
                    items={itemsInCart}
                    onSuccessfulCheckout={() => history.push("/success")}
                  /> */}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
