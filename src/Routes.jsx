// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart";
import Header from "./components/Header/Header";
import Landing from "./components/Landing";
import ProductGrid from "./components/ProductGrid/ProductGrid";
const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/products" component={ProductGrid} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
