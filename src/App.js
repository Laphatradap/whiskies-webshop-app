import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.css";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductList/ProductDetail";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/Payment/CheckoutForm";

require("dotenv").config();
const stripePromise = loadStripe("pk_test_51Gv0EgEpz8q3eYR4W8D2icEyYlOE4PcgKHm2p3cIufp8O5QWpWo5HLzOBHmebHsf6RLJKpWFuqFIuaio6tGUWGAO00UZgtDM4W");
// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

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
