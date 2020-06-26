import React from "react";
import { Route, Switch } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./styles/styles.css";

import ProductDetail from "./components/ProductList/ProductDetail";
import CheckoutForm from "./components/Payment/CheckoutForm";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import Homepage from "./components/Homepage";

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log("OUTPUT: stripePromise", stripePromise)

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <Switch>
          <Route path="/product/:title" component={ProductDetail} />
          <Route path="/payment" component={CheckoutForm} />
          <Route path="/success" component={PaymentSuccess} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Elements>
    </div>
  );
}

export default App;
