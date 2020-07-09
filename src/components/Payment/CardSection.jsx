import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const CardSection = (props) => {
  const { handleChange } = props;

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };

  return (
    <div>
      <div className="heading-secondary">Card details</div>
      <CardElement options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
    </div>
  );
};

export default CardSection;
