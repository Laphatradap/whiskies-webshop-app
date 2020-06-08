import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.css";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductList/ProductDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/product/:title" component={ProductDetail} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
