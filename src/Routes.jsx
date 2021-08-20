// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CartPage from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Landing from "./components/LandingPage/Landing";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./asdw.css";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        {/* <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300}> */}
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Cart">
            <CartPage />
          </Route>
          <Route exact path="/new">
            <ProductGrid />
          </Route>
        </Switch>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </Router>
    </>
  );
};

export default Routes;
