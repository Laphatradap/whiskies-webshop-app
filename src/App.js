import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.css";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductList/ProductDetail";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/Payment/CheckoutForm";
import keys from "./config/keys";
console.log("OUTPUT: keys", keys);

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(keys.stripePublishableKey);
  }
  return stripePromise;
};

console.log("OUTPUT: stripePromise", stripePromise);

function App() {
  return (
    <div className="App">
      <Elements stripe={getStripe()}>
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
