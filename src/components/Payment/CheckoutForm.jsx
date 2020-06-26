import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { calculateTotal } from "../../store/cart/selectors";
import { databaseUrl } from "../../constants";
import CardSection from "./CardSection";
import BillingDetailsFields from "./BillingDetailsFields";

export default function CheckoutForm() {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const totalCost = useSelector(calculateTotal);
  const history = useHistory();

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    const onSuccessfulCheckout = () => {
      return history.push("/success");
    };

    const cardElement = elements.getElement(CardElement);

    try {
      const { data: clientSecret } = await axios.post(`${databaseUrl}/pay`, {
        amount: totalCost * 100,
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    hidePostalCode: true,
  };

  return (
    <div className="checkout-container">
      <div className="title">Pay with Card</div>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <BillingDetailsFields />
        <CardSection
          options={cardElementOpts}
          handleChange={handleCardDetailsChange}
        />
        {checkoutError && (
          <div className="checkout-error-message">{checkoutError}</div>
        )}
        <button className="payment-btn" disabled={isProcessing || !stripe}>
          {" "}
          {isProcessing ? "Processing..." : `Pay $${totalCost}`}
        </button>
      </form>
    </div>
  );
}
