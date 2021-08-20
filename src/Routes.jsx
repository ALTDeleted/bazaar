// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CartPage from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Landing from "./components/LandingPage/Landing";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import "./asdw.css";
import { AnimatePresence } from "framer-motion";
import ProductPage from "./components/ProductPage/ProductPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Cart">
            <CartPage />
          </Route>
          <Route exact path="/history">
            <OrderHistory />
          </Route>
          <Route exact path="/new">
            <ProductGrid />
          </Route>
          <Route path="/product/:productId" exact component={ProductPage} />
          <Route> 404 NOT Found</Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
