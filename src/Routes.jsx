import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import CartPage from "./components/Cart/CartPage";
import Landing from "./components/LandingPage/Landing";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import "./asdw.css";
import { motion, AnimatePresence } from "framer-motion";
import ProductPage from "./components/ProductPage/ProductPage";
import Spinner from "./lib/Spinner";

const Routes = () => {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <Landing />
          </motion.div>
        </Route>
        <Route exact path="/cart">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <CartPage />
          </motion.div>
        </Route>
        <Route exact path="/history">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <OrderHistory />
          </motion.div>
        </Route>
        <Route exact path="/new">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <ProductGrid />
          </motion.div>
        </Route>
        <Route path="/product/:productId" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <ProductPage />
          </motion.div>
        </Route>
        <Route path="/men" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <Spinner />
          </motion.div>
        </Route>
        <Route path="/women" exact>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <Spinner />
          </motion.div>
        </Route>
        {/* <Route path="/kids" exact>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Spinner />
            </motion.div>
          </Route> */}
        {/* <Route>
            <div>404 NOT Found</div>
          </Route> */}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
