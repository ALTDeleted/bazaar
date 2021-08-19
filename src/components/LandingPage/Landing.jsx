import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Model from "./model";
//components
//Styles
import "./Landing.css";

function Landing() {
  return (
    // <Router>
    //   <Route
    //     render={({ location }) => (
    <>
      {/* <AnimatePresence> */}
      <Model />
      {/* </AnimatePresence> */}
    </>
    //     )}
    //   />
    // </Router>
  );
}

export default Landing;
