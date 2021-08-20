// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import CartPage from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Landing from "./components/LandingPage/Landing";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import "./asdw.css";
import { AnimatePresence, motion } from "framer-motion";
import ProductPage from "./components/ProductPage/ProductPage";
import Spinner from "./lib/Spinner";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Landing />
            </motion.div>
          </Route>
          <Route exact path="/Cart">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CartPage />
            </motion.div>
          </Route>
          <Route exact path="/history">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <OrderHistory />
            </motion.div>
          </Route>
          <Route exact path="/new">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductGrid />
            </motion.div>
          </Route>
          <Route path="/product/:productId" exact>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductPage />
            </motion.div>
          </Route>
          <Route path="/men" exact>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Spinner />
            </motion.div>
          </Route>
          <Route path="/women" exact>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Spinner />
            </motion.div>
          </Route>
          <Route path="/kids" exact>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Spinner />
            </motion.div>
          </Route>
          <Route>
            <div>404 NOT Found</div>
          </Route>
        </Switch>
      </Router>
    </AnimatePresence>
  );
};

export default Routes;
