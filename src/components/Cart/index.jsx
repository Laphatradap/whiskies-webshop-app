import React from "react";
import { useSelector } from "react-redux";
import {
  amountOfItemsInCart,
  getItemsInCart,
  calculateTotal,
} from "../../store/cart/selectors";
import { formatCurrency } from "../../util";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const itemsInCart = useSelector(getItemsInCart);
  const amountItemsInCart = useSelector(amountOfItemsInCart);
  const totalCost = useSelector(calculateTotal);
  const history = useHistory();

  const renderItemsInCart = (items) => {
    return items.map((item) => (
      <div key={item.title}>
        <div>{item.title}</div>
        <div>{formatCurrency(item.cost)}</div>
        <div>Amount: {item.quantity}</div>
      </div>
    ));
  };

  return (
    <div>
      <div onClick={() => history.push(`/`)}>back</div>
      <div>
        {itemsInCart.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <>
            <div>Your Cart</div>
            <div>{renderItemsInCart(itemsInCart)}</div>
            <div>Total cost:{formatCurrency(totalCost)} </div>
            <div>Total quantity: {amountItemsInCart}</div>
            <button>Purchase</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
