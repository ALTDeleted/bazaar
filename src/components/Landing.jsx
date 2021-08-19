import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Model from "./LandingPage/model";
//components
import Header from "./LandingPage/header";
//Styles
import "./Landing.css";

function Landing() {
  

  return (
    <Router>
          <Header />
          <Route
            render={({ location }) => (
              <AnimatePresence  >
                    <Model/>
              </AnimatePresence>
            )}
          />
    </Router>
  );
}

export default Landing;
